import * as authApi from "./apis/auth/authApi";
import * as userApi from "./apis/user/userApi";

// mocking api 역할을 등록
export const handlers = [...Object.values(authApi), ...Object.values(userApi)];
