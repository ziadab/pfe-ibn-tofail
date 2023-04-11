import Head from "next/head";
import { Inter } from "next/font/google";
import { NavBar } from "@/components";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <NavBar />
      <div className="h-[calc(100vh_-_64px)] w-full">
        <img
          src={
            "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          }
          alt="img"
          className="object-cover w-full h-full"
        />
      </div>
    </>
  );
}
