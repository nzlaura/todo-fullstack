import React from 'react'
import connect from 'react-redux'

function TodoItem (props) {
  const { id, taskDetail } = props.task

  return (
    <div>
      <ul>
        <p className='todo-list li'><li>{taskDetail}</li></p>
      </ul>
    </div>
  )
}

export default TodoItem
