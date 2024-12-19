import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function Modal({ setIsModalOpen }) {
  const dispatch = useDispatch();
  const titleInputRef = useRef();
  const textInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let title = titleInputRef.current.value;
    let text = textInputRef.current.value;
    if (!title || !text) {
      alert("제목과 내용을 입력하삼");
      return;
    }
    dispatch({
      type: "add_todo",
      payload: {
        id: uuidv4(),
        title,
        text,
        status: "Scheduled",
        isEditing: false,
      },
    });
    setIsModalOpen((prev) => !prev);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Title</p>
      <input type="text" ref={titleInputRef} placeholder="Add title" />
      <p>Text</p>
      <input type="text" ref={textInputRef} placeholder="Add text" />
      <button>Add</button>
    </form>
  );
}
