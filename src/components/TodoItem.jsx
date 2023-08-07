
import IconCheck from './icons/IconCheck'
import IconCross from './icons/IconCross'

const TodoItem = ({ todo, removeTodo, updateTodo }) => {

  const { id, title, completed } = todo

  return (
    <article
      className="flex gap-4 border-b-[1.5px] border-b-gray-400 transition-all duration-1000 dark:bg-gray-800">
      <button
        className={`w-5 h-5 flex-none rounded-full border-2 ${completed
          ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          : "inline-block"
          }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconCheck stroke="000" />}
      </button>
      <p className={`text-gray-600 dark:text-gray-400 grow ${completed && "line-through"}`}>
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <IconCross />
      </button>
    </article>
  )
}

export default TodoItem