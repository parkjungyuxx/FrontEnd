import React, { useContext, useState } from "react";
import * as style from "../emotion";
import { TodosContext } from "../context/TodosContext";

export default function Modal({ isModalOpen, setIsModalOpen }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const { todos, setTodos, isChecked, isEditing } = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { title, text, isChecked, isEditing }]);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <style.ModalContainer>
      <style.ModalContent>
        <style.ModalForm onSubmit={handleSubmit}>
          <label>제목</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
          />

          <label>내용</label>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            value={text}
          />
          <style.SubmitBtn>Add</style.SubmitBtn>
        </style.ModalForm>
      </style.ModalContent>
    </style.ModalContainer>
  );
}
