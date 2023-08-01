
import CrossIcon from './icons/CrossIcon'

const TodoItem = ({todo}) => {

  const {id, title, completed} = todo

  return (
          <article className="flex gap-4 border-b-[1.5px] border-b-gray-400">
            <button className="flex-none inline-block w-5 h-5 bg-gray-300 rounded-full"></button>
            <p className="text-gray-600 grow">
              {title}
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
  )
}

export default TodoItem