import React from 'react'
import { connect } from 'react-redux'

import { delTodo } from '../actions'

function TodoItem (props) {
  const { todo, id } = props

  function handleDelete () {
    props.dispatch(delTodo(id))
  }

  return (
    <>
      <li>
        <p className='todo-list li'>{todo}</p>
        <button className='destroy' onClick={handleDelete}>Delete Task</button>
      </li>

    </>
  )
}

function mapStateToProps (state) {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoItem)
