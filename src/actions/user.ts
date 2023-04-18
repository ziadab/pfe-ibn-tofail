import { UserData } from "@/components/RegisterForm";
import { request } from "@/helpers/request";

export const createUser = (user: UserData) => {
  return request.post("/user", user);
};
