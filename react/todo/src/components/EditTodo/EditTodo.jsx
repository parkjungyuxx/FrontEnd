import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export default function EditTodo({ todoId }) {
  const titleInputRef = useRef();
  const textInputRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTitle = titleInputRef.current.value;
    const editedText = textInputRef.current.value;

    if (!editedTitle || !editedText) {
      alert("제목과 내용을 입력하쇼");
      return;
    }

    dispatch({
      type: "edit_todo",
      payload: {
        id: todoId,
        title: editedTitle,
        text: editedText,
        isEditMode: false,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={titleInputRef} type="text" placeholder="edit title" />
      <input ref={textInputRef} type="text" placeholder="edit text" />
      <button>Update</button>
    </form>
  );
}
