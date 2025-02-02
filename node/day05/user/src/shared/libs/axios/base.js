import axios from 'axios';
import AuthApi from '../../../features/auth/apis/authApi';

// client는 사용자에게 전달되는 번들 파일 시점에서 이미 생성된 상태
// 생성 -> 메모리에 저장된 상태

// 로그인이 안되어있을 때 토큰 있어요 없어요
// Authorization: 'Bearer {token}' -> token undefined
// 다시 재생성하지 않기 때문에 로그인 해도 바뀌지 않습니다.
// 새로고침 해야 정상작동

// 함수형으로 만들거나, 클래스 형태로 많이 생성
// 객체지향을 알고 있고 타입스크립트를 사용한다면 클래스로 만드는 곳도 많아요


const client = axios.create({
  baseURL: 'http://localhost:3030',
  withCredentials: true,
  // 서버와 쿠키 교환이 가능해집니다, refresh 주고 받아올 수 있습니다.
})

client.interceptors.request.use(
(config) => {
  const token = localStorage.getItem("DN_AUT");
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

client.interceptors.response.use((response) => {
  return response
}, async (error) => {
  // 이 상황은 무슨 상황?
  // refresh x access x
  if(error.response.status === 401) {
    // logout
    localStorage.removeItem('DN_AUT');
    AuthApi.logOut()
    // 특정 요청이 트리거 되었을 때 로그인 페이지
    window.location.href = '/auth/sign-in'
  } 

  // refresh o access x 
  if(error.response.status === 422) {
    // access_token 재발급 -> 재요청
    const response = await AuthApi.refresh()
    const token = response.data.token
    localStorage.setItem('DN_AUT', token)
    error.config.headers.Authorization = `Bearer ${token}`
    return client(error.config)
  }

  return Promise.reject(error)
})



export default client