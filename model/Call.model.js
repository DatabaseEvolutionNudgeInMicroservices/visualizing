// Error

const BadFormat = require('../error/BadFormat.error')
const { INPUT_INCORRECTLY_FORMATTED } = require('../error/Constant.error')

/**
 * @overview This class represents a call.
 */
class Call {
  /**
   * Instantiates a call.
   * @param timestamp {number} The timestamp of the call, i.e., when the call was performed.
   * @param argumentValues {[any]} The values passed to the called function or method.
   */
  constructor(timestamp, argumentValues) {
    this.timestamp = timestamp
    if (argumentValues) {
      // Avoids defining an argumentValues property as undefined (no argumentValues property).
      this.argumentValues = argumentValues
    }
  }

  getTimestamp() {
    return this.timestamp
  }

  getArgumentValues() {
    return this.argumentValues
  }

  /**
   * Revives a Call object.
   * @param object {Object} The given JavaScript object.
   * @return {CodeFragment} The related Call object.
   * @throws {Error} In the case of an invalid object format.
   */
  static revive(object) {
    if (
      object &&
      // Mandatory fields.
      object.hasOwnProperty('timestamp') &&
      object.timestamp
    ) {
      return new Call(object.timestamp, object?.argumentValues)
    } else {
      throw new BadFormat(`${INPUT_INCORRECTLY_FORMATTED}`)
    }
  }

  /**
   * Prints the object in a human-readable way (JSON).
   */
  toString() {
    return JSON.stringify(this)
  }
}

module.exports = Call
