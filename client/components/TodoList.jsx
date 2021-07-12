import React, { useState, useEffect } from 'react'

import TodoItem from './TodoItem'

import { fetchTodos } from '../apis/index'

function TodoList () {
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

export default TodoList
