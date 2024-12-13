import * as style from "../emotion";
import React from "react";

export default function Header() {
  return (
    <style.TodoListHeader>
      <h1>TodoList</h1>
      <div>
        <style.FilterButton>All</style.FilterButton>
        <style.FilterButton>Active</style.FilterButton>
        <style.FilterButton>Done</style.FilterButton>
      </div>
    </style.TodoListHeader>
  );
}