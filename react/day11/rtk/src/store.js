import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/root";
// import logger 'redux-logger'

export const store = configureStore({
  // 저장소
  reducer: rootReducer,
  // 리덕스에서 개발 쉽게 할 수 있도록 지원하는 개발 도구
  devTools: import.meta.env.DEV,
  // 미들웨어 설정 (플러그인)
  middleware: (getDefaultMiddleware) => {
    // return [...getDefaultMiddleware(), logger]
    if (import.meta.env.DEV) {
      return [...getDefaultMiddleware()];
    }
    return getDefaultMiddleware();
  }, // 플러그인 갖다 쓸건지 ...getDefaultMiddleware()로 기존 플로그인 전개하고 ㅣogger 갖다 쓰겠다
});
