import { Navigate } from "react-router-dom"

const AuthGuard = ({children}) => {
  // 로그인이 안되어있으면 접근을 못하게 하는 코드
  const token = localStorage.getItem('DN_AUT')
  // 로그인 유무 판단 필요
  return token ? children : <Navigate to={'/auth/sign-in'}/>
}
export default AuthGuard




