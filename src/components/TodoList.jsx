import CrossIcon from './icons/CrossIcon'

const TodoList = () => {
  return (
<div className="bg-white rounded-t-md [&>article]:p-4 mt-8">
          <article className="flex gap-4 border-b-[1.5px] border-b-gray-400">
            <button className="flex-none inline-block w-5 h-5 bg-red-400 rounded-full"></button>
            <p className="text-gray-600 grow">
              Complete online Javascript curse
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-[1.5px] border-b-gray-400">
            <button className="flex-none inline-block w-5 h-5 bg-red-400 rounded-full"></button>
            <p className="text-gray-600 grow">
              Complete online Javascript curse
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-[1.5px] border-b-gray-400">
            <button className="flex-none inline-block w-5 h-5 bg-red-400 rounded-full"></button>
            <p className="text-gray-600 grow">
              Complete online Javascript curse
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
        </div>
  )
}

export default TodoList