// Helper

const DataMapper = require('../../helper/DataMapper.helper.js')
const { NO_ANY_FILE_FILTER } = require('../../helper/Constant.helper')

// Model

const Repository = require('../../model/Repository.model.js')
const Directory = require('../../model/Directory.model.js')
const File = require('../../model/File.model.js')
const CodeFragment = require('../../model/CodeFragment.model.js')
const Call = require('../../model/Call.model.js')
const Frame = require('../../model/Frame.model.js')
const Technology = require('../../model/Technology.model.js')
const Operation = require('../../model/Operation.model.js')
const Method = require('../../model/Method.model.js')
const Sample = require('../../model/Sample.model.js')
const Concept = require('../../model/Concept.model.js')

// Error

const BadFormat = require('../../error/BadFormat.error')
const BadFilter = require('../../error/BadFilter.error')
const { INPUT_INCORRECTLY_FORMATTED, FILTER_UNDEFINED } = require('../../error/Constant.error.js')

const staticAnalysisReportModel = [
  new Repository('https://www.github.com/user/project/blob/master/', [
    new Directory(
      'https://www.github.com/user/project/blob/master/js/',
      [
        new Directory(
          'https://www.github.com/user/project/blob/master/js/app/',
          [],
          [
            new File('https://www.github.com/user/project/blob/master/js/app/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              ),
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                new Technology('javascript-api-express-call'),
                new Operation('READ'),
                new Method('get'),
                new Sample("'/user/:userId'"),
                [new Concept('user')],
                'E1E2E3E4E5E6E7E8',
                '8'
              ),
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                new Technology('javascript-db-mongo-call'),
                new Operation('READ'),
                new Method('find'),
                new Sample('user {"user_id":userId}'),
                [new Concept('user')],
                'M1M2M3M4M5M6',
                '6'
              ),
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                new Technology('javascript-db-redis-call'),
                new Operation('READ'),
                new Method('get'),
                new Sample('USER_ID:userId'),
                [new Concept('user')],
                'R1R2R3R4R5R6',
                '6'
              )
            ])
          ]
        )
      ],
      [
        new File('https://www.github.com/user/project/blob/master/js/app.js', 1, [
          new CodeFragment(
            'https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0',
            new Technology('javascript-any-any-file'),
            new Operation('OTHER'),
            new Method(' '),
            new Sample(' '),
            [],
            'A1',
            '1'
          )
        ])
      ]
    )
  ]),
  new Repository('https://www.github.com/user/projectClone/blob/master/', [
    new Directory(
      'https://www.github.com/user/projectClone/blob/master/js/',
      [
        new Directory(
          'https://www.github.com/user/projectClone/blob/master/js/app/',
          [],
          [
            new File('https://www.github.com/user/projectClone/blob/master/js/app/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              ),
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                new Technology('javascript-api-express-call'),
                new Operation('READ'),
                new Method('get'),
                new Sample("'/user/:userId'"),
                [new Concept('user')],
                'E1E2E3E4E5E6E7E8',
                '8'
              ),
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                new Technology('javascript-db-mongo-call'),
                new Operation('READ'),
                new Method('find'),
                new Sample('user {"user_id":userId}'),
                [new Concept('user')],
                'M1M2M3M4M5M6',
                '6'
              ),
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                new Technology('javascript-db-redis-call'),
                new Operation('READ'),
                new Method('get'),
                new Sample('USER_ID:userId'),
                [new Concept('user')],
                'R1R2R3R4R5R6',
                '6'
              )
            ])
          ]
        )
      ],
      [
        new File('https://www.github.com/user/projectClone/blob/master/js/app.js', 1, [
          new CodeFragment(
            'https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0',
            new Technology('javascript-any-any-file'),
            new Operation('OTHER'),
            new Method(' '),
            new Sample(' '),
            [],
            'A1',
            '1'
          )
        ])
      ]
    )
  ])
]

const staticAnalysisReportJson =
  '[{"location":"https://www.github.com/user/project/blob/master/","directories":[{"location":"https://www.github.com/user/project/blob/master/js/","directories":[{"location":"https://www.github.com/user/project/blob/master/js/app/","directories":[],"files":[{"location":"https://www.github.com/user/project/blob/master/js/app/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"},{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2","technology":{"id":"javascript-api-express-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"\'/user/:userId\'"},"concepts":[{"name":"user"}],"heuristics":"E1E2E3E4E5E6E7E8","score":"8"},{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4","technology":{"id":"javascript-db-mongo-call"},"operation":{"name":"READ"},"method":{"name":"find"},"sample":{"content":"user {\\"user_id\\":userId}"},"concepts":[{"name":"user"}],"heuristics":"M1M2M3M4M5M6","score":"6"},{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6","technology":{"id":"javascript-db-redis-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"USER_ID:userId"},"concepts":[{"name":"user"}],"heuristics":"R1R2R3R4R5R6","score":"6"}]}]}],"files":[{"location":"https://www.github.com/user/project/blob/master/js/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"}]}]}]},{"location":"https://www.github.com/user/projectClone/blob/master/","directories":[{"location":"https://www.github.com/user/projectClone/blob/master/js/","directories":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app/","directories":[],"files":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"},{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2","technology":{"id":"javascript-api-express-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"\'/user/:userId\'"},"concepts":[{"name":"user"}],"heuristics":"E1E2E3E4E5E6E7E8","score":"8"},{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4","technology":{"id":"javascript-db-mongo-call"},"operation":{"name":"READ"},"method":{"name":"find"},"sample":{"content":"user {\\"user_id\\":userId}"},"concepts":[{"name":"user"}],"heuristics":"M1M2M3M4M5M6","score":"6"},{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6","technology":{"id":"javascript-db-redis-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"USER_ID:userId"},"concepts":[{"name":"user"}],"heuristics":"R1R2R3R4R5R6","score":"6"}]}]}],"files":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app.js","linesOfCode":1,"codeFragments":[{"location":"https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0","technology":{"id":"javascript-any-any-file"},"operation":{"name":"OTHER"},"method":{"name":" "},"sample":{"content":" "},"concepts":[],"heuristics":"A1","score":"1"}]}]}]}]'

describe('Data mapper helper', function () {
  // ---------------------------------------------------------------
  // Revive
  // ---------------------------------------------------------------

  it('revives the static analysis report from a JSON object', function () {
    // Given
    let dataMapper = new DataMapper()
    // When
    let revivedStaticAnalysisReport = dataMapper.revive(staticAnalysisReportJson)

    // Then
    expect(revivedStaticAnalysisReport).toEqual(staticAnalysisReportModel)
  })

  it('tries to revive the static analysis report from an undefined JSON object', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.revive(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('tries to revive the static analysis report from a null JSON object', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.revive(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('tries to revive the static analysis report from an incomplete JSON object', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.revive('[{}]')
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('tries to revive the static analysis report from an incorrectly formatted JSON object', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.revive('[}]')
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  // ---------------------------------------------------------------
  // Deduplicate
  // ---------------------------------------------------------------

  it('deduplicate the static analysis report while removing 1 low-scored duplicate per code fragment when the higher is before', function () {
    // Given
    let dataMapper = new DataMapper()
    let staticAnalysisReportWithDuplicates = [
      new Repository('https://www.github.com/user/project/blob/master/', [
        new Directory(
          'https://www.github.com/user/project/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/project/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/project/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/project/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ]),
      new Repository('https://www.github.com/user/projectClone/blob/master/', [
        new Directory(
          'https://www.github.com/user/projectClone/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/projectClone/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/projectClone/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/projectClone/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ])
    ]

    // When
    let filteredStaticAnalysisReport = dataMapper.deduplicate(staticAnalysisReportWithDuplicates)

    // Then
    expect(JSON.stringify(filteredStaticAnalysisReport)).toEqual(
      JSON.stringify(staticAnalysisReportModel)
    )
  })

  it('deduplicate the static analysis report while removing 1 low-scored duplicate per code fragment when the higher is after', function () {
    // Given
    let dataMapper = new DataMapper()
    let staticAnalysisReportWithDuplicates = [
      new Repository('https://www.github.com/user/project/blob/master/', [
        new Directory(
          'https://www.github.com/user/project/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/project/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/project/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/project/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ]),
      new Repository('https://www.github.com/user/projectClone/blob/master/', [
        new Directory(
          'https://www.github.com/user/projectClone/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/projectClone/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/projectClone/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/projectClone/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ])
    ]

    // When
    let filteredStaticAnalysisReport = dataMapper.deduplicate(staticAnalysisReportWithDuplicates)

    // Then
    expect(JSON.stringify(filteredStaticAnalysisReport)).toEqual(
      JSON.stringify(staticAnalysisReportModel)
    )
  })

  it('deduplicate the static analysis report while removing 2 low-scored duplicate per code fragment when the higher is before', function () {
    // Given
    let dataMapper = new DataMapper()
    let staticAnalysisReportWithDuplicates = [
      new Repository('https://www.github.com/user/project/blob/master/', [
        new Directory(
          'https://www.github.com/user/project/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/project/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/project/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/project/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ]),
      new Repository('https://www.github.com/user/projectClone/blob/master/', [
        new Directory(
          'https://www.github.com/user/projectClone/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/projectClone/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/projectClone/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/projectClone/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ])
    ]

    // When
    let filteredStaticAnalysisReport = dataMapper.deduplicate(staticAnalysisReportWithDuplicates)

    // Then
    expect(JSON.stringify(filteredStaticAnalysisReport)).toEqual(
      JSON.stringify(staticAnalysisReportModel)
    )
  })

  it('deduplicate the static analysis report while removing 2 low-scored duplicate per code fragment when the higher is in the middle', function () {
    // Given
    let dataMapper = new DataMapper()
    let staticAnalysisReportWithDuplicates = [
      new Repository('https://www.github.com/user/project/blob/master/', [
        new Directory(
          'https://www.github.com/user/project/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/project/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/project/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/project/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ]),
      new Repository('https://www.github.com/user/projectClone/blob/master/', [
        new Directory(
          'https://www.github.com/user/projectClone/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/projectClone/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/projectClone/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/projectClone/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ])
    ]

    // When
    let filteredStaticAnalysisReport = dataMapper.deduplicate(staticAnalysisReportWithDuplicates)

    // Then
    expect(JSON.stringify(filteredStaticAnalysisReport)).toEqual(
      JSON.stringify(staticAnalysisReportModel)
    )
  })

  it('deduplicate the static analysis report while removing 2 low-scored duplicate per code fragment when the higher is after', function () {
    // Given
    let dataMapper = new DataMapper()
    let staticAnalysisReportWithDuplicates = [
      new Repository('https://www.github.com/user/project/blob/master/', [
        new Directory(
          'https://www.github.com/user/project/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/project/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/project/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/project/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ]),
      new Repository('https://www.github.com/user/projectClone/blob/master/', [
        new Directory(
          'https://www.github.com/user/projectClone/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/projectClone/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/projectClone/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-any-any-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-other-other-call'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'O1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/projectClone/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ])
    ]

    // When
    let filteredStaticAnalysisReport = dataMapper.deduplicate(staticAnalysisReportWithDuplicates)

    // Then
    expect(JSON.stringify(filteredStaticAnalysisReport)).toEqual(
      JSON.stringify(staticAnalysisReportModel)
    )
  })

  it('tries to deduplicate an undefined static analysis report', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.deduplicate(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('tries to deduplicate a null static analysis report', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.deduplicate(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('tries to deduplicate an incomplete static analysis report', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.deduplicate([new Repository()])
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  // ---------------------------------------------------------------
  // Filter
  // ---------------------------------------------------------------

  it('filters the static analysis report', function () {
    // Given
    let dataMapper = new DataMapper()

    // When
    let filteredStaticAnalysisReport = dataMapper.filter(staticAnalysisReportModel, NO_ANY_FILE_FILTER)

    // Then
    expect(JSON.stringify(filteredStaticAnalysisReport).includes('javascript-any-any-file')).toBe(
      false
    )
  })

  it('filters the static analysis report without condition', function () {
    // Given
    let dataMapper = new DataMapper()

    // When
    let filteredStaticAnalysisReport = dataMapper.filter(staticAnalysisReportModel)

    // Then
    expect(JSON.stringify(filteredStaticAnalysisReport)).toBe(
      JSON.stringify(staticAnalysisReportModel)
    )
  })

  it('filters the static analysis report with an undefined filter', function () {
    // Given
    let dataMapper = new DataMapper()

    // When
    let filteredStaticAnalysisReport = dataMapper.filter(staticAnalysisReportModel, undefined)

    // Then
    expect(JSON.stringify(filteredStaticAnalysisReport)).toBe(
      JSON.stringify(staticAnalysisReportModel)
    )
  })

  it('tries to filter an undefined static analysis report', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.filter(undefined, () => {})
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('tries to filter a null static analysis report', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.filter(null, () => {})
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('tries to filter the static analysis report with a null filter', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.filter(staticAnalysisReportModel, null)
    }).toThrow(new BadFilter(FILTER_UNDEFINED))
  })

  // ---------------------------------------------------------------
  // Find
  // ---------------------------------------------------------------

  it('gets the technology property list in the static analysis report', function () {
    // Given
    let dataMapper = new DataMapper()

    // When
    let propertyList = dataMapper.getPropertyValueList(staticAnalysisReportModel, (item) => {
      return item instanceof CodeFragment ? item.getTechnology().getId() : null
    })

    // Then
    expect(propertyList.includes('javascript-api-express-call')).toBe(true)
    expect(propertyList.filter((i) => i === 'javascript-any-any-file').length).toBe(1)
    expect(propertyList.filter((i) => i === null).length).toBe(0)
  })

  it('gets the operation property list in the static analysis report', function () {
    // Given
    let dataMapper = new DataMapper()

    // When
    let propertyList = dataMapper.getPropertyValueList(staticAnalysisReportModel, (item) => {
      return item instanceof CodeFragment ? item.getOperation().getName() : null
    })

    // Then
    expect(propertyList.includes('READ')).toBe(true)
    expect(propertyList.filter((i) => i === 'READ').length).toBe(1)
    expect(propertyList.filter((i) => i === null).length).toBe(0)
  })

  it('gets the location property list in the static analysis report', function () {
    // Given
    let dataMapper = new DataMapper()

    // When
    let propertyList = dataMapper.getPropertyValueList(staticAnalysisReportModel, (item) => {
      return item.getLocation()
    })

    // Then
    expect(
      propertyList.includes(
        'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2'
      )
    ).toBe(true)
    expect(
      propertyList.filter(
        (i) => i === 'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2'
      ).length
    ).toBe(1)
    expect(propertyList.filter((i) => i === null).length).toBe(0)
  })

  it('gets the concept property list in the static analysis report', function () {
    // Given
    let dataMapper = new DataMapper()

    // When
    let propertyList = dataMapper.getPropertyValueList(staticAnalysisReportModel, (item) => {
      return item instanceof CodeFragment ? item.getConcepts().map((c) => c.getName()) : null
    })

    // Then
    expect(propertyList.includes('user')).toBe(true)
    expect(propertyList.filter((i) => i === 'user').length).toBe(1)
    expect(propertyList.filter((i) => i === null).length).toBe(0)
  })

  it('tries to get property on an undefined static analysis report', function () {
    // Given
    let dataMapper = new DataMapper()
    let undefinedDataModel = undefined

    // When Then
    expect(() => {
      dataMapper.getPropertyValueList(undefinedDataModel, () => {})
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('tries to get property on a null static analysis report', function () {
    // Given
    let dataMapper = new DataMapper()
    let nullDataModel = null

    // When Then
    expect(() => {
      dataMapper.getPropertyValueList(nullDataModel, () => {})
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('tries to get property on a static analysis report with a null selection', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.getPropertyValueList(staticAnalysisReportModel, null)
    }).toThrow(new BadFilter(FILTER_UNDEFINED))
  })

  // ---------------------------------------------------------------
  // Transform
  // ---------------------------------------------------------------

  it('transforms the static analysis report to a treemap', function () {
    // Given
    let dataMapper = new DataMapper()

    // When
    let treemap = dataMapper.toTreemap(staticAnalysisReportModel)

    // Then
    expect(treemap.width !== 0).toBe(true)
    expect(treemap.height !== 0).toBe(true)
    expect(treemap.childrenNumber).toEqual(2)
    expect(treemap.descendantsNumber).toEqual(20)
    expect(treemap.children.length).toEqual(2)

    expect(treemap.children[0].data.location).toEqual(
      'https://www.github.com/user/project/blob/master/'
    )
    expect(treemap.children[0].width !== 0).toBe(true)
    expect(treemap.children[0].height !== 0).toBe(true)
    expect(treemap.children[0].childrenNumber).toEqual(1)
    expect(treemap.children[0].descendantsNumber).toEqual(9)
    expect(treemap.children[0].children.length).toEqual(1)

    expect(treemap.children[0].children[0].width !== 0).toBe(true)
    expect(treemap.children[0].children[0].height !== 0).toBe(true)
    expect(treemap.children[0].children[0].childrenNumber).toEqual(2)
    expect(treemap.children[0].children[0].descendantsNumber).toEqual(8)
    expect(treemap.children[0].children[0].data.location).toEqual(
      'https://www.github.com/user/project/blob/master/js/'
    )
    expect(treemap.children[0].children[0].children.length).toEqual(2)

    expect(treemap.children[0].children[0].children[0].x !== 0).toBe(true)
    expect(treemap.children[0].children[0].children[0].y !== 0).toBe(true)
    expect(treemap.children[0].children[0].children[0].width !== 0).toBe(true)
    expect(treemap.children[0].children[0].children[0].height !== 0).toBe(true)
    expect(treemap.children[0].children[0].children[0].childrenNumber).toEqual(1)
    expect(treemap.children[0].children[0].children[0].descendantsNumber).toEqual(5)
    expect(treemap.children[0].children[0].children[0].data.location).toEqual(
      'https://www.github.com/user/project/blob/master/js/app/'
    )
    expect(treemap.children[0].children[0].children[0].children.length).toEqual(1)

    expect(treemap.children[0].children[0].children[0].children[0].x !== 0).toBe(true)
    expect(treemap.children[0].children[0].children[0].children[0].y !== 0).toBe(true)
    expect(treemap.children[0].children[0].children[0].children[0].width !== 0).toBe(true)
    expect(treemap.children[0].children[0].children[0].children[0].height !== 0).toBe(true)
    expect(treemap.children[0].children[0].children[0].children[0].childrenNumber).toEqual(4)
    expect(treemap.children[0].children[0].children[0].children[0].descendantsNumber).toEqual(4)
    expect(treemap.children[0].children[0].children[0].children[0].data.location).toEqual(
      'https://www.github.com/user/project/blob/master/js/app/app.js'
    )
    expect(treemap.children[0].children[0].children[0].children[0].children.length).toEqual(4)

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

  it('tries to transform an undefined the static analysis report to a treemap', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.toTreemap(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('tries to transform a null the static analysis report to a treemap', function () {
    // Given
    let dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.toTreemap(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('maps the frames from the dynamic analysis report containing calls', () => {
    // Given
    const dataMapper = new DataMapper()
    const dynamicAnalysisReportModel = [
      new Repository('https://www.github.com/user/project/blob/master/', [
        new Directory(
          'https://www.github.com/user/project/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/project/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/project/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/project/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ]),
      new Repository('https://www.github.com/user/projectClone/blob/master/', [
        new Directory(
          'https://www.github.com/user/projectClone/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/projectClone/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/projectClone/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6',
                    [new Call(1750336164614, ['']), new Call(1750336164615, ['a', 'b'])]
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6',
                    [new Call(1746933144652, ['x', 'y'])]
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/projectClone/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ])
    ]

    // When
    const frames = dataMapper.toFrames(dynamicAnalysisReportModel)

    // Then
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

  it('maps the frames from the dynamic analysis report containing no calls', () => {
    // Given
    const dataMapper = new DataMapper()

    // When
    const frames = dataMapper.toFrames(staticAnalysisReportModel)

    // Then
    expect(frames).toStrictEqual([])
  })

  it('computes the min and max calls count from a dynamic analysis report containing calls', () => {
    // Given
    const dataMapper = new DataMapper()
    const dynamicAnalysisReportModel = [
      new Repository('https://www.github.com/user/project/blob/master/', [
        new Directory(
          'https://www.github.com/user/project/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/project/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/project/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/project/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ]),
      new Repository('https://www.github.com/user/projectClone/blob/master/', [
        new Directory(
          'https://www.github.com/user/projectClone/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/projectClone/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/projectClone/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6',
                    [new Call(1750336164614, ['']), new Call(1750336164615, ['a', 'b'])]
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6',
                    [new Call(1746933144652, ['x', 'y'])]
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/projectClone/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1',
                [
                  new Call(1746933144655, ['a', 'b']),
                  new Call(1746933144657, ['c', 'd']),
                  new Call(1746933144658, ['e', 'f']),
                  new Call(1746933144659, ['g', 'h']),
                  new Call(1746933144660, ['i', 'j'])
                ]
              )
            ])
          ]
        )
      ])
    ]

    // When
    const minMaxCallsCount = dataMapper.toMinMaxCallsCount(dynamicAnalysisReportModel)

    // Then
    expect(minMaxCallsCount).toStrictEqual({ min: 0, max: 5 })
  })

  it('computes the min and max calls count from a dynamic analysis report containing no calls', () => {
    // Given
    const dataMapper = new DataMapper()
    const dynamicAnalysisReportModel = [
      new Repository('https://www.github.com/user/project/blob/master/', [
        new Directory(
          'https://www.github.com/user/project/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/project/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/project/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/project/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ]),
      new Repository('https://www.github.com/user/projectClone/blob/master/', [
        new Directory(
          'https://www.github.com/user/projectClone/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/projectClone/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/projectClone/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L0C0L0C0',
                    new Technology('javascript-any-any-file'),
                    new Operation('OTHER'),
                    new Method(' '),
                    new Sample(' '),
                    [],
                    'A1',
                    '1'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6'
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6'
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/projectClone/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1'
              )
            ])
          ]
        )
      ])
    ]

    // When
    const minMaxCallsCount = dataMapper.toMinMaxCallsCount(dynamicAnalysisReportModel)

    // Then
    expect(minMaxCallsCount).toStrictEqual({ min: 0, max: 0 })
  })

  it('computes the min and max calls count from a dynamic analysis report containing at least one call per fragment', () => {
    // Given
    const dataMapper = new DataMapper()
    const dynamicAnalysisReportModel = [
      new Repository('https://www.github.com/user/project/blob/master/', [
        new Directory(
          'https://www.github.com/user/project/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/project/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/project/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8',
                    [new Call(1750336164614, ['a', 'b'])]
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                    new Technology('javascript-db-redis-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample('USER_ID:userId'),
                    [new Concept('user')],
                    'R1R2R3R4R5R6',
                    '6',
                    [new Call(1750336164615, ['c', 'd'])]
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/project/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/project/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1',
                [new Call(1750336164616, ['e', 'f'])]
              )
            ])
          ]
        )
      ]),
      new Repository('https://www.github.com/user/projectClone/blob/master/', [
        new Directory(
          'https://www.github.com/user/projectClone/blob/master/js/',
          [
            new Directory(
              'https://www.github.com/user/projectClone/blob/master/js/app/',
              [],
              [
                new File('https://www.github.com/user/projectClone/blob/master/js/app/app.js', 1, [
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                    new Technology('javascript-api-express-call'),
                    new Operation('READ'),
                    new Method('get'),
                    new Sample("'/user/:userId'"),
                    [new Concept('user')],
                    'E1E2E3E4E5E6E7E8',
                    '8',
                    [new Call(1750336164620, ['g', 'h'])]
                  ),
                  new CodeFragment(
                    'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                    new Technology('javascript-db-mongo-call'),
                    new Operation('READ'),
                    new Method('find'),
                    new Sample('user {"user_id":userId}'),
                    [new Concept('user')],
                    'M1M2M3M4M5M6',
                    '6',
                    [new Call(1750336164620, ['i', 'j'])]
                  )
                ])
              ]
            )
          ],
          [
            new File('https://www.github.com/user/projectClone/blob/master/js/app.js', 1, [
              new CodeFragment(
                'https://www.github.com/user/projectClone/blob/master/js/app.js#L0C0L0C0',
                new Technology('javascript-any-any-file'),
                new Operation('OTHER'),
                new Method(' '),
                new Sample(' '),
                [],
                'A1',
                '1',
                [new Call(1750336164620, ['k', 'l']), new Call(1750336164621, ['m', 'n'])]
              )
            ])
          ]
        )
      ])
    ]

    // When
    const minMaxCallsCount = dataMapper.toMinMaxCallsCount(dynamicAnalysisReportModel)

    // Then
    expect(minMaxCallsCount).toStrictEqual({ min: 1, max: 2 })
  })

  it('tries to compute min and max calls count with a null repositories', () => {
    // Given
    const dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.toMinMaxCallsCount(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('tries to compute min and max calls count with undefined repositories', () => {
    // Given
    const dataMapper = new DataMapper()

    // When Then
    expect(() => {
      dataMapper.toMinMaxCallsCount(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  it('tries to compute min and max calls count with empty repositories', () => {
    // Given
    const dataMapper = new DataMapper()

    // When
    const minMaxCallsCount = dataMapper.toMinMaxCallsCount([])

    // Then
    expect(minMaxCallsCount).toStrictEqual({ min: 0, max: 0 })
  })
})
