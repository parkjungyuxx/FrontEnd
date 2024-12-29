import authApi from "./apis/auth/authApi";

// mocking api 역할을 등록
export const handlers = [
    ...Object.values(authApi)
];
