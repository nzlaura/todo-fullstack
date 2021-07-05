import { createTodo } from '../apis'

export function saveTodo (task) {
  return (dispatch) => {
    return createTodo(task)
      .then((id) => {
        dispatch(addTodo(task, id))
        return null
      })
      .catch(() => {
        console.log('error in creating todo')
      })
  }
}

export fou