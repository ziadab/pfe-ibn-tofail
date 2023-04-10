import Head from "next/head";
import { Inter } from "next/font/google";
import { NavBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <NavBar />
    </>
  );
}
