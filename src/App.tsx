import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Hello"), new Todo("World")];

  const addItemHandler = (text: string) => {};

  return (
    <h1>
      <NewTodo onAddTodo={addItemHandler} />
      <Todos items={todos} />
    </h1>
  );
}

export default App;
