import { combineReducers } from "redux";
import { userReducer } from "./user";

// todo, user reducer가 rootReducer로 합쳐지는 것
// 근데 사용할 때는 todo, user가 구분 되어야 함
// 그러면 combineReducers()에는 어떠한 자료구조가 들어가야할가요
// 객체

export const rootReducer = combineReducers({
  user: userReducer,
});
