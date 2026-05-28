// Model

const Repository = require('../model/Repository.model.js')
const Treemap = require('../model/Treemap.model.js')
const Frame = require('../model/Frame.model.js')

// Helpers

const {
  ALL_FILTER,
  DEFAULT_COLOR_CODE_FRAGMENT,
  DEFAULT_COLOR_DIRECTORY,
  DEFAULT_COLOR_FILE,
  DEFAULT_COLOR_REPOSITORY,
  DEFAULT_COLOR_TREEMAP,
  DEFAULT_OPACITY_CODE_FRAGMENT,
  DEFAULT_OPACITY_DIRECTORY,
  DEFAULT_OPACITY_FILE,
  DEFAULT_OPACITY_REPOSITORY,
  DEFAULT_OPACITY_TREEMAP,
  MARGIN,
  SIZE
} = require('./Constant.helper.js')

// Error

const BadFormat = require('../error/BadFormat.error.js')
const BadFilter = require('../error/BadFilter.error.js')
const { INPUT_INCORRECTLY_FORMATTED, FILTER_UNDEFINED } = require('../error/Constant.error.js')

// Libraries

//const potpack = require('@/lib/packer.growing.js') // A library for the packing algorithm.
const binpack = require('bin-pack') // Another library for the packing algorithm.

/**
 * @overview This class represents the data mapper between a static analysis report and any request regarding visualization purposes.
 */
class DataMapper {
  // ------------------------------------------------------------------------
  //                            JSON -> Object
  // ------------------------------------------------------------------------

  /**
   * Revives the static analysis report from a given string representing the JSON object.
   * @param {*} json The given JSON object in string.
   * @returns The revived static analysis report.
   */
  revive(json) {
    try {
      let jsonParsed = JSON.parse(json)
      if (jsonParsed !== undefined && jsonParsed !== null) {
        let repositories = []
        jsonParsed.forEach((repository) => {
          repositories.push(Repository.revive(repository))
        })
        return repositories
      } else {
        throw new BadFormat(INPUT_INCORRECTLY_FORMATTED)
      }
    } catch (e) {
      throw new BadFormat(INPUT_INCORRECTLY_FORMATTED)
    }
  }

  // ------------------------------------------------------------------------
  //                          Object -> Object
  // ------------------------------------------------------------------------

  /**
   * Removes the low-scored duplicated code fragments in the given static analysis report.
   * @param {[]} repositories The given static analysis report.
   * @returns The filtered static analysis report.
   */
  deduplicate(repositories) {
    if (repositories !== undefined && repositories !== null) {
      // Repositories
      let repositoriesDeepcopy = this.revive(JSON.stringify(repositories))
      let resultRepositories = []
      repositoriesDeepcopy.forEach((repository) => {
        resultRepositories.push(this.deduplicateRepository(repository))
      })
      return resultRepositories
    } else {
      throw new BadFormat(INPUT_INCORRECTLY_FORMATTED)
    }
  }

  deduplicateRepository(repository) {
    // Directories
    let resultDirectories = []
    repository.getDirectories().forEach((directory) => {
      resultDirectories.push(this.deduplicateDirectory(directory))
    })
    repository.setDirectories(resultDirectories)
    return repository
  }

  deduplicateDirectory(directory) {
    // Directories
    let resultsDirectories = []
    directory.getDirectories().forEach((directory) => {
      resultsDirectories.push(this.deduplicateDirectory(directory))
    })
    directory.setDirectories(resultsDirectories)

    // Files
    let resultFiles = []
    directory.getFiles().forEach((file) => {
      resultFiles.push(this.deduplicateFile(file))
    })
    directory.setFiles(resultFiles)
    return directory
  }

  deduplicateFile(file) {
    let codeFragments = file.getCodeFragments().reduce((accumulator, codeFragment) => {
      let codeFragmentLocation = codeFragment.getLocation() // Code fragment location as identifier
      if (
        !accumulator[codeFragmentLocation] || // If the location is not already in the accumulator.
        Number.parseInt(accumulator[codeFragmentLocation].getScore()) < // Or if the location exists in the accumulator but the current code fragment has a bigger score.
          Number.parseInt(codeFragment.getScore())
      ) {
        accumulator[codeFragmentLocation] = codeFragment // Then keep the code fragment.
      }
      return accumulator
    }, {}) // It starts with an empty object {} as accumulator. This accumulator grows under the form of { "<location>" : codeFrament, ... }. For checking duplicates, the accessor accumulator["<location>"] is used above.
    file.setCodeFragments(
      Object.values(codeFragments) // It transforms the accumulator object under the form of { "<location>" : codeFragment, ... } to resolve the list of code fragments only.
    )
    return file
  }

  /**
   * Filters the given static analysis report.
   * @param {[Repository]} repositories The given static analysis report.
   * @param {() => {}} filter A filtering function.
   * @returns The filtered static analysis report.
   */
  filter(repositories, filter = ALL_FILTER) {
    if (repositories !== undefined && repositories !== null) {
      if (filter !== undefined && filter !== null) {
        // Repositories
        let repositoriesDeepcopy = this.revive(JSON.stringify(repositories))
        let resultRepositories = []
        repositoriesDeepcopy.forEach((repository) => {
          let resultRepository = this.filterRepository(repository, filter)
          if (resultRepository !== null) {
            resultRepositories.push(resultRepository)
          }
        })
        return resultRepositories
      } else {
        throw new BadFilter(FILTER_UNDEFINED)
      }
    } else {
      throw new BadFormat(INPUT_INCORRECTLY_FORMATTED)
    }
  }

  filterRepository(repository, filter) {
    if (filter(repository)) {
      // Directories
      let resultDirectories = []
      repository.getDirectories().forEach((directory) => {
        let resultDirectory = this.filterDirectory(directory, filter)
        if (resultDirectory !== null) {
          resultDirectories.push(resultDirectory)
        }
      })
      repository.setDirectories(resultDirectories)
      return repository
    }
    return null
  }

  filterDirectory(directory, filter) {
    if (filter(directory)) {
      // Directories
      let resultsDirectories = []
      directory.getDirectories().forEach((directory) => {
        let resultDirectory = this.filterDirectory(directory, filter)
        if (resultDirectory !== null) {
          resultsDirectories.push(resultDirectory)
        }
      })
      directory.setDirectories(resultsDirectories)

      // Files
      let resultFiles = []
      directory.getFiles().forEach((file) => {
        let resultFile = this.filterFile(file, filter)
        if (resultFile !== null) {
          resultFiles.push(resultFile)
        }
      })
      directory.setFiles(resultFiles)
      return directory
    }
    return null
  }

  filterFile(file, filter) {
    if (filter(file)) {
      // Code fragments
      let resultCodeFragments = []
      file.getCodeFragments().forEach((codeFragment) => {
        let resultCodeFragment = this.filterCodeFragment(codeFragment, filter)
        if (resultCodeFragment !== null) {
          resultCodeFragments.push(resultCodeFragment)
        }
      })
      file.setCodeFragments(resultCodeFragments)
      return file
    }
    return null
  }

  filterCodeFragment(codeFragment, filter) {
    if (filter(codeFragment)) {
      return codeFragment
    }
    return null
  }

  /**
   * Returns the list of values for a given property in the given static analysis report.
   * @param {[Repository]} repositories The given static analysis report.
   * @param {() => {}} selection A selection function pointing a given property.
   * @returns The list of values of the given property.
   */
  getPropertyValueList(repositories, selection) {
    if (repositories !== undefined && repositories !== null) {
      if (selection !== undefined && selection !== null) {
        let result = []
        repositories.forEach((repository) => {
          result = result.concat(this.getPropertyValueListRepository(repository, selection))
        })
        result = result.filter((i) => i !== null) // Delete nulls.
        result = result.sort(
          (a, b) =>
            result.filter((x) => x === b).length - result.filter((x) => x === a).length || a - b
        ) // Sort by frequency.
        result = [...new Set(result)] // Delete duplicates.
        return result
      } else {
        throw new BadFilter(FILTER_UNDEFINED)
      }
    } else {
      throw new BadFormat(INPUT_INCORRECTLY_FORMATTED)
    }
  }

  getPropertyValueListRepository(repository, selection) {
    let result = []

    result.push(selection(repository))

    repository.getDirectories().forEach((directory) => {
      result = result.concat(this.getPropertyValueListDirectory(directory, selection))
    })

    return result
  }

  getPropertyValueListDirectory(directory, selection) {
    let result = []

    result.push(selection(directory))

    directory.getDirectories().forEach((directory) => {
      result = result.concat(this.getPropertyValueListDirectory(directory, selection))
    })

    directory.getFiles().forEach((file) => {
      result = result.concat(this.getPropertyValueListFile(file, selection))
    })

    return result
  }

  getPropertyValueListFile(file, selection) {
    let result = []

    result.push(selection(file))

    file.getCodeFragments().forEach((codeFragment) => {
      result = result.concat(this.getPropertyValueListCodeFragment(codeFragment, selection))
    })

    return result
  }

  getPropertyValueListCodeFragment(codeFragment, selection) {
    return selection(codeFragment)
  }

  // ------------------------------------------------------------------------
  //                         Object -> Treemap
  // ------------------------------------------------------------------------

  /**
   * Converts to a treemap the given static analysis report.
   * @param {[Repository]} repositories The given static analysis report.
   * @returns A treemap representation of the static analysis report.
   */
  toTreemap(repositories) {
    // Treemap box data.
    if (repositories !== undefined && repositories !== null) {
      let fileTreeMapObject = new Treemap(
        'treemap',
        {},
        0,
        0,
        -1,
        -1,
        0,
        0,
        [],
        DEFAULT_COLOR_TREEMAP,
        DEFAULT_OPACITY_TREEMAP
      )

      // Visiting and mapping children.
      repositories.forEach((repository) => {
        let repositoryObject = this.toTreemapRepository(repository)
        fileTreeMapObject.setChildrenNumber(fileTreeMapObject.getChildrenNumber() + 1)
        fileTreeMapObject.setDescendantsNumber(
          fileTreeMapObject.getDescendantsNumber() + repositoryObject.getDescendantsNumber() + 1
        )
        fileTreeMapObject.getChildren().push(repositoryObject)
      })

      // Sorting children.
      fileTreeMapObject.getChildren().sort((a, b) => b.height - a.height) // Sorting by height before packing.

      // Packing children.
      let deepCopyChildren = JSON.parse(JSON.stringify(fileTreeMapObject.getChildren())) // Deepcopy of the elements before packing.
      let { elements, width, height } = this.pack(deepCopyChildren)
      fileTreeMapObject.setChildren(elements)
      fileTreeMapObject.setWidth(width + MARGIN)
      fileTreeMapObject.setHeight(height + MARGIN)

      return fileTreeMapObject
    } else {
      throw new BadFormat(INPUT_INCORRECTLY_FORMATTED)
    }
  }

  toTreemapRepository(repository) {
    // Repository box data.
    let repositoryObject = new Treemap(
      'repository',
      { location: repository.getLocation() },
      0,
      0,
      -1,
      -1,
      0,
      0,
      [],
      DEFAULT_COLOR_REPOSITORY,
      DEFAULT_OPACITY_REPOSITORY
    )

    // Visiting and mapping children.
    repository.getDirectories().forEach((directory) => {
      let directoryObject = this.toTreemapDirectory(directory)
      repositoryObject.setChildrenNumber(repositoryObject.getChildrenNumber() + 1)
      repositoryObject.setDescendantsNumber(
        repositoryObject.getDescendantsNumber() + directoryObject.getDescendantsNumber() + 1
      )
      repositoryObject.getChildren().push(directoryObject)
    })

    // Sorting children.
    repositoryObject.getChildren().sort((a, b) => b.height - a.height) // Sorting by height before packing.

    // Packing children.
    let deepCopyChildren = JSON.parse(JSON.stringify(repositoryObject.getChildren())) // Deepcopy of the elements before packing.
    let { elements, width, height } = this.pack(deepCopyChildren) // Packing.
    repositoryObject.setChildren(elements)
    repositoryObject.setWidth(width + MARGIN)
    repositoryObject.setHeight(height + MARGIN)
    return repositoryObject
  }

  toTreemapDirectory(directory) {
    // Directory box data.
    let directoryObject = new Treemap(
      'directory',
      { location: directory.getLocation() },
      0,
      0,
      -1,
      -1,
      0,
      0,
      [],
      DEFAULT_COLOR_DIRECTORY,
      DEFAULT_OPACITY_DIRECTORY
    )

    // Visiting directories children.
    directory.getDirectories().forEach((directory) => {
      let aDirectoryObject = this.toTreemapDirectory(directory)
      directoryObject.setChildrenNumber(directoryObject.getChildrenNumber() + 1)
      directoryObject.setDescendantsNumber(
        directoryObject.getDescendantsNumber() + aDirectoryObject.getDescendantsNumber() + 1
      )
      directoryObject.getChildren().push(aDirectoryObject)
    })

    // Visiting files children.
    directory.getFiles().forEach((file) => {
      let fileObject = this.toTreemapFile(file)
      directoryObject.setChildrenNumber(directoryObject.getChildrenNumber() + 1)
      directoryObject.setDescendantsNumber(
        directoryObject.getDescendantsNumber() + fileObject.getDescendantsNumber() + 1
      )
      directoryObject.getChildren().push(fileObject)
    })

    // Sorting children.
    directoryObject.getChildren().sort((a, b) => b.height - a.height) // Sorting by height before packing.

    // Packing children.
    let deepCopyChildren = JSON.parse(JSON.stringify(directoryObject.getChildren())) // Deepcopy of the elements before packing.
    let { elements, width, height } = this.pack(deepCopyChildren) // Packing.
    directoryObject.setChildren(elements)
    directoryObject.setWidth(width + MARGIN)
    directoryObject.setHeight(height + MARGIN)

    return directoryObject
  }

  toTreemapFile(file) {
    // File box data.
    let fileObject = new Treemap(
      'file',
      { location: file.getLocation() },
      0,
      0,
      -1,
      -1,
      0,
      0,
      [],
      DEFAULT_COLOR_FILE,
      DEFAULT_OPACITY_FILE
    )

    fileObject.setChildrenNumber(file.getCodeFragments().length)
    fileObject.setDescendantsNumber(file.getCodeFragments().length)

    if (fileObject.childrenNumber !== 0) {
      // Visiting children.
      file.getCodeFragments().forEach((codeFragment) => {
        let codeFragmentObject = this.toTreemapCodeFragment(codeFragment)
        fileObject.getChildren().push(codeFragmentObject)
      })

      // Sorting children.
      // No need to sort same sizes.

      // Packing children.
      let deepCopyChildren = JSON.parse(JSON.stringify(fileObject.getChildren())) // Deepcopy of the elements before packing.
      let { elements, width, height } = this.pack(deepCopyChildren) // Packing.
      fileObject.setChildren(elements)
      fileObject.setWidth(width + MARGIN)
      fileObject.setHeight(height + MARGIN)
    } else {
      // Empty file.
      fileObject.setWidth(SIZE)
      fileObject.setHeight(SIZE)
    }

    return fileObject
  }

  toTreemapCodeFragment(codeFragment) {
    // Code fragment box data.
    let codeFragmentObject = new Treemap(
      'codeFragment',
      codeFragment,
      0,
      0,
      SIZE,
      SIZE,
      0,
      0,
      [],
      DEFAULT_COLOR_CODE_FRAGMENT,
      DEFAULT_OPACITY_CODE_FRAGMENT
    )
    return codeFragmentObject
  }

  /**
   * Packs, as square as possible, the given elements of various widths and heights.
   * @param {[Object]} elements The given elements to pack containing at least the following attributes: x, y, width, height.
   * @returns The given elements with updated positions (X,Y) and dimensions (width, height).
   */
  pack(elements) {
    // Temporarily adds margins to take into account when calculating the position during the bin packing algorithm.
    elements.forEach((child) => {
      child.width = child.width + MARGIN
      child.height = child.height + MARGIN
    })

    // Packs the elements.
    let result = binpack(elements)

    // Updates the new positions (X,Y).
    elements = result.items.map((box) => {
      box.item.x = box.x + MARGIN
      box.item.y = box.y + MARGIN
      return box.item
    })

    // Removes the temporary added margins.
    elements.forEach((child) => {
      child.width = child.width - MARGIN
      child.height = child.height - MARGIN
    })
    return { elements: elements, width: result.width, height: result.height }
  }

  // ------------------------------------------------------------------------
  //            Object -> Timeline / Animated Heat Treemap
  // ------------------------------------------------------------------------

  /**
   * Converts the given static analysis report to an array of frames.
   * @param repositories {[Repository]} The given static analysis report.
   * @returns {[Frame]} The array containing the frames.
   */
  toFrames(repositories) {
    const frames = []
    if (repositories) {
      repositories.forEach((repository) => {
        this.toFrameRepository(repository, frames)
      })
      // Sorts the frames (smallest timestamp first).
      return frames.sort((a, b) => a.timestamp - b.timestamp)
    } else {
      throw new BadFormat(INPUT_INCORRECTLY_FORMATTED)
    }
  }

  toFrameRepository(repository, frames) {
    repository.getDirectories().forEach((directory) => {
      this.toFrameDirectory(directory, frames)
    })
  }

  toFrameDirectory(directory, frames) {
    directory.getFiles().forEach((file) => {
      file.getCodeFragments().forEach((codeFragment) => {
        frames.push(...this.toFrameCodeFragment(codeFragment))
      })
    })

    const subDirectories = directory.getDirectories()

    if (subDirectories) {
      subDirectories.forEach((subDirectory) => {
        this.toFrameDirectory(subDirectory, frames)
      })
    }
  }

  toFrameCodeFragment(codeFragment) {
    const calls = codeFragment.getCalls()
    return calls
      ? calls.map((call) => {
          return new Frame(
            codeFragment.getLocation(),
            call.getTimestamp(),
            codeFragment.getTechnology(),
            codeFragment.getOperation(),
            call.getArgumentValues(),
            codeFragment.heuristics
          )
        })
      : []
  }

  /**
   * Computes the minimum and maximum number of calls for all code fragments in the given static analysis report.
   * This is used for the color scale of the animated heat treemap.
   * @param repositories {[Repository]} The given static analysis report.
   * @returns {{min: number, max: number}} An object containing the minimum and maximum number of calls.
   */
  toMinMaxCallsCount(repositories) {
    if (!repositories) {
      throw new BadFormat(INPUT_INCORRECTLY_FORMATTED)
    }

    if (!repositories.length) {
      return { min: 0, max: 0 } // Returns 0 for both min and max as default values when none repository is found.
    }

    const minMaxCallsCount = { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER }

    repositories.forEach((repository) => {
      this.toMinMaxCallsCountRepository(repository, minMaxCallsCount)
    })

    return minMaxCallsCount
  }

  toMinMaxCallsCountRepository(repository, minMaxCallsCount) {
    repository.getDirectories().forEach((directory) => {
      this.toMinMaxCallsCountDirectory(directory, minMaxCallsCount)
    })
  }

  toMinMaxCallsCountDirectory(directory, minMaxCallsCount) {
    directory.getFiles().forEach((file) => {
      file.getCodeFragments().forEach((codeFragment) => {
        this.toMinMaxCallsCountCodeFragment(codeFragment, minMaxCallsCount)
      })
    })

    const subDirectories = directory.getDirectories()

    if (subDirectories) {
      subDirectories.forEach((subDirectory) => {
        this.toMinMaxCallsCountDirectory(subDirectory, minMaxCallsCount)
      })
    }
  }

  toMinMaxCallsCountCodeFragment(codeFragment, minMaxCallsCount) {
    const callsCount = codeFragment.getCalls() ? codeFragment.getCalls().length : 0
    minMaxCallsCount.min = Math.min(minMaxCallsCount.min, callsCount)
    minMaxCallsCount.max = Math.max(minMaxCallsCount.max, callsCount)
  }
}

module.exports = DataMapper
