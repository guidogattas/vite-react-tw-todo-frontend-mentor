const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="flex justify-between px-4 py-4 bg-white dark:bg-gray-800 rounded-b-md">
      <span className="text-gray-400">{computedItemsLeft} items left</span>
      <button onClick={clearCompleted} className="text-gray-400">Clear Completed</button>
    </section>
  )
}

export default TodoComputed