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
  { id: 3, title: "Study", completed: false },
  { id: 4, title: "Watch a movie", completed: false }
]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    }
    setTodos([...todos, newTodo])

  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <Header />

      <main className="container px-4 mx-auto mt-8">
        <TodoCreate createTodo={createTodo} />
        <TodoList todos={todos} />
        <TodoComputed />
        <TodoFilter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
