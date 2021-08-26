import React from 'react'
import connect from 'react-redux'

import { delTodo } from '../actions'

function TodoItem (props) {
  const { todo } = props

  function handleDelete () {
    props.dispatch(delTodo(id))
  }

  return (
    <div>
      <ul>
        <p className='todo-list li'><li>{todo}</li></p>
      </ul>
      <ul><button onClick={handleDelete}>Delete Task</button></ul>
    </div>
  )
}

export default TodoItem
