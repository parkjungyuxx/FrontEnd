import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";

export default function Todolist() {
  return (
    <TodolistContainer>
      <Header />
      <Form />
      <List />
    </TodolistContainer>
  );
}

const TodolistContainer = styled.div`
  width: 840px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: #b1f0f7;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
  box-sizing: border-box;
`;
