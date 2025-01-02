import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./reducer/userReducer";

function App() {
  const users = useSelector((s) => s.user.users);
  const getUsersState = useSelector((s) => s.user.getUsersState);
  const dispatch = useDispatch();

  useEffect(
    function onInt() {
      dispatch(getUsers());
    },
    [dispatch]
  );

  const handleAddUser = async () => {
    const newUser = {
      userId: "exmaple2",
      nickName: "exmaple3",
    };
    const response = await axios.post("/api/user", newUser);
    console.log(response);
    // reponse.data에 mockUserList가 전달되고 있지만 보통은 전달되지 않습니다.

    // 데이터를 다시 호출하지 않고 상태만 바꿀 수 있습니다.
    // 이런 경우는 response에 추가한 데이터를 그대로 전달
    // 실제 데이터베이스와 다를 수 있다, 다시 호출하거나 새로고침하는 경우가 많음

    // 데이터의 변경은 나 혼자만 일으키는 것이 아니라 다른 사용자도 발생시킬 수 있음
    // 이를 방지하려면 mockUserList 처럼 모든 값을 다줘야하는데, 그럼 재호출과 같음

    dispatch(getUsers)
  };

  const handleDeleteUser = async () => {
    const response = await axios.delete("/api/user/exa2345345645e5345mple");
    console.log(response);
  };

  const handleFetchUser = async () => {
    try {
      const response = await axios.get("/api/user");
    } catch (err) {
      console.log(err.response);
      switch (err.response.status) {
        // 401, 403 -> global error -> global error handling
        // error-boundary, errorElement

        // local -> 에러메세지를 다르게 보여줘라, 토스트 메세지를 보여주세요
        case 401:
          alert("로그인 해주세요");
          return;
        case 403:
          alert("권한이 없습니다");
        default:
          throw err; // 핸들링 할 수 없는 에러는 상단으로 던져라
      }
      // => msw로 error 보낼 수 있다
      // => async/await -> try/catch -> catch(error) -> 분기처리(에러핸들링)
      // => (부록) 글로버 에러 핸들링은 최상위에서 하는게 좋다
    }
  };

  

if (getUsersState.loading) return <div>loading</div>

  return (
    <>
      <button>로그인</button>
      <button>로그아웃</button>
      <button onClick={handleFetchUser}>유저 상세</button>
      <button>유저 목록</button>
      <button onClick={handleAddUser}>유저 추가</button>
      <button onClick={handleDeleteUser}>유저 삭제</button>
      {users.map((user) => (
        <div>{user.userId}</div>
      ))}
    </>
  );
}

export default App;
