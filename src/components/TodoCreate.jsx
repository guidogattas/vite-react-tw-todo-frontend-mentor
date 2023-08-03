import { useState } from "react";

const TodoCreate = ({ createTodo }) => {

    const [title, setTitle] = useState("")

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            return setTitle("")
        }

        createTodo(title);
        setTitle("");

    }


    return (
        <form onSubmit={handleSubmitAddTodo} className="flex items-center gap-4 px-4 py-4 mt-8 overflow-hidden bg-white rounded-md ">
            <span className="inline-block w-5 h-5 bg-gray-300 border-2 rounded-full"></span>
            <input
                className="w-full text-gray-400 outline-none"
                type="text"
                placeholder="Create a new Todo"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </form>
    )
}

export default TodoCreate