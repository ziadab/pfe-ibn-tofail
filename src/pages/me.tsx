import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";

const Me: NextPage = () => {
  const { data, update, status } = useSession();
  console.log("data: ", data);
  return (
    <>
      <Head>
        <title>Me</title>
      </Head>
      <div>
        <h1>Me</h1>
      </div>
    </>
  );
};

export default Me;
