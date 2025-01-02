import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./todoReducer";

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});

export default rootReducer;
