import React, { useRef, useState } from "react";

export default function AddTodoForm({ handleAddTodo }) {
  const inputRef = useRef(null);

  const addTodo = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    handleAddTodo(text);
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={addTodo}>
      <input ref={inputRef} placeholder="할일을 입력하삼" />
      <button>투두 추가</button>
    </form>
  );
}
