import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const register: NextPage = () => {
  return (
    <>
      <Head>
        <title>register</title>
      </Head>
      <main className="h-full w-full fixed flex m-0 p-0">
        <div className="w-2/6 h-screen bg-slate-900">
          <img
            src={
              "https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
            }
            alt="Picture of the author"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-4/6 h-full overflow-y-scroll p-10 flex flex-col items-center justify-center">
          <h2 className="text-lg font-normal">Scholar Year 2023/2024</h2>
          <h1 className="text-4xl tracking-wider uppercase mt-2 font-semibold ">
            Registeration is <span className="text-primary">OPEN!</span>
          </h1>
        </div>
      </main>
    </>
  );
};

export default register;
