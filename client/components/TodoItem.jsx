import React from 'react'
// import connect from 'react-redux'

function TodoItem (props) {
  const { todo } = props

  return (
    <div>
      <ul>
        <p className='todo-list li'><li>{todo}</li></p>
      </ul>
    </div>
  )
}

export default TodoItem
