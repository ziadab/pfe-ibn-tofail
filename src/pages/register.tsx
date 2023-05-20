import { RegisterForm } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";

const register: NextPage = () => {
  return (
    <>
      <Head>
        <title>register</title>
      </Head>
      <main className="h-full w-full fixed flex m-0 p-0">
        <div className="hidden md:block w-2/6 h-screen bg-slate-900">
          <img
            src={
              "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt="Picture of the author"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:w-4/6  w-full">
          <RegisterForm />
        </div>
      </main>
    </>
  );
};

export default register;
