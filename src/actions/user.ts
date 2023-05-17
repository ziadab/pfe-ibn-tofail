import { UserData } from "@/components/RegisterForm";
import { request } from "@/helpers/request";

interface SignIn {
  redirect: string;
  email: string;
  password: string;
  csrfToken: string;
  callbackUrl: string;
  json: string;
}

export const createUser = (user: UserData) => {
  return request.post("/auth/signup", user);
};

export const loginUser = (email: string, password: string) => {
  return request.post("/auth/login", { email, password });
};
