const express = require('express')
const router = express.Router()

const { saveTodo } = require('../db')

router.post('/', (req, res) => {
  saveTodo(req.body.task)
    .then(ids => {
      res.status(201).json(ids[0])
      return null
    })
    .catch(err => {
      res.status(500).send('database error: ', err.message)
    })
})

module.exports = router
