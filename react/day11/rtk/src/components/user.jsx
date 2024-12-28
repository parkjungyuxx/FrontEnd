import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reducer/user";

export default function User() {
  const userList = useSelector((s) => s.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // 잘못된 코드
    // 랜더링 시마다 추가를 발생하는데
    // 랜더링이 여러회 발생하면
    dispatch(
      addUser({
        id: Math.floor(Math.random() * 100000000000),
        name: "park",
      })
    );
  }, []);

  return userList.map((user) => <div>{user.name}</div>);
}
