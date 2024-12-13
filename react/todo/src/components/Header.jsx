import styled from "@emotion/styled/macro";
import React from "react";

export default function Header() {
  return (
    <TodoListHeader>
      <h1>TodoList</h1>
      <div>
        <FilterButton>All</FilterButton>
        <FilterButton>Active</FilterButton>
        <FilterButton>Done</FilterButton>
      </div>
    </TodoListHeader>
  );
}

const TodoListHeader = styled.header`
  border-radius: 8px;
  background-color: #81bfda;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  box-sizing: border-box;
`;

const FilterButton = styled.button`
  background-color: #81bfda;
  padding: 12px;
  border-radius: 4px;
  margin: 2px;
`;
