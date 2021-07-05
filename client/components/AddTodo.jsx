import React, { useState } from 'react'
import { connect } from 'react-redux'
// import the action
import { saveTodo } from '../actions'

function AddTodo (props) {
  const [todo, setTodo] = useState('')

  // handleChange
  function handleChange (evt) {
    setTodo(evt.target.value)
  }

  // handleSubmit
  function handleSubmit (evt) {
    evt.preventDefault()
    props.dispatch(saveTodo(todo))
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} value={todo} onChange={handleChange}/>
      </form>
    </>
  )
}

export default connect()(AddTodo)
