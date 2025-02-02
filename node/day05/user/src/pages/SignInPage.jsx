import { useNavigate } from "react-router-dom";
import useSignIn from "../features/auth/hooks/mutations/useSignIn";

const SignInPage = () => {

  const { mutateAsync } = useSignIn()
  const navigate = useNavigate()

  const handleSumitSignIn = async (e) => {
    e.preventDefault();
    
    const { data } = await mutateAsync({
      email: e.target.email.value,
      password: e.target.password.value
    })

    localStorage.setItem('DN_AUT', data.token)

    const token = localStorage.getItem('DN_AUT')
    if(token) navigate('/')
  }

  return <form onSubmit={handleSumitSignIn}>
    <input name="email" placeholder="email"/>
    <input name="password" placeholder="password"/>
    <button>로그인</button>
  </form>
}
export default SignInPage