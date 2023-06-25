import { fetchMe } from "@/actions/user";
import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";

const Me: NextPage = () => {
  const { isSuccess, data } = useQuery("me", fetchMe);
  return (
    <>
      <Head>
        <title>Me</title>
      </Head>
      <div>
        <h1>{isSuccess && JSON.stringify(data)}</h1>
      </div>
    </>
  );
};

export default Me;
