import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <TodoList />
      </section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
