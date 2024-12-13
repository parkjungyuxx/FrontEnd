import React, { useContext, useState } from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import * as style from "../emotion";
import { TodosContext } from "../context/TodosContext";
import Modal from "./Modal";

export default function List() {
  const { todos, setTodos } = useContext(TodosContext);
  const [editText, setEditText] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (i) => {
    const copy = [...todos];
    copy.splice(i, 1);
    setTodos(copy);
  };

  const handleEdit = (i) => {
    const copy = [...todos];
  };

  return (
    <style.Ul>
      {todos.map((el, i) => (
        <style.Li key={i}>
          <style.InputContainer>
            <input type="checkbox" />
            <style.ListTextContainer>
              <p>제목: {todos[i].title}</p>
              <p>할일: {todos[i].text}</p>
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
            <style.ListBtn onClick={()=>setIsModalOpen(!isModalOpen)}>
              <MdOutlineEdit />
            </style.ListBtn>
          </style.ButtonContainer>
        </style.Li>
      ))}
      {isModalOpen && <Modal />}
    </style.Ul>
  );
}
