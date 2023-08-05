import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import Footer from "./components/Footer";
import { useState } from "react";

const initialStateTodos = [
  { id: 1, title: "Buy bread", completed: true },
  { id: 2, title: "Cook", completed: false },
  { id: 3, title: "Study", completed: true },
  { id: 4, title: "Watch a movie", completed: false }
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);
  const [filter, setFilter] = useState('all')

  const filteredTodos = () => {
    switch (filter) {
      case 'all': return todos;
      case 'active': return todos.filter((todo) => !todo.completed);
      case 'completed': return todos.filter((todo) => todo.completed);
    }
  }


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

  const changeFilter = (filter) => { setFilter(filter) }


  return (
    <div
      className="
          bg-[url('./assets/images/bg-mobile-light.jpg')]
          dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
          bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900">
      <Header />

      <main className="container px-4 mx-auto mt-8">
        <TodoCreate
          createTodo={createTodo} />
        <TodoList
          todos={filteredTodos(todos)}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
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
