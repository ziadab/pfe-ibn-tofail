import { UserData } from "@/components/RegisterForm";
import { request } from "@/helpers/request";

export const createUser = (user: UserData) => {
  return request.post("/auth/signup", user);
};

export const loginUser = (email: string, password: string) => {
  return request.post("/auth/login", { email, password });
};

export const fetchMe = () => {
  return request.get("/auth/me");
};
