import useCurrentUser from "hooks/useCurrentUser";
import { post } from "utils/api";

interface IPostLogin {
  email: string;
  password: string;
}

interface IPostSignUp {
  username: string;
  email: string;
  password: string;
  start_day: number;
  food_expenses: number;
}

export const useAuth = () => {
  const { setCurrentUser } = useCurrentUser();

  // 회원가입
  const postSignUp = async ({
    username,
    email,
    password,
    start_day,
    food_expenses,
  }: IPostSignUp) => {
    const res = await post(`/user/signup`, {
      username,
      email,
      password,
      start_day,
      food_expenses,
    });
    return { res };
  };

  const postLogin = async ({ email, password }: IPostLogin) => {
    const res = await post(`/user/login`, { email, password });
    return res;
  };
  return {
    postSignUp,
    postLogin,
  };
};
