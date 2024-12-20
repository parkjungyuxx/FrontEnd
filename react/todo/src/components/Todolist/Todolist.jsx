import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Todo from "../Todo/Todo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Todolist({ filter }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEditToggle = (todoToChangeEditState) => {
    dispatch({
      type: "update_todo_edit_status",
      payload: { id: todoToChangeEditState.id, isEditMode: true },
    });
  };

  const handleDelete = (todoToDelete) => {
    dispatch({
      type: "delete_todo",
      payload: { id: todoToDelete.id },
    });
  };

  const updateFilterState = (todoToChangeStatusState) => {
    const status =
      todoToChangeStatusState.status === "Completed"
        ? "Scheduled"
        : "Completed";
    dispatch({
      type: "update_todo_status",
      payload: {
        id: todoToChangeStatusState.id,
        status,
      },
    });
  };

  const filtered = getFilteredItem(todos, filter);
  return (
    <>
      <ul>
        {filtered.map((el) => (
          <Todo
            key={el.id}
            todo={el}
            isEditMode={el.isEditMode}
            handleEditToggle={handleEditToggle}
            handleDelete={handleDelete}
            updateFilterState={updateFilterState}
          />
        ))}
      </ul>
      <button onClick={handleModalOpen}>Add</button>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

function getFilteredItem(todos, filter) {
  if (filter === "All") {
    return todos;
  }
  return todos.filter((el) => el.status === filter);
}
