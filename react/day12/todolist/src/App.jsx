import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";

function App() {
  const [todoList, setTodoList] = useState([]);
  const addInputRef = useRef(null);
  const editInputRef = useRef(null);

  // 투두 리스트 조회
  const fetchTodoList = useCallback(async () => {
    const response = await axios.get("/api/todo/list");
    setTodoList(response.data);
  }, []);

  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  // 투두 추가
  const handleAddTodo = async (text) => {
    const response = await axios.post("/api/todo", { text });
    setTodoList((prev) => [...prev, response.data]);
    console.log(todoList);
  };

  // 투두 수정
  const handleUpdateTodo = async (id, updates) => {
    const response = await axios.patch(`/api/todo/${id}`, updates);
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? response.data : todo))
    );
  };

  // 투두 삭제
  const handleDeleteTodo = async (id) => {
    await axios.delete(`/api/todo/${id}`);
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = addInputRef.current.value;
    handleAddTodo(text);
    addInputRef.current.value = "";
  };

  const handleEditTodo = (e, id) => {
    e.preventDefault();
    const newText = editInputRef.current.value;
    console.log(newText);
    handleUpdateTodo(id, { text: newText, editMode: false });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.editMode ? (
              <form
                onSubmit={(e) => {
                  handleEditTodo(e, todo.id);
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
              onClick={() =>
                handleUpdateTodo(todo.id, { editMode: !todo.editMode })
              }
            >
              {todo.editMode ? "Update" : "Edit"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
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
