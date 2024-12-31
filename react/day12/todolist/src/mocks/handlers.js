import * as authApi from "./apis/auth/authApi";
import * as todoApi from "./apis/todo/todoApi";

// mocking api 역할을 등록
export const handlers = [...Object.values(authApi), ...Object.values(todoApi)];
