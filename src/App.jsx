import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState(['todo 1', 'todo 2'])

  const todosElement = todos.map((todo) => <li>{todo}</li>)

  function addTodo() {
    setTodos((prevTodos) => [...prevTodos, `thing ${todos.length + 1}`])
  }

  return (
    <>
      <input type="text" />
      <button onClick={addTodo}>Submit</button>
      <ul>{todosElement}</ul>
    </>
  )
}

export default App
