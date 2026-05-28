// Controllers

const Controller = require('../../controller/Controller.controller.js')

// Errors

const BadFormat = require('../../error/BadFormat.error.js')
const Frame = require('../../model/Frame.model')
const Operation = require('../../model/Operation.model')
const Technology = require('../../model/Technology.model')

// Happy path test suite

describe('Controller', () => {
  it('transforms a static analysis report to a treemap', async () => {
    // Given

    let controller = new Controller()

    // When Then

    const staticAnalysisReportJson =
      '[{"location":"https://www.github.com/user/project/blob/master/","directories":[{"location":"https://www.github.com/user/project/blob/master/js/","directories":[{"location":"https://www.github.com/user/project/blob/master/js/app/","directories":[],"files":[{"location":"https://www.github.com/user/project/blob/master/js/app/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"},{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2","technology":{"id":"javascript-api-express-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"\'/user/:userId\'"},"concepts":[{"name":"user"}],"heuristics":"E1E2E3E4E5E6E7E8","score":"8"},{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4","technology":{"id":"javascript-db-mongo-call"},"operation":{"name":"READ"},"method":{"name":"find"},"sample":{"content":"user {\\"user_id\\":userId}"},"concepts":[{"name":"user"}],"heuristics":"M1M2M3M4M5M6","score":"6"},{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6","technology":{"id":"javascript-db-redis-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"USER_ID:userId"},"concepts":[{"name":"user"}],"heuristics":"R1R2R3R4R5R6","score":"6"}]}]}],"files":[{"location":"https://www.github.com/user/project/blob/master/js/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"}]}]}]},{"location":"https://www.github.com/user/projectClone/blob/master/","directories":[{"location":"https://www.github.com/user/projectClone/blob/master/js/","directories":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app/","directories":[],"files":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"},{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2","technology":{"id":"javascript-api-express-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"\'/user/:userId\'"},"concepts":[{"name":"user"}],"heuristics":"E1E2E3E4E5E6E7E8","score":"8"},{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4","technology":{"id":"javascript-db-mongo-call"},"operation":{"name":"READ"},"method":{"name":"find"},"sample":{"content":"user {\\"user_id\\":userId}"},"concepts":[{"name":"user"}],"heuristics":"M1M2M3M4M5M6","score":"6"},{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6","technology":{"id":"javascript-db-redis-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"USER_ID:userId"},"concepts":[{"name":"user"}],"heuristics":"R1R2R3R4R5R6","score":"6"}]}]}],"files":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"}]}]}]}]'

    await controller.transformToTreemap(staticAnalysisReportJson).then((treemap) => {
      // Then
      expect(treemap.width !== 0).toBe(true)
      expect(treemap.height !== 0).toBe(true)
      expect(treemap.childrenNumber).toEqual(2)
      expect(treemap.descendantsNumber).toEqual(16)
      expect(treemap.children.length).toEqual(2)

      expect(treemap.children[0].data.location).toEqual(
        'https://www.github.com/user/project/blob/master/'
      )
      expect(treemap.children[0].width !== 0).toBe(true)
      expect(treemap.children[0].height !== 0).toBe(true)
      expect(treemap.children[0].childrenNumber).toEqual(1)
      expect(treemap.children[0].descendantsNumber).toEqual(7)
      expect(treemap.children[0].children.length).toEqual(1)

      expect(treemap.children[0].children[0].width !== 0).toBe(true)
      expect(treemap.children[0].children[0].height !== 0).toBe(true)
      expect(treemap.children[0].children[0].childrenNumber).toEqual(2)
      expect(treemap.children[0].children[0].descendantsNumber).toEqual(6)
      expect(treemap.children[0].children[0].data.location).toEqual(
        'https://www.github.com/user/project/blob/master/js/'
      )
      expect(treemap.children[0].children[0].children.length).toEqual(2)

      expect(treemap.children[0].children[0].children[0].x !== 0).toBe(true)
      expect(treemap.children[0].children[0].children[0].y !== 0).toBe(true)
      expect(treemap.children[0].children[0].children[0].width !== 0).toBe(true)
      expect(treemap.children[0].children[0].children[0].height !== 0).toBe(true)
      expect(treemap.children[0].children[0].children[0].childrenNumber).toEqual(1)
      expect(treemap.children[0].children[0].children[0].descendantsNumber).toEqual(4)
      expect(treemap.children[0].children[0].children[0].data.location).toEqual(
        'https://www.github.com/user/project/blob/master/js/app/'
      )
      expect(treemap.children[0].children[0].children[0].children.length).toEqual(1)

      expect(treemap.children[0].children[0].children[0].children[0].x !== 0).toBe(true)
      expect(treemap.children[0].children[0].children[0].children[0].y !== 0).toBe(true)
      expect(treemap.children[0].children[0].children[0].children[0].width !== 0).toBe(true)
      expect(treemap.children[0].children[0].children[0].children[0].height !== 0).toBe(true)
      expect(treemap.children[0].children[0].children[0].children[0].childrenNumber).toEqual(3)
      expect(treemap.children[0].children[0].children[0].children[0].descendantsNumber).toEqual(3)
      expect(treemap.children[0].children[0].children[0].children[0].data.location).toEqual(
        'https://www.github.com/user/project/blob/master/js/app/app.js'
      )
      expect(treemap.children[0].children[0].children[0].children[0].children.length).toEqual(3)

      expect(treemap.children[0].children[0].children[0].children[0].children[0].x !== 0).toBe(true)
      expect(treemap.children[0].children[0].children[0].children[0].children[0].y !== 0).toBe(true)
      expect(treemap.children[0].children[0].children[0].children[0].children[0].width).toEqual(20)
      expect(treemap.children[0].children[0].children[0].children[0].children[0].height).toEqual(20)
      expect(
        treemap.children[0].children[0].children[0].children[0].children[0].childrenNumber
      ).toEqual(0)
      expect(
        treemap.children[0].children[0].children[0].children[0].children[0].descendantsNumber
      ).toEqual(0)
    })
  })

  it('transform a static analysis report to frames', () => {
    // Given
    const staticAnalysisReportJson =
      '[{"location":"https://www.github.com/user/project/blob/master/","directories":[{"location":"https://www.github.com/user/project/blob/master/js/","directories":[{"location":"https://www.github.com/user/project/blob/master/js/app/","directories":[],"files":[{"location":"https://www.github.com/user/project/blob/master/js/app/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"},{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2","technology":{"id":"javascript-api-express-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"\'/user/:userId\'"},"concepts":[{"name":"user"}],"heuristics":"E1E2E3E4E5E6E7E8","score":"8"},{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4","technology":{"id":"javascript-db-mongo-call"},"operation":{"name":"READ"},"method":{"name":"find"},"sample":{"content":"user {\\"user_id\\":userId}"},"concepts":[{"name":"user"}],"heuristics":"M1M2M3M4M5M6","score":"6"},{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6","technology":{"id":"javascript-db-redis-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"USER_ID:userId"},"concepts":[{"name":"user"}],"heuristics":"R1R2R3R4R5R6","score":"6"}]}]}],"files":[{"location":"https://www.github.com/user/project/blob/master/js/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"}]}]}]},{"location":"https://www.github.com/user/projectClone/blob/master/","directories":[{"location":"https://www.github.com/user/projectClone/blob/master/js/","directories":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app/","directories":[],"files":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"},{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2","technology":{"id":"javascript-api-express-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"\'/user/:userId\'"},"concepts":[{"name":"user"}],"heuristics":"E1E2E3E4E5E6E7E8","score":"8"},{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4","technology":{"id":"javascript-db-mongo-call"},"operation":{"name":"READ"},"method":{"name":"find"},"sample":{"content":"user {\\"user_id\\":userId}"},"concepts":[{"name":"user"}],"heuristics":"M1M2M3M4M5M6","score":"6","calls":[{"timestamp":1750336164614,"argumentValues":[""]},{"timestamp":1750336164615,"argumentValues":["a","b"]}]},{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6","technology":{"id":"javascript-db-redis-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"USER_ID:userId"},"concepts":[{"name":"user"}],"heuristics":"R1R2R3R4R5R6","score":"6","calls":[{"timestamp":1746933144652,"argumentValues":["x","y"]}]}]}]}],"files":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"}]}]}]}]'
    const controller = new Controller()

    // When Then
    controller.transformToFrames(staticAnalysisReportJson).then((frames) => {
      expect(frames.length).toEqual(3)
      expect(frames).toStrictEqual([
        new Frame(
          'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
          1746933144652,
          new Technology('javascript-db-redis-call'),
          new Operation('READ'),
          ['x', 'y'],
          'R1R2R3R4R5R6'
        ),
        new Frame(
          'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
          1750336164614,
          new Technology('javascript-db-mongo-call'),
          new Operation('READ'),
          [''],
          'M1M2M3M4M5M6'
        ),
        new Frame(
          'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
          1750336164615,
          new Technology('javascript-db-mongo-call'),
          new Operation('READ'),
          ['a', 'b'],
          'M1M2M3M4M5M6'
        )
      ])
    })
  })

  it('transform an analysis report to min max calls count', () => {
    // Given
    const analysisReportJson =
      '[{"location":"https://www.github.com/user/project/blob/master/","directories":[{"location":"https://www.github.com/user/project/blob/master/js/","directories":[{"location":"https://www.github.com/user/project/blob/master/js/app/","directories":[],"files":[{"location":"https://www.github.com/user/project/blob/master/js/app/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"},{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2","technology":{"id":"javascript-api-express-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"\'/user/:userId\'"},"concepts":[{"name":"user"}],"heuristics":"E1E2E3E4E5E6E7E8","score":"8"},{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4","technology":{"id":"javascript-db-mongo-call"},"operation":{"name":"READ"},"method":{"name":"find"},"sample":{"content":"user {\\"user_id\\":userId}"},"concepts":[{"name":"user"}],"heuristics":"M1M2M3M4M5M6","score":"6"},{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6","technology":{"id":"javascript-db-redis-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"USER_ID:userId"},"concepts":[{"name":"user"}],"heuristics":"R1R2R3R4R5R6","score":"6"}]}]}],"files":[{"location":"https://www.github.com/user/project/blob/master/js/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"}]}]}]},{"location":"https://www.github.com/user/projectClone/blob/master/","directories":[{"location":"https://www.github.com/user/projectClone/blob/master/js/","directories":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app/","directories":[],"files":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"},{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2","technology":{"id":"javascript-api-express-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"\'/user/:userId\'"},"concepts":[{"name":"user"}],"heuristics":"E1E2E3E4E5E6E7E8","score":"8"},{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4","technology":{"id":"javascript-db-mongo-call"},"operation":{"name":"READ"},"method":{"name":"find"},"sample":{"content":"user {\\"user_id\\":userId}"},"concepts":[{"name":"user"}],"heuristics":"M1M2M3M4M5M6","score":"6","calls":[{"timestamp":1750336164614,"argumentValues":[""]},{"timestamp":1750336164615,"argumentValues":["a","b"]}]},{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6","technology":{"id":"javascript-db-redis-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"USER_ID:userId"},"concepts":[{"name":"user"}],"heuristics":"R1R2R3R4R5R6","score":"6","calls":[{"timestamp":1746933144652,"argumentValues":["x","y"]}]}]}]}],"files":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"}]}]}]}]'
    const controller = new Controller()

    // When Then
    controller.transformToMinMaxCallsCount(analysisReportJson).then((minMaxCallsCount) => {
      expect(minMaxCallsCount).toStrictEqual({ min: 0, max: 2 })
    })
  })
})

// Failure cases test suite

describe('Controller tries to', () => {
  it('transform a null static analysis report to a treemap', async () => {
    // Given

    let controller = new Controller()

    // When Then

    await expect(controller.transformToTreemap(null)).rejects.toThrow(BadFormat)
  })

  it('transform an undefined static analysis report to a treemap', async () => {
    // Given

    let controller = new Controller()

    // When Then

    await expect(controller.transformToTreemap(undefined)).rejects.toThrow(BadFormat)
  })

  it('transform an empty static analysis report to a treemap', async () => {
    // Given

    let controller = new Controller()

    // When Then

    await expect(controller.transformToTreemap('')).rejects.toThrow(BadFormat)
  })

  it('transform an incorrectly formatted static analysis report to a treemap', async () => {
    // Given

    let controller = new Controller()

    // When Then

    await expect(controller.transformToTreemap('{')).rejects.toThrow(BadFormat)
  })

  it('transform a null static analysis report to frames', async () => {
    // Given

    let controller = new Controller()

    // When Then
    await expect(controller.transformToFrames(null)).rejects.toThrow(BadFormat)
  })

  it('transform an undefined static analysis report to frames', async () => {
    // Given
    let controller = new Controller()

    // When Then
    await expect(controller.transformToFrames(undefined)).rejects.toThrow(BadFormat)
  })

  it('transform an empty static analysis report to frames', async () => {
    // Given
    let controller = new Controller()

    // When Then
    await expect(controller.transformToFrames('')).rejects.toThrow(BadFormat)
  })

  it('transform an empty analysis report to min max calls count', async () => {
    // Given
    let controller = new Controller()

    // When Then
    await expect(controller.transformToMinMaxCallsCount('')).rejects.toThrow(BadFormat)
  })

  it('transform an undefined analysis report to min max calls count', async () => {
    // Given
    let controller = new Controller()

    // When Then
    await expect(controller.transformToMinMaxCallsCount(undefined)).rejects.toThrow(BadFormat)
  })

  it('transform a null analysis report to min max calls count', async () => {
    // Given
    let controller = new Controller()

    // When Then
    await expect(controller.transformToMinMaxCallsCount(null)).rejects.toThrow(BadFormat)
  })
})
