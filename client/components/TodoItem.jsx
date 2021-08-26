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
      <ul>
        <li>
          <p className='todo-list li'>{todo}</p>
          <button className='button' onClick={handleDelete}>Delete Task</button>
        </li>
      </ul>

    </>
  )
}

function mapStateToProps (state) {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoItem)
