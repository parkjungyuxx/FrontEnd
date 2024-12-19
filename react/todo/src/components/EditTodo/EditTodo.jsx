import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export default function EditTodo({ setTodos, todoId }) {
  const titleInputRef = useRef();
  const textInputRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTitle = titleInputRef.current.value;
    const editedText = textInputRef.current.value;

    if (!editedTitle || !editedText) {
      alert("Title and text cannot be empty!");
      return;
    }

    dispatch({
      type: "edit_todo",
      payload: {
        id: todoId,
        title: editedTitle,
        text: editedText,
        isEditing: false,
      },
    });
    console.log("EditTodo Dispatched:", {
      id: todoId,
      title: editedTitle,
      text: editedText,
      isEditing: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={titleInputRef} type="text" placeholder="edit title" />
      <input ref={textInputRef} type="text" placeholder="edit text" />
      <button type="submit">Update</button>
    </form>
  );
}
