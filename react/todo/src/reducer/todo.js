export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add_todo":
      return [...state, action.payload];
    case "delete_todo":
      return [...state.filter((todo) => todo.id !== action.payload.id)];
    case "edit_todo":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title,
              text: action.payload.text,
              isEditMode: action.payload.isEditMode,
            }
          : todo
      );
    case "update_todo_status":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo
      );
    case "update_todo_edit_status":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isEditMode: action.payload.isEditMode }
          : todo
      );
    default:
      return state;
  }
};
