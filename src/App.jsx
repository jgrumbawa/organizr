import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [todo, setTodo] = useState('')

  const todosElement = todos.map((todo) => <li>{todo}</li>)

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
      <input type="text" value={todo} onChange={handleTodo} />
      <button onClick={addTodo}>Submit</button>
      <ul>{todosElement}</ul>
    </>
  )
}

export default App
