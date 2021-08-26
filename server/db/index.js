const connection = require('./connection')

function getTodos (db = connection) {
  return db('todos')
    .select()
}

function saveTodo (task, db = connection) {
  return db('todos')
    .insert({ task })
}

function deleteTodo (id, db = connection) {
  return db('todos')
    .where('id', id)
    .first()
    .then(() => {
      return db('todos')
        .where('id', id)
        .delete()
    })
    .then(() => db)
    .then(getTodos)
}

function updateTodo (newTask, db = connection) {
  return db('todos')
    .where('id', newTask.id)
    .first()
    .then(() => {
      return db('todos')
        .where('id', newTask.id)
        .update(newTask)
    })
    .then(() => db)
    .then(getTodos)
}

module.exports = {
  saveTodo,
  getTodos,
  deleteTodo,
  updateTodo
}
