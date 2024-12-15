import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";
import { useRef } from "react";

// 1. createStore(), 모든 전역 상태가 관리되는 가장 큰 저장소
// 2. rootReducer() reducer들을 하나로 합쳐주는 역할
// 3. userReducer와 같은 각각의 reducer들을 생성 === useReducer
// 4. Provider로 사용할 범위 지정하고 store에 값 전달

function ReduxComponent() {
  // root reducer에서 등록한 key를 바탕으로 user State select 해온다
  // user가 변경이 되면 selector를 통해서 구독하든 컴포넌트만 리랜더링
  const users = useSelector((state) => state.user); // state
  const dispatch = useDispatch(); // dispatch === useReducer

  const inputRef = useRef(null);

  const addUser = (e) => {
    inputRef.current.focus();
    dispatch({
      type: "add_user",
      payload: {
        id: Math.floor(Math.random() * 100000000000),
        name: inputRef.current.value,
      },
    });
    inputRef.current.value = "";
  };

  const deleteUser = (e) => {
    dispatch({
      type: "delete_user",
      payload: {
        name: inputRef.current.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}

      <input ref={inputRef} />
      <button onClick={addUser}>add</button>
      <button onClick={deleteUser}>delete</button>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ReduxComponent />
    </Provider>
  );
}

export default App;

//과제 1. delete_user 구현해오기
//과제 2. todo_list 만드신 분들은 ,todo state의 관리를 redux로 만들어보는 것
