import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import Footer from "./components/Footer";
import { DragDropContext } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const [filter, setFilter] = useState('all')

  const filteredTodos = () => {
    switch (filter) {
      case 'all': return todos;
      case 'active': return todos.filter((todo) => !todo.completed);
      case 'completed': return todos.filter((todo) => todo.completed);
    }
  }

  const changeFilter = (filter) => { setFilter(filter) }

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const computedItemsLeft = todos.filter(todo => !todo.completed).length

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;
    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );

  };

  return (
    <div
      className="
          bg-[url('./assets/images/bg-mobile-light.jpg')]
          dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
          md:bg-[url('./assets/images/bg-desktop-light.jpg')]
          md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
          bg-no-repeat bg-contain transition-all duration-500 bg-gray-300 min-h-screen dark:bg-gray-900">
      <Header />

      <main className="container px-4 mx-auto mt-8 md:max-w-xl ">
        <TodoCreate
          createTodo={createTodo} />

        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filteredTodos(todos)}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </DragDropContext>

        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted} />

        <TodoFilter
          changeFilter={changeFilter}
          filter={filter}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
