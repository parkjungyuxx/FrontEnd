import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Modal({ addTodo, setIsModalOpen }) {
  const titleInputRef = useRef();
  const textInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let title = titleInputRef.current.value;
    let text = textInputRef.current.value;
    addTodo({
      id: uuidv4(),
      title,
      text,
      status: "Scheduled",
      isEditing: false,
    });
    console.log(title, text);
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
