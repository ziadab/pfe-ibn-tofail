import { NavBar } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";

const Master: NextPage = () => {
  return (
    <>
      <Head>
        <title>Master</title>
      </Head>
      <div>
        <NavBar />
      </div>
    </>
  );
};

export default Master;
