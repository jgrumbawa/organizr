import { useEffect, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import Button from './components/Button'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [todo, setTodo] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo() {
    setTodos((prevTodos) => [...prevTodos, todo])
    setTodo('')
  }

  function handleTodo(event) {
    setTodo(event.target.value)
  }

  return (
    <>
      <TodoInput todo={todo} handleTodo={handleTodo} />
      <Button text="Submit" handleClick={addTodo} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
