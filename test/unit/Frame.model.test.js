// Model

const Frame = require('../../model/Frame.model.js')

// Error

const BadFormat = require('../../error/BadFormat.error.js')
const Operation = require('../../model/Operation.model')
const Technology = require('../../model/Technology.model')

// Happy path test suite

describe('Frame', () => {
  test('does to string', () => {
    // Given
    const timestamp = Date.now()
    const frame = new Frame(
      'https://github.com/overleaf/overleaf/tree/f94adbf0399dd2bc5daba9d118378d1d80b24d3f/services/clsi/app.js#L87C1-L91C1',
      timestamp,
      new Technology('javascript-db-mongo-call'),
      new Operation('CREATE'),
      ['']
    )
    const callString =
      '{"location":"https://github.com/overleaf/overleaf/tree/f94adbf0399dd2bc5daba9d118378d1d80b24d3f/services/clsi/app.js#L87C1-L91C1"' +
      ',"timestamp":' +
      timestamp +
      ',"technology":{"id":"javascript-db-mongo-call"}' +
      ',"operation":{"name":"CREATE"}' +
      ',"argumentValues":[""]}'

    // When
    const frameToString = frame.toString()

    // Then
    expect(frameToString).toStrictEqual(callString)
  })

  test('revives a frame object with no argument values', () => {
    // Given
    const location = 'https://github.com/test/tree/test.js#L1C1-L2C5'
    const timestamp = Date.now()
    const validFrameObject = {
      location: location,
      timestamp: timestamp,
      technology: new Technology('javascript-db-mongo-call'),
      operation: new Operation('CREATE'),
      heuristics: 'R1R2'
    }
    const frame = new Frame(
      location,
      timestamp,
      new Technology('javascript-db-mongo-call'),
      new Operation('CREATE'),
      undefined,
      'R1R2'
    )

    // When
    const revivedFrame = Frame.revive(validFrameObject)

    // Then
    expect(revivedFrame).toStrictEqual(frame)
  })

  test('revives a valid frame object with argument values', () => {
    // Given
    const location = 'https://github.com/test/tree/test.js#L1C1-L2C5'
    const timestamp = Date.now()
    const argumentValues = ['arg1', 'arg2']
    const validFrameObject = {
      location: location,
      timestamp: timestamp,
      technology: new Technology('javascript-db-mongo-call'),
      operation: new Operation('CREATE'),
      argumentValues: argumentValues,
      heuristics: 'R1R2'
    }
    const frame = new Frame(
      location,
      timestamp,
      new Technology('javascript-db-mongo-call'),
      new Operation('CREATE'),
      argumentValues,
      'R1R2'
    )

    // When
    const revivedFrame = Frame.revive(validFrameObject)

    // Then
    expect(revivedFrame).toStrictEqual(frame)
  })
})

// Failure cases test suite

describe('Frame tries to', () => {
  test('revives an object with no location', () => {
    // Given
    const objectWithMissingLocation = {
      timestamp: Date.now(),
      technology: new Technology('javascript-db-mongo-call'),
      operation: new Operation('CREATE'),
      argumentValues: ['']
    }
    // When Then
    expect(() => Frame.revive(objectWithMissingLocation)).toThrow(BadFormat)
  })

  test('revives an object with no timestamp', () => {
    // Given
    const objectWithMissingLocation = {
      location: 'https://github.com/test/tree/test.js#L1C1-L2C5',
      argumentValues: ['']
    }
    // When Then
    expect(() => Frame.revive(objectWithMissingLocation)).toThrow(BadFormat)
  })

  test('revives a valid frame object with no technology', () => {
    // Given
    const objectWithMissingTechnology = {
      timestamp: Date.now(),
      argumentValues: [''],
      operation: new Operation('CREATE')
    }

    // When Then
    expect(() => Frame.revive(objectWithMissingTechnology)).toThrow(BadFormat)
  })

  test('revives a valid frame object with no operation', () => {
    // Given
    const objectWithMissingTechnology = {
      timestamp: Date.now(),
      argumentValues: [''],
      technology: new Technology('javascript-db-mongo-call')
    }

    // When Then
    expect(() => Frame.revive(objectWithMissingTechnology)).toThrow(BadFormat)
  })
})
