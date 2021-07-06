const connection = require('./connection')

function saveTodo (task, db = connection) {
  return connection('todos')
    .insert({ task })
}

module.exports = {
  saveTodo
}
