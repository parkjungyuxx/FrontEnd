import { useMutation } from "@tanstack/react-query";
import AuthApi from "../../apis/authApi";

const useSignUp = () => {
  return useMutation({
    mutationFn: ({ email, password }) => AuthApi.signUp({ email, password }),
  });
};

export default useSignUp;
