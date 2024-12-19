import React from "react";
import EditTodo from "../EditTodo/EditTodo";

export default function Todo({
  todo,
  handleDelete,
  handleEditToggle,
  updateFilterState,
}) {
  const { id, title, text, isEditing } = todo;

  return (
    <>
      {isEditing ? (
        <EditTodo todoId={id} />
      ) : (
        <li>
          <input
            type="checkbox"
            checked={todo.status === "Completed"}
            onChange={() => updateFilterState(todo)}
          />
          <label>title: {title}</label>
          <label>text: {text}</label>
          <button onClick={() => handleEditToggle(todo)}>Edit</button>
          <button onClick={() => handleDelete(todo)}>Delete</button>
        </li>
      )}
    </>
  );
}
