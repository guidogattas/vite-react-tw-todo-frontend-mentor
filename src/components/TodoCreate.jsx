const TodoCreate = () => {
    return (
        <form className="flex items-center gap-4 px-4 py-4 mt-8 overflow-hidden bg-white rounded-md ">
            <span className="inline-block w-5 h-5 bg-red-400 border-2 rounded-full"></span>
            <input
                className="w-full text-gray-400 outline-none"
                type="text"
                placeholder="Create a new Todo"
            />
        </form>
    )
}

export default TodoCreate