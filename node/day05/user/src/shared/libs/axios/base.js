import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3030",
  withCredentials: true
  // 서버와 쿠키 교환을 가능하게 해줌
});

export default client;
