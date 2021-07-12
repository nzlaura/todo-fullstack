import { createTodo } from '../apis'

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
