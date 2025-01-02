import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./userReducer";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export default rootReducer;
