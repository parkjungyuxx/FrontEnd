import { useNavigate } from "react-router-dom";
import useSignIn from "../features/auth/hooks/mutations/useSignIn";

export default function SignInPage() {
  const { mutateAsync } = useSignIn();
  const navigate = useNavigate();

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    console.log(e.target.email, e.target.password);
    await mutateAsync({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmitSignIn}>
      <input name="email" placeholder="email" />
      <input name="password" placeholder="password" />
      <butotn>로그인</butotn>
    </form>
  );
}
