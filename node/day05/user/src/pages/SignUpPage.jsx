import { useNavigate } from "react-router-dom";
import useSignUp from "../features/auth/hooks/mutations/useSignUp";

const SignUpPage = () => {
  const { mutateAsync } = useSignUp()
  const navigate = useNavigate()

  const handleSumitSignUp = async (e) => {
    e.preventDefault();
    await mutateAsync({
      email: e.target.email.value,
      password: e.target.password.value
    })
    navigate('/auth/sign-in')
  }

  return <form onSubmit={handleSumitSignUp}>
    <input name="email" placeholder="email"/>
    <input name="password" placeholder="password"/>
    <button>회원가입</button>
  </form>
}
export default SignUpPage