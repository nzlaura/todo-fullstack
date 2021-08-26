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
  return db('tasks')
    .where('id', id)
    .first()
    .then(() => {
      return db('tasks')
        .where('id', id)
        .delete()
    })
    .then(() => db)
    .then(getTasks)
}

function updateTodo (newTaskDetail, db = connection) {
  return db('tasks')
    .where('id', newTaskDetail.id)
    .first()
    .then(() => {
      return db('tasks')
        .where('id', newTaskDetail.id)
        .update(newTaskDetail)
    })
    .then(() => db)
    .then(getTasks)
}

module.exports = {
  saveTodo,
  getTodos,
  deleteTodo,
  updateTodo
}
