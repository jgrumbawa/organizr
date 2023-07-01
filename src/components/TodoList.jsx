export default function TodoList({ todos }) {
  const todosElement = todos.map((todo) => <li>{todo}</li>)

  return <ul>{todosElement}</ul>
}
