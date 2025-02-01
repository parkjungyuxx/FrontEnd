import client from "../../../shared/libs/axios/base";

const AuthApi = {
  signIn({ email, password }) {
    return client.post("/user/sign-in", {
      email,
      password,
    });
  },

  signUp({ email, password }) {
    return client.post("/user/sign-up", {
      email,
      password,
    });
  },
};

export default AuthApi;
