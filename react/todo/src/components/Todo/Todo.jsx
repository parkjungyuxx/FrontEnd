import React from "react";

export default function Todo({ todo }) {
  const { id, title, text, status } = todo;
  return (
    <li>
      <input />
      <label>{text}</label>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
}
