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

  const handleEdit = (todoToEdit) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoToEdit.id
          ? { ...todo, ...todoToEdit, isEditing: !todo.isEditing }
          : todo
      )
    );
  };
  const handleDelete = (todoToDelete) => {
    setTodos(todos.filter((el) => el.id !== todoToDelete.id));
  };

  const updateFilterState = (todoToChangeState) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === todoToChangeState.id
          ? { ...todo, status: "Completed" }
          : todo
      )
    );
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
            updateFilterState={updateFilterState}
            setTodos={setTodos}
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
  return todos.filter((el) => el.status === filter);
}
