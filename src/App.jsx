import CrossIcon from "./components/icons/CrossIcon";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">

      <Header />

      <main className="container px-4 mx-auto mt-8">

        <TodoCreate />
        <TodoList />
        <TodoComputed />
        <TodoFilter />

      </main>

      <Footer />
    </div>
  );
};

export default App;
