import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [todo, setTodo] = useState('')

  const todosElement = todos.map((todo) => <li>{todo}</li>)

  function addTodo() {
    setTodos((prevTodos) => [...prevTodos, todo])
    localStorage.setItem('todos', JSON.stringify(todos))
    setTodo('')
  }

  function handleTodo(event) {
    setTodo(event.target.value)
  }

  return (
    <>
      <input type="text" value={todo} onChange={handleTodo} />
      <button onClick={addTodo}>Submit</button>
      <ul>{todosElement}</ul>
    </>
  )
}

export default App
