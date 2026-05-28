// Model

const CodeFragment = require('../model/CodeFragment.model.js')

// Filters

const ALL_FILTER = (x) => {
  // Excluding nothing.
  return x
}

const NO_ANY_FILE_FILTER = (codeFragment) => {
  // Excluding the javascript-any-any-file code fragments.
  return !(
    codeFragment instanceof CodeFragment &&
    codeFragment.getTechnology().getId() === 'javascript-any-any-file'
  )
}

const NO_ANY_FILE_AND_NO_SCORE_UNDER_2_FILTER = (codeFragment) => {
  // Excluding the javascript-any-any-file code fragments, the ones different from javascript-any-any, and the ones with a score lower than or equal to 2.
  return !(
    (codeFragment instanceof CodeFragment &&
      codeFragment.getTechnology().getId() !== 'javascript-any-any-any' &&
      Number.parseInt(codeFragment.getScore()) <= 2) ||
    (codeFragment instanceof CodeFragment &&
      codeFragment.getTechnology().getId() === 'javascript-any-any-file')
  )
}

// Layout

const MARGIN = 7.5
const SIZE = 20

// Colors

const DEFAULT_COLOR = '#FFFFFF'
const DEFAULT_COLOR_TREEMAP = '#000000'
const DEFAULT_OPACITY_TREEMAP = '0.05'
const DEFAULT_COLOR_REPOSITORY = '#000000'
const DEFAULT_OPACITY_REPOSITORY = '0.05'
const DEFAULT_COLOR_DIRECTORY = '#000000'
const DEFAULT_OPACITY_DIRECTORY = '0.05'
const DEFAULT_COLOR_FILE = '#FFFFFF'
const DEFAULT_OPACITY_FILE = '0.25'
const DEFAULT_COLOR_CODE_FRAGMENT = '#FFFFFF'
const DEFAULT_OPACITY_CODE_FRAGMENT = '1'

module.exports = {
  ALL_FILTER,
  NO_ANY_FILE_FILTER,
  NO_ANY_FILE_AND_NO_SCORE_UNDER_2_FILTER,
  MARGIN,
  SIZE,
  DEFAULT_COLOR,
  DEFAULT_COLOR_TREEMAP,
  DEFAULT_OPACITY_TREEMAP,
  DEFAULT_COLOR_REPOSITORY,
  DEFAULT_OPACITY_REPOSITORY,
  DEFAULT_COLOR_DIRECTORY,
  DEFAULT_OPACITY_DIRECTORY,
  DEFAULT_COLOR_FILE,
  DEFAULT_OPACITY_FILE,
  DEFAULT_COLOR_CODE_FRAGMENT,
  DEFAULT_OPACITY_CODE_FRAGMENT
}
