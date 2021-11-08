const TodoItem: React.FC<{ itemText: string; removeTodo: () => void }> = (
  props
) => {
  return <li onClick={props.removeTodo}>{props.itemText}</li>;
};

export default TodoItem;
