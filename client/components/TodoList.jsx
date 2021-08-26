import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'

import { fetchTodos } from '../apis/index'

function TodoList (props) {
  const [todo, setTodo] = useState([{ id: '', task: '' }])

  useEffect(() => {
    return fetchTodos()
      .then(todos => {
        console.log(todos)
        setTodo(todos)
        return null
      })
  }, [])

  return (
    <>
      <div>

        {todo.map(todo => {
          return (

            <TodoItem key={todo.id} todo={todo.task} />

          )
        })}

      </div>
    </>
  )
}

function mapStateToProps (state) {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList)
