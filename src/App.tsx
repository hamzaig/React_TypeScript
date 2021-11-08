import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // const todos = [new Todo("Hello"), new Todo("World")];

  const addItemHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((pre) => {
      return pre.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    // console.log(id);

    setTodos((pre) => {
      return pre.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  return (
    <h1>
      <NewTodo onAddTodo={addItemHandler} />
      <Todos items={todos} removeTodo={removeTodoHandler} />
    </h1>
  );
}

export default App;
