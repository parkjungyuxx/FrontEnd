import React, { createContext, useState } from "react";

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const addTodo = () => {};

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        isChecked,
        setIsChecked,
        isEditing,
        setIsEditing,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
