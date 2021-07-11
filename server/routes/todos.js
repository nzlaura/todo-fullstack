const express = require('express')
const router = express.Router()

const { saveTodo } = require('../db')
const { getTodos } = require('../db/index')

router.get('/', (req, res) => {
  getTodos()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('error: ', err.message)
    })
})

router.post('/', (req, res) => {
  saveTodo(req.body.task)
    .then(ids => {
      res.status(201).json(ids[0])
      return null
    })
    .catch(err => {
      res.status(500).send('database error: ', err.m)
    })
})

module.exports = router
