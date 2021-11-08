import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textRef.current!.value;
    if (enteredText.trim.length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input ref={textRef} type="text" name="" id="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
