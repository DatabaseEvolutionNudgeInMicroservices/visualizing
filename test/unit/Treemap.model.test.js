// Model

const Treemap = require('../../model/Treemap.model.js')

// Error

const BadFormat = require('../../error/BadFormat.error.js')
const { INPUT_INCORRECTLY_FORMATTED } = require('../../error/Constant.error.js')

// Happy path test suite

describe('Treemap', () => {
  test('does to string', () => {
    // Given

    let treemapAsObjectGiven = new Treemap(
      'treemap',
      {},
      2,
      2,
      292.5,
      122.5,
      0,
      0,
      [
        new Treemap(
          'repository',
          {
            location: 'https://www.github.com/user/project/blob/master/'
          },
          1,
          1,
          135,
          107.5,
          7.5,
          7.5,
          [
            new Treemap(
              'directory',
              {
                location: 'https://www.github.com/user/project/blob/master/js/'
              },
              2,
              1,
              120,
              92.5,
              7.5,
              7.5,
              [
                new Treemap(
                  'directory',
                  {
                    location: 'https://www.github.com/user/project/blob/master/js/app/'
                  },
                  1,
                  4,
                  77.5,
                  77.5,
                  7.5,
                  7.5,
                  [
                    new Treemap(
                      'file',
                      {
                        location: 'https://www.github.com/user/project/blob/master/js/app/app.js'
                      },
                      3,
                      3,
                      62.5,
                      62.5,
                      7.5,
                      7.5,
                      [
                        new Treemap(
                          'codeFragment',
                          {
                            location:
                              'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                            technology: {
                              id: 'javascript-api-express-call'
                            },
                            operation: {
                              name: 'READ'
                            },
                            method: {
                              name: 'get'
                            },
                            sample: {
                              content: "'/user/:userId'"
                            },
                            concepts: [
                              {
                                name: 'user'
                              }
                            ],
                            heuristics: 'E1E2E3E4E5E6E7E8',
                            score: '8'
                          },
                          0,
                          0,
                          20,
                          20,
                          7.5,
                          7.5,
                          [],
                          '#FFFFFF',
                          '1'
                        ),
                        new Treemap(
                          'codeFragment',
                          {
                            location:
                              'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                            technology: {
                              id: 'javascript-db-mongo-call'
                            },
                            operation: {
                              name: 'READ'
                            },
                            method: {
                              name: 'find'
                            },
                            sample: {
                              content: 'user {"user_id":userId}'
                            },
                            concepts: [
                              {
                                name: 'user'
                              }
                            ],
                            heuristics: 'M1M2M3M4M5M6',
                            score: '6'
                          },
                          0,
                          0,
                          20,
                          20,
                          35,
                          7.5,
                          [],
                          '#FFFFFF',
                          '1'
                        ),
                        new Treemap(
                          'codeFragment',
                          {
                            location:
                              'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                            technology: {
                              id: 'javascript-db-redis-call'
                            },
                            operation: {
                              name: 'READ'
                            },
                            method: {
                              name: 'get'
                            },
                            sample: {
                              content: 'USER_ID:userId'
                            },
                            concepts: [
                              {
                                name: 'user'
                              }
                            ],
                            heuristics: 'R1R2R3R4R5R6',
                            score: '6'
                          },
                          0,
                          0,
                          20,
                          20,
                          7.5,
                          35,
                          [],
                          '#FFFFFF',
                          '1'
                        )
                      ],
                      '#FFFFFF',
                      '0.25'
                    )
                  ],
                  '#000000',
                  '0.05'
                ),
                new Treemap(
                  'file',
                  {
                    location: 'https://www.github.com/user/project/blob/master/js/app.js'
                  },
                  0,
                  0,
                  20,
                  20,
                  92.5,
                  7.5,
                  [],
                  '#FFFFFF',
                  '0.25'
                )
              ],
              '#000000',
              '0.05'
            )
          ],
          '#000000',
          '0.05'
        ),
        new Treemap(
          'repository',
          {
            location: 'https://www.github.com/user/projectClone/blob/master/'
          },
          1,
          1,
          135,
          107.5,
          150,
          7.5,
          [
            new Treemap(
              'directory',
              {
                location: 'https://www.github.com/user/projectClone/blob/master/js/'
              },
              2,
              1,
              120,
              92.5,
              7.5,
              7.5,
              [
                new Treemap(
                  'directory',
                  {
                    location: 'https://www.github.com/user/projectClone/blob/master/js/app/'
                  },
                  1,
                  4,
                  77.5,
                  77.5,
                  7.5,
                  7.5,
                  [
                    new Treemap(
                      'file',
                      {
                        location:
                          'https://www.github.com/user/projectClone/blob/master/js/app/app.js'
                      },
                      3,
                      3,
                      62.5,
                      62.5,
                      7.5,
                      7.5,
                      [
                        new Treemap(
                          'codeFragment',
                          {
                            location:
                              'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                            technology: {
                              id: 'javascript-api-express-call'
                            },
                            operation: {
                              name: 'READ'
                            },
                            method: {
                              name: 'get'
                            },
                            sample: {
                              content: "'/user/:userId'"
                            },
                            concepts: [
                              {
                                name: 'user'
                              }
                            ],
                            heuristics: 'E1E2E3E4E5E6E7E8',
                            score: '8'
                          },
                          0,
                          0,
                          20,
                          20,
                          7.5,
                          7.5,
                          [],
                          '#FFFFFF',
                          '1'
                        ),
                        new Treemap(
                          'codeFragment',
                          {
                            location:
                              'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                            technology: {
                              id: 'javascript-db-mongo-call'
                            },
                            operation: {
                              name: 'READ'
                            },
                            method: {
                              name: 'find'
                            },
                            sample: {
                              content: 'user {"user_id":userId}'
                            },
                            concepts: [
                              {
                                name: 'user'
                              }
                            ],
                            heuristics: 'M1M2M3M4M5M6',
                            score: '6'
                          },
                          0,
                          0,
                          20,
                          20,
                          35,
                          7.5,
                          [],
                          '#FFFFFF',
                          '1'
                        ),
                        new Treemap(
                          'codeFragment',
                          {
                            location:
                              'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                            technology: {
                              id: 'javascript-db-redis-call'
                            },
                            operation: {
                              name: 'READ'
                            },
                            method: {
                              name: 'get'
                            },
                            sample: {
                              content: 'USER_ID:userId'
                            },
                            concepts: [
                              {
                                name: 'user'
                              }
                            ],
                            heuristics: 'R1R2R3R4R5R6',
                            score: '6'
                          },
                          0,
                          0,
                          20,
                          20,
                          7.5,
                          35,
                          [],
                          '#FFFFFF',
                          '1'
                        )
                      ],
                      '#FFFFFF',
                      '0.25'
                    )
                  ],
                  '#000000',
                  '0.05'
                ),
                new Treemap(
                  'file',
                  {
                    location: 'https://www.github.com/user/projectClone/blob/master/js/app.js'
                  },
                  0,
                  0,
                  20,
                  20,
                  92.5,
                  7.5,
                  [],
                  '#FFFFFF',
                  '0.25'
                )
              ],
              '#000000',
              '0.05'
            )
          ],
          '#000000',
          '0.05'
        )
      ],
      '#000000',
      '0.05'
    )

    // When

    let treemapAsStringGiven = treemapAsObjectGiven.toString()

    // Then

    expect(treemapAsStringGiven).toStrictEqual(
      '{"type":"treemap","data":{},"childrenNumber":2,"descendantsNumber":2,"width":292.5,"height":122.5,"x":0,"y":0,"children":[{"type":"repository","data":{"location":"https://www.github.com/user/project/blob/master/"},"childrenNumber":1,"descendantsNumber":1,"width":135,"height":107.5,"x":7.5,"y":7.5,"children":[{"type":"directory","data":{"location":"https://www.github.com/user/project/blob/master/js/"},"childrenNumber":2,"descendantsNumber":1,"width":120,"height":92.5,"x":7.5,"y":7.5,"children":[{"type":"directory","data":{"location":"https://www.github.com/user/project/blob/master/js/app/"},"childrenNumber":1,"descendantsNumber":4,"width":77.5,"height":77.5,"x":7.5,"y":7.5,"children":[{"type":"file","data":{"location":"https://www.github.com/user/project/blob/master/js/app/app.js"},"childrenNumber":3,"descendantsNumber":3,"width":62.5,"height":62.5,"x":7.5,"y":7.5,"children":[{"type":"codeFragment","data":{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2","technology":{"id":"javascript-api-express-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"\'/user/:userId\'"},"concepts":[{"name":"user"}],"heuristics":"E1E2E3E4E5E6E7E8","score":"8"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":7.5,"y":7.5,"children":[],"color":"#FFFFFF","opacity":"1"},{"type":"codeFragment","data":{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4","technology":{"id":"javascript-db-mongo-call"},"operation":{"name":"READ"},"method":{"name":"find"},"sample":{"content":"user {\\"user_id\\":userId}"},"concepts":[{"name":"user"}],"heuristics":"M1M2M3M4M5M6","score":"6"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":35,"y":7.5,"children":[],"color":"#FFFFFF","opacity":"1"},{"type":"codeFragment","data":{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6","technology":{"id":"javascript-db-redis-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"USER_ID:userId"},"concepts":[{"name":"user"}],"heuristics":"R1R2R3R4R5R6","score":"6"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":7.5,"y":35,"children":[],"color":"#FFFFFF","opacity":"1"}],"color":"#FFFFFF","opacity":"0.25"}],"color":"#000000","opacity":"0.05"},{"type":"file","data":{"location":"https://www.github.com/user/project/blob/master/js/app.js"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":92.5,"y":7.5,"children":[],"color":"#FFFFFF","opacity":"0.25"}],"color":"#000000","opacity":"0.05"}],"color":"#000000","opacity":"0.05"},{"type":"repository","data":{"location":"https://www.github.com/user/projectClone/blob/master/"},"childrenNumber":1,"descendantsNumber":1,"width":135,"height":107.5,"x":150,"y":7.5,"children":[{"type":"directory","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/"},"childrenNumber":2,"descendantsNumber":1,"width":120,"height":92.5,"x":7.5,"y":7.5,"children":[{"type":"directory","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/app/"},"childrenNumber":1,"descendantsNumber":4,"width":77.5,"height":77.5,"x":7.5,"y":7.5,"children":[{"type":"file","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js"},"childrenNumber":3,"descendantsNumber":3,"width":62.5,"height":62.5,"x":7.5,"y":7.5,"children":[{"type":"codeFragment","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2","technology":{"id":"javascript-api-express-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"\'/user/:userId\'"},"concepts":[{"name":"user"}],"heuristics":"E1E2E3E4E5E6E7E8","score":"8"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":7.5,"y":7.5,"children":[],"color":"#FFFFFF","opacity":"1"},{"type":"codeFragment","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4","technology":{"id":"javascript-db-mongo-call"},"operation":{"name":"READ"},"method":{"name":"find"},"sample":{"content":"user {\\"user_id\\":userId}"},"concepts":[{"name":"user"}],"heuristics":"M1M2M3M4M5M6","score":"6"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":35,"y":7.5,"children":[],"color":"#FFFFFF","opacity":"1"},{"type":"codeFragment","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6","technology":{"id":"javascript-db-redis-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"USER_ID:userId"},"concepts":[{"name":"user"}],"heuristics":"R1R2R3R4R5R6","score":"6"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":7.5,"y":35,"children":[],"color":"#FFFFFF","opacity":"1"}],"color":"#FFFFFF","opacity":"0.25"}],"color":"#000000","opacity":"0.05"},{"type":"file","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/app.js"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":92.5,"y":7.5,"children":[],"color":"#FFFFFF","opacity":"0.25"}],"color":"#000000","opacity":"0.05"}],"color":"#000000","opacity":"0.05"}],"color":"#000000","opacity":"0.05"}'
    )
  })

  test('revives as object', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":2,"descendantsNumber":2,"width":292.5,"height":122.5,"x":0,"y":0,"children":[{"type":"repository","data":{"location":"https://www.github.com/user/project/blob/master/"},"childrenNumber":1,"descendantsNumber":1,"width":135,"height":107.5,"x":7.5,"y":7.5,"children":[{"type":"directory","data":{"location":"https://www.github.com/user/project/blob/master/js/"},"childrenNumber":2,"descendantsNumber":1,"width":120,"height":92.5,"x":7.5,"y":7.5,"children":[{"type":"directory","data":{"location":"https://www.github.com/user/project/blob/master/js/app/"},"childrenNumber":1,"descendantsNumber":4,"width":77.5,"height":77.5,"x":7.5,"y":7.5,"children":[{"type":"file","data":{"location":"https://www.github.com/user/project/blob/master/js/app/app.js"},"childrenNumber":3,"descendantsNumber":3,"width":62.5,"height":62.5,"x":7.5,"y":7.5,"children":[{"type":"codeFragment","data":{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2","technology":{"id":"javascript-api-express-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"\'/user/:userId\'"},"concepts":[{"name":"user"}],"heuristics":"E1E2E3E4E5E6E7E8","score":"8"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":7.5,"y":7.5,"children":[],"color":"#FFFFFF","opacity":"1"},{"type":"codeFragment","data":{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4","technology":{"id":"javascript-db-mongo-call"},"operation":{"name":"READ"},"method":{"name":"find"},"sample":{"content":"user {\\"user_id\\":userId}"},"concepts":[{"name":"user"}],"heuristics":"M1M2M3M4M5M6","score":"6"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":35,"y":7.5,"children":[],"color":"#FFFFFF","opacity":"1"},{"type":"codeFragment","data":{"location":"https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6","technology":{"id":"javascript-db-redis-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"USER_ID:userId"},"concepts":[{"name":"user"}],"heuristics":"R1R2R3R4R5R6","score":"6"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":7.5,"y":35,"children":[],"color":"#FFFFFF","opacity":"1"}],"color":"#FFFFFF","opacity":"0.25"}],"color":"#000000","opacity":"0.05"},{"type":"file","data":{"location":"https://www.github.com/user/project/blob/master/js/app.js"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":92.5,"y":7.5,"children":[],"color":"#FFFFFF","opacity":"0.25"}],"color":"#000000","opacity":"0.05"}],"color":"#000000","opacity":"0.05"},{"type":"repository","data":{"location":"https://www.github.com/user/projectClone/blob/master/"},"childrenNumber":1,"descendantsNumber":1,"width":135,"height":107.5,"x":150,"y":7.5,"children":[{"type":"directory","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/"},"childrenNumber":2,"descendantsNumber":1,"width":120,"height":92.5,"x":7.5,"y":7.5,"children":[{"type":"directory","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/app/"},"childrenNumber":1,"descendantsNumber":4,"width":77.5,"height":77.5,"x":7.5,"y":7.5,"children":[{"type":"file","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js"},"childrenNumber":3,"descendantsNumber":3,"width":62.5,"height":62.5,"x":7.5,"y":7.5,"children":[{"type":"codeFragment","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2","technology":{"id":"javascript-api-express-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"\'/user/:userId\'"},"concepts":[{"name":"user"}],"heuristics":"E1E2E3E4E5E6E7E8","score":"8"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":7.5,"y":7.5,"children":[],"color":"#FFFFFF","opacity":"1"},{"type":"codeFragment","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4","technology":{"id":"javascript-db-mongo-call"},"operation":{"name":"READ"},"method":{"name":"find"},"sample":{"content":"user {\\"user_id\\":userId}"},"concepts":[{"name":"user"}],"heuristics":"M1M2M3M4M5M6","score":"6"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":35,"y":7.5,"children":[],"color":"#FFFFFF","opacity":"1"},{"type":"codeFragment","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6","technology":{"id":"javascript-db-redis-call"},"operation":{"name":"READ"},"method":{"name":"get"},"sample":{"content":"USER_ID:userId"},"concepts":[{"name":"user"}],"heuristics":"R1R2R3R4R5R6","score":"6"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":7.5,"y":35,"children":[],"color":"#FFFFFF","opacity":"1"}],"color":"#FFFFFF","opacity":"0.25"}],"color":"#000000","opacity":"0.05"},{"type":"file","data":{"location":"https://www.github.com/user/projectClone/blob/master/js/app.js"},"childrenNumber":0,"descendantsNumber":0,"width":20,"height":20,"x":92.5,"y":7.5,"children":[],"color":"#FFFFFF","opacity":"0.25"}],"color":"#000000","opacity":"0.05"}],"color":"#000000","opacity":"0.05"}],"color":"#000000","opacity":"0.05"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When

    let treemapAsModelGiven = Treemap.revive(treemapAsObjectGiven)

    // Then

    let staticAnalysisCodeQLRequestAsModelExpected = new Treemap(
      'treemap',
      {},
      2,
      2,
      292.5,
      122.5,
      0,
      0,
      [
        new Treemap(
          'repository',
          {
            location: 'https://www.github.com/user/project/blob/master/'
          },
          1,
          1,
          135,
          107.5,
          7.5,
          7.5,
          [
            new Treemap(
              'directory',
              {
                location: 'https://www.github.com/user/project/blob/master/js/'
              },
              2,
              1,
              120,
              92.5,
              7.5,
              7.5,
              [
                new Treemap(
                  'directory',
                  {
                    location: 'https://www.github.com/user/project/blob/master/js/app/'
                  },
                  1,
                  4,
                  77.5,
                  77.5,
                  7.5,
                  7.5,
                  [
                    new Treemap(
                      'file',
                      {
                        location: 'https://www.github.com/user/project/blob/master/js/app/app.js'
                      },
                      3,
                      3,
                      62.5,
                      62.5,
                      7.5,
                      7.5,
                      [
                        new Treemap(
                          'codeFragment',
                          {
                            location:
                              'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
                            technology: {
                              id: 'javascript-api-express-call'
                            },
                            operation: {
                              name: 'READ'
                            },
                            method: {
                              name: 'get'
                            },
                            sample: {
                              content: "'/user/:userId'"
                            },
                            concepts: [
                              {
                                name: 'user'
                              }
                            ],
                            heuristics: 'E1E2E3E4E5E6E7E8',
                            score: '8'
                          },
                          0,
                          0,
                          20,
                          20,
                          7.5,
                          7.5,
                          [],
                          '#FFFFFF',
                          '1'
                        ),
                        new Treemap(
                          'codeFragment',
                          {
                            location:
                              'https://www.github.com/user/project/blob/master/js/app/app.js#L3C3L4C4',
                            technology: {
                              id: 'javascript-db-mongo-call'
                            },
                            operation: {
                              name: 'READ'
                            },
                            method: {
                              name: 'find'
                            },
                            sample: {
                              content: 'user {"user_id":userId}'
                            },
                            concepts: [
                              {
                                name: 'user'
                              }
                            ],
                            heuristics: 'M1M2M3M4M5M6',
                            score: '6'
                          },
                          0,
                          0,
                          20,
                          20,
                          35,
                          7.5,
                          [],
                          '#FFFFFF',
                          '1'
                        ),
                        new Treemap(
                          'codeFragment',
                          {
                            location:
                              'https://www.github.com/user/project/blob/master/js/app/app.js#L5C5L6C6',
                            technology: {
                              id: 'javascript-db-redis-call'
                            },
                            operation: {
                              name: 'READ'
                            },
                            method: {
                              name: 'get'
                            },
                            sample: {
                              content: 'USER_ID:userId'
                            },
                            concepts: [
                              {
                                name: 'user'
                              }
                            ],
                            heuristics: 'R1R2R3R4R5R6',
                            score: '6'
                          },
                          0,
                          0,
                          20,
                          20,
                          7.5,
                          35,
                          [],
                          '#FFFFFF',
                          '1'
                        )
                      ],
                      '#FFFFFF',
                      '0.25'
                    )
                  ],
                  '#000000',
                  '0.05'
                ),
                new Treemap(
                  'file',
                  {
                    location: 'https://www.github.com/user/project/blob/master/js/app.js'
                  },
                  0,
                  0,
                  20,
                  20,
                  92.5,
                  7.5,
                  [],
                  '#FFFFFF',
                  '0.25'
                )
              ],
              '#000000',
              '0.05'
            )
          ],
          '#000000',
          '0.05'
        ),
        new Treemap(
          'repository',
          {
            location: 'https://www.github.com/user/projectClone/blob/master/'
          },
          1,
          1,
          135,
          107.5,
          150,
          7.5,
          [
            new Treemap(
              'directory',
              {
                location: 'https://www.github.com/user/projectClone/blob/master/js/'
              },
              2,
              1,
              120,
              92.5,
              7.5,
              7.5,
              [
                new Treemap(
                  'directory',
                  {
                    location: 'https://www.github.com/user/projectClone/blob/master/js/app/'
                  },
                  1,
                  4,
                  77.5,
                  77.5,
                  7.5,
                  7.5,
                  [
                    new Treemap(
                      'file',
                      {
                        location:
                          'https://www.github.com/user/projectClone/blob/master/js/app/app.js'
                      },
                      3,
                      3,
                      62.5,
                      62.5,
                      7.5,
                      7.5,
                      [
                        new Treemap(
                          'codeFragment',
                          {
                            location:
                              'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L1C1L2C2',
                            technology: {
                              id: 'javascript-api-express-call'
                            },
                            operation: {
                              name: 'READ'
                            },
                            method: {
                              name: 'get'
                            },
                            sample: {
                              content: "'/user/:userId'"
                            },
                            concepts: [
                              {
                                name: 'user'
                              }
                            ],
                            heuristics: 'E1E2E3E4E5E6E7E8',
                            score: '8'
                          },
                          0,
                          0,
                          20,
                          20,
                          7.5,
                          7.5,
                          [],
                          '#FFFFFF',
                          '1'
                        ),
                        new Treemap(
                          'codeFragment',
                          {
                            location:
                              'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L3C3L4C4',
                            technology: {
                              id: 'javascript-db-mongo-call'
                            },
                            operation: {
                              name: 'READ'
                            },
                            method: {
                              name: 'find'
                            },
                            sample: {
                              content: 'user {"user_id":userId}'
                            },
                            concepts: [
                              {
                                name: 'user'
                              }
                            ],
                            heuristics: 'M1M2M3M4M5M6',
                            score: '6'
                          },
                          0,
                          0,
                          20,
                          20,
                          35,
                          7.5,
                          [],
                          '#FFFFFF',
                          '1'
                        ),
                        new Treemap(
                          'codeFragment',
                          {
                            location:
                              'https://www.github.com/user/projectClone/blob/master/js/app/app.js#L5C5L6C6',
                            technology: {
                              id: 'javascript-db-redis-call'
                            },
                            operation: {
                              name: 'READ'
                            },
                            method: {
                              name: 'get'
                            },
                            sample: {
                              content: 'USER_ID:userId'
                            },
                            concepts: [
                              {
                                name: 'user'
                              }
                            ],
                            heuristics: 'R1R2R3R4R5R6',
                            score: '6'
                          },
                          0,
                          0,
                          20,
                          20,
                          7.5,
                          35,
                          [],
                          '#FFFFFF',
                          '1'
                        )
                      ],
                      '#FFFFFF',
                      '0.25'
                    )
                  ],
                  '#000000',
                  '0.05'
                ),
                new Treemap(
                  'file',
                  {
                    location: 'https://www.github.com/user/projectClone/blob/master/js/app.js'
                  },
                  0,
                  0,
                  20,
                  20,
                  92.5,
                  7.5,
                  [],
                  '#FFFFFF',
                  '0.25'
                )
              ],
              '#000000',
              '0.05'
            )
          ],
          '#000000',
          '0.05'
        )
      ],
      '#000000',
      '0.05'
    )
    expect(treemapAsModelGiven).toStrictEqual(staticAnalysisCodeQLRequestAsModelExpected)
  })

  test('sets type', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When

    treemapGiven.setType('repository')

    // Then

    expect(treemapGiven.getType()).toStrictEqual('repository')
  })

  test('sets data', () => {
    // Given
    let treemapGiven = new Treemap('codeFragment', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When

    treemapGiven.setData({
      location: 'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
      technology: {
        id: 'javascript-api-express-call'
      },
      operation: {
        name: 'READ'
      },
      method: {
        name: 'get'
      },
      sample: {
        content: "'/user/:userId'"
      },
      concepts: [
        {
          name: 'user'
        }
      ],
      heuristics: 'E1E2E3E4E5E6E7E8',
      score: '8'
    })

    // Then

    expect(treemapGiven.getData()).toStrictEqual({
      location: 'https://www.github.com/user/project/blob/master/js/app/app.js#L1C1L2C2',
      technology: {
        id: 'javascript-api-express-call'
      },
      operation: {
        name: 'READ'
      },
      method: {
        name: 'get'
      },
      sample: {
        content: "'/user/:userId'"
      },
      concepts: [
        {
          name: 'user'
        }
      ],
      heuristics: 'E1E2E3E4E5E6E7E8',
      score: '8'
    })
  })

  test('sets children number', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When

    treemapGiven.setChildrenNumber(1)

    // Then

    expect(treemapGiven.getChildrenNumber()).toStrictEqual(1)
  })

  test('sets descendants number', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When

    treemapGiven.setDescendantsNumber(1)

    // Then

    expect(treemapGiven.getDescendantsNumber()).toStrictEqual(1)
  })

  test('sets width', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When

    treemapGiven.setWidth(2)

    // Then

    expect(treemapGiven.getWidth()).toStrictEqual(2)
  })

  test('sets height', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When

    treemapGiven.setHeight(2)

    // Then

    expect(treemapGiven.getHeight()).toStrictEqual(2)
  })

  test('sets X', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When

    treemapGiven.setX(2)

    // Then

    expect(treemapGiven.getX()).toStrictEqual(2)
  })

  test('sets Y', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When

    treemapGiven.setY(2)

    // Then

    expect(treemapGiven.getY()).toStrictEqual(2)
  })

  test('sets children', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When

    treemapGiven.setChildren([
      new Treemap(
        'repository',
        {
          location: 'https://www.github.com/user/projectClone/'
        },
        0,
        0,
        1,
        1,
        1,
        1,
        [],
        '#000000',
        '0.05'
      )
    ])
    treemapGiven.setChildrenNumber(1)
    treemapGiven.setDescendantsNumber(1)

    // Then
    expect(treemapGiven.getChildren().length).toStrictEqual(1)
    expect(treemapGiven.getChildrenNumber()).toStrictEqual(1)
    expect(treemapGiven.getDescendantsNumber()).toStrictEqual(1)
  })

  test('sets color', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When

    treemapGiven.setColor('#FFFFFF')

    // Then
    expect(treemapGiven.getColor()).toStrictEqual('#FFFFFF')
  })

  test('sets opacity', () => {
    // Given
    let treemapGiven = new Treemap('file', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When

    treemapGiven.setColor('0.25')

    // Then
    expect(treemapGiven.getColor()).toStrictEqual('0.25')
  })
})

// Failure cases test suite

describe('Treemap tries to', () => {
  test('revive an incorrect formatted object', () => {
    // Given

    let treemapAsStringGiven = '{'

    // When Then

    expect(() => {
      Treemap.revive(treemapAsStringGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive an incomplete object', () => {
    // Given

    let treemapAsStringGiven = '{}'

    // When Then

    expect(() => {
      Treemap.revive(treemapAsStringGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive an undefined object', () => {
    // Given

    let treemapGiven = undefined

    // When Then

    expect(() => {
      Treemap.revive(treemapGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a null object', () => {
    // Given

    let treemapGiven = null

    // When Then

    expect(() => {
      Treemap.revive(treemapGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with null type', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":null,"data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with empty type', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"","data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with null data', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":null,"childrenNumber":1,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with null children number', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":null,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with negative children number', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":-1,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with incorrectly formatted children number', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":"1","descendantsNumber":1,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with a float children number', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1.5,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with null descendants number', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":null,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with negative descendants number', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":-1,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with incorrectly formatted children number', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":"1","width":1,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with a float children number', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1.5,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with null width', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":null,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with incorrectly formatted width', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":"1","height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with null height', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":null,"x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with incorrectly formatted height', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":"1","x":0,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with null X', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":1,"x":null,"y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with incorrectly formatted X', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":1,"x":"0","y":0,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with null Y', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":null,"children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with incorrectly formatted Y', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":"0","children":[],"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with null children', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":0,"children":null,"color":"#000000","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with null color', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":0,"children":[],"color":null,"opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with empty color', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"","opacity":"1"}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with null opacity', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"#000000","opacity":null}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('revive a treemap with empty opacity', () => {
    // Given

    let treemapAsStringGiven =
      '{"type":"treemap","data":{},"childrenNumber":1,"descendantsNumber":1,"width":1,"height":1,"x":0,"y":0,"children":[],"color":"","opacity":""}'
    let treemapAsObjectGiven = JSON.parse(treemapAsStringGiven)

    // When Then

    expect(() => {
      Treemap.revive(treemapAsObjectGiven)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set null type', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setType(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set undefined type', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setType(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set empty type', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setType('')
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set null data', () => {
    // Given
    let treemapGiven = new Treemap('codeFragment', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setData(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set undefined data', () => {
    // Given
    let treemapGiven = new Treemap('codeFragment', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setData(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set null children number', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setChildrenNumber(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set undefined children number', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setChildrenNumber(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set negative children number', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setChildrenNumber(-1)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set incorrectly formatted children number', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setChildrenNumber('1')
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set null descendants number', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setDescendantsNumber(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set undefined descendants number', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setDescendantsNumber(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set negative descendants number', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setDescendantsNumber(-1)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set incorrectly formatted descendants number', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setDescendantsNumber('1')
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set null width', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setWidth(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set undefined width', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setWidth(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set incorrectly formatted width', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setWidth('1')
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set null height', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setHeight(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set undefined height', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setHeight(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set incorrectly formatted height', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setHeight('1')
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set null X', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setX(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set undefined X', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setX(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set incorrectly formatted X', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setX('1')
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set null Y', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setY(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set undefined Y', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setY(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set incorrectly formatted Y', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setY('1')
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set null children', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setChildren(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set undefined children', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setChildren(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set null color', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setColor(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set undefined color', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setColor(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set empty color', () => {
    // Given
    let treemapGiven = new Treemap('treemap', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setColor('')
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set null opacity', () => {
    // Given
    let treemapGiven = new Treemap('file', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setOpacity(null)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set undefined opacity', () => {
    // Given
    let treemapGiven = new Treemap('file', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setOpacity(undefined)
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })

  test('set empty opacity', () => {
    // Given
    let treemapGiven = new Treemap('file', {}, 0, 0, 1, 1, 1, 1, [], '#000000', '0.05')

    // When Then

    expect(() => {
      treemapGiven.setOpacity('')
    }).toThrow(new BadFormat(INPUT_INCORRECTLY_FORMATTED))
  })
})
