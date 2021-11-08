import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <TodoItem key={item.id} itemText={item.item} />;
      })}
    </ul>
  );
};

export default Todos;
