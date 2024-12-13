import React, { useContext, useState } from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import * as style from "../emotion";
import { TodosContext } from "../context/TodosContext";
import Modal from "./Modal";

export default function List() {
  const { todos, setTodos, isChecked, setIschecked, isEditing, setIsEditing } =
    useContext(TodosContext);
  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (i) => {
    const copy = [...todos];
    copy.splice(i, 1);
    setTodos(copy);
  };

  const handleEditStart = (i) => {
    const todo = todos[i];
    const copy = [...todos, { ...todo, isEditing: true }];
    setTodos(copy);
  };

  return (
    <style.Ul>
      {todos.map((el, i) => (
        <style.Li key={i}>
          <style.InputContainer>
            <input type="checkbox" />
            <style.ListTextContainer>
              {todos[i].isEditing ? (
                <EditForm
                  editTitle={editTitle}
                  editText={editText}
                  setEditTitle={setEditTitle}
                  setEditText={setEditText}
                />
              ) : (
                <>
                  <p>제목: {todos[i].title}</p>
                  <p>할일: {todos[i].text}</p>
                </>
              )}
            </style.ListTextContainer>
          </style.InputContainer>
          <style.ButtonContainer>
            <style.ListBtn
              onClick={() => {
                handleDelete(i);
              }}
            >
              <MdDeleteOutline />
            </style.ListBtn>
            <style.ListBtn onClick={() => handleEditStart(i)}>
              <MdOutlineEdit />
            </style.ListBtn>
          </style.ButtonContainer>
        </style.Li>
      ))}
    </style.Ul>
  );
}

const EditForm = ({ setEditText, setEditTitle, editText, editTitle }) => {
  const { todos, setTodos, isChecked, setIschecked, isEditing, setIsEditing } =
    useContext(TodosContext);

  const finishEdit = (e, i) => {
    e.preventDefault();
    const todo = todos[i];
    const copy = [...todos, { ...todo, title: editTitle, text: editText }];
    setTodos(copy);
  };
  return (
    <form onSubmit={finishEdit}>
      <input
        onChange={(e) => setEditTitle(e.target.value)}
        value={editTitle}
        type="text"
        placeholder="제목을 수정해주세요"
      />
      <input
        onChange={(e) => setEditText(e.target.value)}
        value={editText}
        type="text"
        placeholder="내용을 수정해주세요"
      />
      <button>완료</button>
    </form>
  );
};
