import { useReducer, useRef } from "react";
import userReducer from "../reducer/useReducer";

const Users = () => {
  const [state, dispatch] = useReducer(userReducer, [
    { id: 1, name: "jungyu" },
  ]);

  const userNameInputRef = useRef();

  const handleClickAddUser = () => {
    dispatch({
      type: "add_user",
      payload: {
        id: Math.floor(Math.random() * 10000000000),
        name: userNameInputRef.current.value,
      },
    });
    userNameInputRef.current.value = "";
  };

  return (
    <>
      {state.map((user) => (
        <div>{user.name}</div>
      ))}
      <input ref={userNameInputRef} />
      <button onClick={handleClickAddUser}>추가</button>
    </>
  );
};

export default Users;
