import React, { useRef } from "react";

export default function EditTodo({ setTodos, todoId }) {
  const titleInputRef = useRef();
  const textInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTitle = titleInputRef.current.value;
    const editedText = textInputRef.current.value;
    setTodos((prev) =>
      prev.map((el) =>
        el.id === todoId
          ? { ...el, title: editedTitle, text: editedText, isEditing: false }
          : el
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={titleInputRef} type="text" placeholder="edit title" />
      <input ref={textInputRef} type="text" placeholder="edit text" />
      <button>Update</button>
    </form>
  );
}
