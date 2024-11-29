// Write your code here

const TodoItem = props => {
  const {todoList, deleteTodo} = props
  const {title, id} = todoList

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <p>{title}</p>
      <div>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
