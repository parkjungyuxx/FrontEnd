import { useEffect, useState, useCallback } from "react";
import "./App.css";
import axios from "axios";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [userList, setUserList] = useState([]);

  const fetchUserList = useCallback(async () => {
    const response = await axios.get("/api/todo/list");
    console.log("ㅁㄴㅇ",response);
  }, []);

  useEffect(function onInt() {
    fetchUserList();
  }, []);

  const handleAddTodo = async (text) => {
    const newTodo = {
      userId: "example2",
      text: text,
    };
    console.log(text);
    const response = await axios.post("/api/todo", newTodo);
    console.log(response); // response.data에 mockUserList가 전달되고 있지만 보통은 절달되지 않는다
    // 데이터를 다시 호출하지 않고 상태만 바꿀 수 있다.
    // 이런 경우는 response에 추가한 데이터를 그대로 전달
    // 실제 데이터베이스와 다를 수 있다, 다시 호출하거나 새로고침하는 경우가 많음
    // 데이터의 변경은 나 혼자만 일으키는 것이 아니라 다른 사용자가 발생
    // 이를 방지하려면 mockUserList 처럼 모든 값을 다 줘야하는데, 그럼 재호출과 같음

    fetchUserList();
  };

  const handleDeleteTodo = async () => {
    const response = await axios.delete("/api/user/example33");
    console.log(response);
  };

  const handleFetchUser = async () => {
    try {
      const response = await axios.get("/api/user?token=testdToken");
    } catch (err) {
      console.log(err.response);
      switch (err.response.status) {
        // global error -> global error handling
        // error-boundary, errorElement

        // local -> 에러메세지를 다르게 보여줘라, 토스트 메세지를 보여주세요
        case 401:
          alert("로그인 해주세요");
        case 403:
          alert("권한이 없습니다");
        default:
          throw err;
      }
      // => async/await -> try/catch -> catch(error) -> 분기처리(에러핸들링)
      // => 글로벌 에러 핸들링은 최상위에서 하는게 좋다
    }
  };

  return (
    <>
      <AddTodoForm handleAddTodo={handleAddTodo} />
      <button>로그인</button>
      <button>로그아웃</button>
      <button onClick={handleFetchUser}>유저 상세</button>
      <button>유저 목록</button>
      <button onClick={handleDeleteTodo}>투두 삭제</button>
      {userList.map((user) => (
        <div>{user.userId}</div>
      ))}
    </>
  );
}

export default App;
