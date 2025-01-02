import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "./reducer/todoReducer";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const getTodosState = useSelector((state) => state.todo.getTodosState);
  const dispatch = useDispatch();
  const addInputRef = useRef(null);
  const editInputRef = useRef(null);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const text = addInputRef.current.value;
    dispatch(addTodo(text));
    addInputRef.current.value = "";
  };

  const handleUpdateTodo = (e, id) => {
    e.preventDefault();
    const newText = editInputRef.current.value;
    const updates = { text: newText, editMode: false };
    dispatch(updateTodo({ id, updates }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditMode = (id) => {
    dispatch(updateTodo({ id, updates: { editMode: true } }));
  };

  if (getTodosState.loading) return <div>로딩중...</div>;

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.editMode ? (
              <form
                onSubmit={(e) => {
                  handleUpdateTodo(e, todo.id);
                }}
              >
                <input
                  ref={editInputRef}
                  type="text"
                  placeholder="수정 내용 작성좀"
                />
              </form>
            ) : (
              todo.text
            )}
            <button
              onClick={() => {
                handleEditMode(todo.id, { editMode: !todo.editMode });
              }}
            >
              {todo.editMode ? "Update" : "Edit"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddTodo}>
        <input
          ref={addInputRef}
          type="text"
          placeholder="할일 목록 추가하삼 "
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
