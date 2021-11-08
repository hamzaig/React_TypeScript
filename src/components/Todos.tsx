import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[]; removeTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            itemText={item.item}
            removeTodo={props.removeTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
