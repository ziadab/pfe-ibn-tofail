import NextAuth, { DefaultSession } from "next-auth";

interface IUser extends DefaultUser {
  authToken: string;
}

declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
