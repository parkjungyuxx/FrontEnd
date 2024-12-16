import React, { useState } from "react";
import Modal from "../Modal/Modal";

export default function Todolist({ filter }) {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <button onClick={handleModalOpen}>Add</button>
      {isModalOpen && <Modal />}
    </>
  );
}

function getFilteredItem(todos, filter) {
  if (filter === "All") {
    return todos;
  }
}
