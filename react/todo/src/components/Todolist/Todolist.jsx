import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Todo from "../Todo/Todo";

export default function Todolist({ filter }) {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEdit = (edited) => {
    console.log(edited.isEditing);
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((el) => el.id !== deleted.id));
  };

  const filtered = getFilteredItem(todos, filter);
  return (
    <>
      <ul>
        {filtered.map((el) => (
          <Todo
            key={el.id}
            todo={el}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
      <button onClick={handleModalOpen}>Add</button>
      {isModalOpen && (
        <Modal addTodo={addTodo} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
}

function getFilteredItem(todos, filter) {
  if (filter === "All") {
    return todos;
  }
  todos.filter((el) => el.status === filter);
}
