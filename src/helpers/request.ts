import { getSession } from "next-auth/react";
import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
});

request.interceptors.request.use(
  async function (config) {
    const session = await getSession();
    //eslint-disable-next-line
    //@ts-ignore
    config.headers.Authorization = `Bearer ${session?.user?.authToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
