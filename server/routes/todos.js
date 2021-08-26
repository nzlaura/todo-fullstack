const express = require('express')
const router = express.Router()

const { saveTodo } = require('../db')
const { getTodos, deleteTodo, updateTodo } = require('../db/index')

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
  console.log(req.body.todo)
  saveTodo(req.body.todo)
    .then(ids => {
      console.log('db insert completed')
      res.status(201).json(ids[0])
      return null
    })
    .catch(err => {
      res.status(500).send('database error: ', err.m)
    })
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const tasks = await deleteTodo(id)
    res.json({ tasks })
  } catch (err) {
    if (err.message === 'Unauthorized') {
      return res.status(403).send(
        'You may not delete this task.'
      )
    }
    res.status(500).send(err.message)
  }
})

router.put('/', async (req, res) => {
  const newTaskDetail = req.body

  try {
    const taskDetails = await updateTodo(newTaskDetail)
    res.json({ taskDetails })
  } catch (err) {
    if (err.message === 'Unauthorized') {
      return res.status(403).send(
        'You may not update this task'
      )
    }
    res.status(500).send(err.message)
  }
})

module.exports = router
