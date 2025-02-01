import { useNavigate } from "react-router-dom";
import useSignUp from "../features/auth/hooks/mutations/useSignUp";

export default function SignUpPage() {
  const { mutateAsync } = useSignUp();
  const navigate = useNavigate();

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    await mutateAsync({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    navigate("/auth/sign-in");
  };

  return (
    <form onSubmit={handleSubmitSignUp}>
      <input name="email" placeholder="email" />
      <input name="password" placeholder="password" />
      <button>회원가입</button>
    </form>
  );
}
