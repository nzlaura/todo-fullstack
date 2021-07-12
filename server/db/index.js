const connection = require('./connection')

function getTodos (db = connection) {
  return db('todos')
    .select()
}

function saveTodo (task, db = connection) {
  return db('todos')
    .insert({ task })
}

module.exports = {
  saveTodo,
  getTodos
}
