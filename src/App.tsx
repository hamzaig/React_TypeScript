import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Hello"), new Todo("World")];
  return (
    <h1>
      <Todos items={todos} />
    </h1>
  );
}

export default App;
