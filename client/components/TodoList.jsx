import React, { useState, useEffect } from 'react'

import TodoItem from './TodoItem'

import { fetchTodos } from '../apis/index'

function TodoList () {
  const [taskUseState, setTaskUseState] = useState([])

  useEffect(() => {
    return fetchTodos()
      .then(tasks => {
        setTaskUseState(tasks)
        return null
      })
  }, [])

  return (
    <>
      <div>
        {taskUseState.map(task => {
          return (
            <TodoItem key={task.id} task={task} />
          )
        })}
      </div>
    </>
  )
}

export default TodoList
