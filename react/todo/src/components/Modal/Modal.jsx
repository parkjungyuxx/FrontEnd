import React from "react";

export default function Modal() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target["titleInput"].value);
    console.log(e.target["textInput"].value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Title</p>
      <input type="text" name="titleInput" placeholder="Add title" />
      <p>Text</p>
      <input type="text" name="textInput" placeholder="Add text" />
      <button>Add</button>
    </form>
  );
}
