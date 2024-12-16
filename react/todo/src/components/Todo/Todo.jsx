import React from "react";

export default function Todo({ todo, handleEdit, handleDelete }) {
  const { id, title, text, status, isEditing } = todo;

  return (
    <li key={id}>
      <input type="checkbox" />
      <label>{title}</label>
      <label>{text}</label>
      <button onClick={() => handleEdit(todo)}>Edit</button>
      <button onClick={() => handleDelete(todo)}>Delete</button>
    </li>
  );
}