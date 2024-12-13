import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";
import * as style from "../emotion"

export default function Todolist() {
  return (
    <style.TodolistContainer>
      <Header />
      <Form />
      <List />
    </style.TodolistContainer>
  );
}

