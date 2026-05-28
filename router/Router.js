// Imports

const express = require('express')

// Helpers

const Controller = require('../controller/Controller.controller.js')

// Error

const BadFormat = require('../error/BadFormat.error.js')
const { BAD_FORMAT, INPUT_INCORRECTLY_FORMATTED } = require('../error/Constant.error.js')

// Configuration

const router = express.Router()

const controller = new Controller()

router.post('/treemap', function (request, response) {
  let requestBody = request.body
  if (
    requestBody !== undefined &&
    requestBody !== null &&
    requestBody.length !== 0 &&
    JSON.stringify(requestBody) !== JSON.stringify({}) &&
    JSON.stringify(requestBody) !== JSON.stringify([])
  ) {
    controller
      .transformToTreemap(JSON.stringify(requestBody))
      .then((result) => {
        response.status(200)
        response.json(result)
      })
      .catch((error) => {
        switch (true) {
          case error instanceof BadFormat:
            response.status(406)
            break
          default:
            response.status(500)
            break
        }
        response.json({ name: error.name, message: error.message })
      })
  } else {
    response.status(406)
    response.json({ name: BAD_FORMAT, message: INPUT_INCORRECTLY_FORMATTED })
  }
})

router.post('/frames', function (request, response) {
  let requestBody = request.body
  if (
    requestBody !== undefined &&
    requestBody !== null &&
    requestBody.length !== 0 &&
    JSON.stringify(requestBody) !== JSON.stringify({}) &&
    JSON.stringify(requestBody) !== JSON.stringify([])
  ) {
    controller
      .transformToFrames(JSON.stringify(requestBody))
      .then((result) => {
        response.status(200)
        response.json(result)
      })
      .catch((error) => {
        switch (true) {
          case error instanceof BadFormat:
            response.status(406)
            break
          default:
            response.status(500)
            break
        }
        response.json({ name: error.name, message: error.message })
      })
  } else {
    response.status(406)
    response.json({ name: BAD_FORMAT, message: INPUT_INCORRECTLY_FORMATTED })
  }
})

router.post('/minmax', function (request, response) {
  let requestBody = request.body
  if (
    requestBody !== undefined &&
    requestBody !== null &&
    requestBody.length !== 0 &&
    JSON.stringify(requestBody) !== JSON.stringify({}) &&
    JSON.stringify(requestBody) !== JSON.stringify([])
  ) {
    controller
      .transformToMinMaxCallsCount(JSON.stringify(requestBody))
      .then((result) => {
        response.status(200)
        response.json(result)
      })
      .catch((error) => {
        switch (true) {
          case error instanceof BadFormat:
            response.status(406)
            break
          default:
            response.status(500)
            break
        }
        response.json({ name: error.name, message: error.message })
      })
  } else {
    response.status(406)
    response.json({ name: BAD_FORMAT, message: INPUT_INCORRECTLY_FORMATTED })
  }
})

module.exports = router
