import TodoItem from "./TodoItem"
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <Droppable droppableId='todos'>
      {
        (droppableProvided) => (
          <div
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
            className="bg-white transition-all duration-500 dark:bg-gray-800 overflow-hidden rounded-t-md [&>article]:p-4 mt-8"
          >
            {todos.map((todo, index) => (
              <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                {
                  (draggableProvided) => (
                    <TodoItem
                      todo={todo}
                      removeTodo={removeTodo}
                      updateTodo={updateTodo}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      {...draggableProvided.draggableProps}
                    />
                  )
                }

              </Draggable>
            ))}

            {droppableProvided.placeholder}
          </div>
        )
      }
    </Droppable>
  )
}

export default TodoList