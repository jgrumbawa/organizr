import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState(['todo 1', 'todo 2'])
  const [todo, setTodo] = useState('')

  const todosElement = todos.map((todo) => <li>{todo}</li>)

  function addTodo() {
    setTodos((prevTodos) => [...prevTodos, todo])
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
