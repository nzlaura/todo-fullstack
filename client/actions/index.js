import { createTodo, deleteTodo } from '../apis'

export function saveTodo (task) {
  console.log('dispatch firing')
  return (dispatch) => {
    return createTodo(task)
      .then((id) => {
        console.log('route finished + ', id)
        dispatch(addTodo(task, id))
        return null
      })
      .catch(() => {
        console.log('error in creating todo')
      })
  }
}

export function addTodo (task, id) {
  return {
    type: 'ADD_TODO',
    id,
    task
  }
}

// action to delete TODO

export function delTodo (id) {
  return (dispatch) => {
    deleteTodo(id)
      .then(() => {
        dispatch(removeTodo(id))
        return null
      })
      .catch(() => {
        console.log('error: task cannot be deleted')
      })
  }
}

export function removeTodo (id) {
  return {
    type: 'DEL_TODO',
    id
  }
}

export function setTodos (task) {
  return {
    type: 'SET_TODOS',
    task
  }
}
