import { Container, NavBar } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";
import { SlGraduation } from "react-icons/sl";

const Undergraduate: NextPage = () => {
  return (
    <>
      <Head>
        <title>Undergraduate</title>
      </Head>
      <div>
        <NavBar />
        <Container>
          <div className="flex justify-center items-center">
            <SlGraduation size={38} />
            <h1 className="font-sans text-3xl ml-4">
              Licences Universitaires Professionnelles
            </h1>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Undergraduate;
