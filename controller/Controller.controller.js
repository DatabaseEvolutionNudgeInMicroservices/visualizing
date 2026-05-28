// Helpers

const DataMapper = require('../helper/DataMapper.helper.js')

// Constants

const { NO_ANY_FILE_AND_NO_SCORE_UNDER_2_FILTER } = require('../helper/Constant.helper.js')

// Errors

const BadFormat = require('../error/BadFormat.error.js')
const { INPUT_INCORRECTLY_FORMATTED } = require('../error/Constant.error.js')

/**
 * @overview This class represents the controller.
 */
class Controller {
  /**
   * Instantiates a controller.
   */
  constructor() {
    this.dataMapper = new DataMapper()
  }

  /**
   * Transforms a static analysis report into a treemap.
   * @param staticAnalysisReport {String} A static analysis report.
   * @returns {Promise} A promise for the transformation.
   */
  transformToTreemap(staticAnalysisReport) {
    return new Promise((resolve, reject) => {
      if (
        staticAnalysisReport !== undefined &&
        staticAnalysisReport !== null &&
        staticAnalysisReport.length !== 0
      ) {
        try {
          let treemap = this.dataMapper.revive(staticAnalysisReport)
          treemap = this.dataMapper.deduplicate(treemap)
          treemap = this.dataMapper.filter(treemap, NO_ANY_FILE_AND_NO_SCORE_UNDER_2_FILTER)
          treemap = this.dataMapper.toTreemap(treemap)
          resolve(treemap)
        } catch (error) {
          reject(error)
        }
      } else {
        reject(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
      }
    })
  }

  /**
   * Transforms an analysis report into frames.
   * @param analysisReport {String} An analysis report.
   * @returns {Promise} A promise for the transformation.
   */
  transformToFrames(analysisReport) {
    return new Promise((resolve, reject) => {
      if (analysisReport !== undefined && analysisReport !== null && analysisReport.length !== 0) {
        try {
          const report = this.dataMapper.revive(analysisReport)
          const deduplicatedReport = this.dataMapper.deduplicate(report)
          const filteredReport = this.dataMapper.filter(
            deduplicatedReport,
            NO_ANY_FILE_AND_NO_SCORE_UNDER_2_FILTER
          )
          const frames = this.dataMapper.toFrames(filteredReport)
          resolve(frames)
        } catch (error) {
          reject(error)
        }
      } else {
        reject(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
      }
    })
  }

  /**
   * Transforms an analysis report into min-max calls count for the fragments.
   * @param analysisReport {String} An analysis report.
   * @returns {Promise} A promise for the min-max transformation.
   */
  transformToMinMaxCallsCount(analysisReport) {
    return new Promise((resolve, reject) => {
      if (analysisReport !== undefined && analysisReport !== null && analysisReport.length !== 0) {
        try {
          const report = this.dataMapper.revive(analysisReport)
          const deduplicatedReport = this.dataMapper.deduplicate(report)
          const filteredReport = this.dataMapper.filter(
            deduplicatedReport,
            NO_ANY_FILE_AND_NO_SCORE_UNDER_2_FILTER
          )
          const callsCount = this.dataMapper.toMinMaxCallsCount(filteredReport)
          resolve(callsCount)
        } catch (error) {
          reject(error)
        }
      } else {
        reject(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
      }
    })
  }
}

module.exports = Controller
