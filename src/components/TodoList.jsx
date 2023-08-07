import TodoItem from "./TodoItem"

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <div className="bg-white transition-all duration-1000 dark:bg-gray-800 overflow-hidden rounded-t-md [&>article]:p-4 mt-8">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
      ))}
    </div>
  )
}

export default TodoList