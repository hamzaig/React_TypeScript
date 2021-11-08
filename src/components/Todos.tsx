import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <li key={item.id}>{item.item}</li>;
      })}
    </ul>
  );
};

export default Todos;
