import { loginUser } from "@/actions/user";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface SignIn {
  redirect: string;
  email: string;
  password: string;
  csrfToken: string;
  callbackUrl: string;
  json: string;
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    secret: "tfhgGDEokb1FoewFGl/OXbq8GC4a89q4Bvm1gHUy//w=",
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {},
        async authorize(credentials) {
          const { email, password } = JSON.parse(
            JSON.stringify(credentials)
          ) as SignIn;

          try {
            const res = await loginUser(email, password);
            const data = await res.data;
            if (data.authToken === undefined) {
              return null;
            }
            return data;
          } catch (e) {
            return null;
          }
        },
      }),
    ],
    callbacks: {
      session: async ({ session, token }) => {
        //@ts-ignore
        session.user = token;
        return session;
      },

      jwt: async ({ token, user }) => {
        if (user) {
          token.authToken = user.authToken;
        }
        return token;
      },
    },
  });
}
