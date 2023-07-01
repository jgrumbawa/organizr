export default function TodoInput({ todo, handleTodo }) {
  return <input type="text" value={todo} onChange={handleTodo} />
}
