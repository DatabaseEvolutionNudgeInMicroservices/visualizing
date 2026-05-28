// Model

const Technology = require('./Technology.model')
const Operation = require('./Operation.model')

// Error

const BadFormat = require('../error/BadFormat.error')
const { INPUT_INCORRECTLY_FORMATTED } = require('../error/Constant.error')

/**
 * @overview This class represents a function / method call.
 */
class Frame {
  /**
   * Instantiates a frame.
   * @param location {string} The location string.
   * @param timestamp {number} The timestamp of the frame.
   * @param technology {Technology} The database technology of the call
   * (e.g., 'javascript-db-redis-call' or 'javascript-db-mongo-call').
   * @param operation {Operation} The database operation category performed in the call
   * (e.g., 'CREATE', 'READ', 'UPDATE', 'DELETE', 'OTHER' or '?').
   * @param argumentValues {[any]} The values passed to the called function or method.
   */
  constructor(location, timestamp, technology, operation, argumentValues, heuristics) {
    this.location = location
    this.timestamp = timestamp
    this.technology = technology
    this.operation = operation
    // Avoids defining an argumentValues property as undefined (no argumentValues property)
    if (argumentValues) {
      this.argumentValues = argumentValues
    }
    this.heuristics = heuristics
  }

  getLocation() {
    return this.location
  }

  getTimestamp() {
    return this.timestamp
  }

  getArgumentValues() {
    return this.argumentValues
  }

  getTechnology() {
    return Technology.revive(this.technology)
  }

  getOperation() {
    return Operation.revive(this.operation)
  }

  getHeuristics() {
    return this.heuristics
  }

  /**
   * Revives a Frame object.
   * @param object {Object} The given JavaScript object.
   * @return {Call} The related Call object.
   * @throws {Error} In the case of an invalid object format.
   */
  static revive(object) {
    if (
      object &&
      // Mandatory fields
      object.hasOwnProperty('location') &&
      object.location &&
      object.hasOwnProperty('timestamp') &&
      object.timestamp &&
      object.hasOwnProperty('technology') &&
      object.technology &&
      object.hasOwnProperty('operation') &&
      object.operation &&
      object.hasOwnProperty('heuristics') &&
      object.heuristics
    ) {
      return new Frame(
        object.location,
        object.timestamp,
        Technology.revive(object.technology),
        Operation.revive(object.operation),
        object?.argumentValues,
        object.heuristics
      )
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

module.exports = Frame
