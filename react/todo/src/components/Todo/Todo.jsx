import React from "react";
import EditTodo from "../EditTodo/EditTodo";

export default function Todo({
  todo,
  handleDelete,
  handleEdit,
  setTodos,
  updateFilterState,
}) {
  const { id, title, text, isEditing } = todo;

  return (
    <>
      {isEditing ? (
        <EditTodo setTodos={setTodos} todoId={id} />
      ) : (
        <li key={id}>
          <input
            type="checkbox"
            onClick={() => {
              updateFilterState(todo);
            }}
          />
          <label>title: {title}</label>
          <label>text: {text}</label>
          <button onClick={() => handleEdit(todo)}>Edit</button>
          <button onClick={() => handleDelete(todo)}>Delete</button>
        </li>
      )}
    </>
  );
}
