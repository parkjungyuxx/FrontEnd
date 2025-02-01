import { useMutation } from "@tanstack/react-query";
import AuthApi from "../../apis/authApi";

const useSignIn = () => {
  return useMutation({
    mutationFn: ({ email, password }) => AuthApi.signIn({ email, password }),
  });
};

export default useSignIn;
