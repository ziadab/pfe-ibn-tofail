import { NavBar } from "@/components";
import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useRouter } from "next/router";
import { getProgram } from "@/actions/programs";
import { useQuery } from "react-query";

const Me: NextPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const router = useRouter();
  const { name } = router.query;
  const result = useQuery({
    queryKey: ["program", name],
    queryFn: () => getProgram(name as string),
  });

  return (
    <>
      <Head>
        <title>thla</title>
      </Head>
      <NavBar />
      <Container>
        <h1 className="text-center font-sans text-lg mb-8">
          {result.data?.data.title}
        </h1>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.js">
          <div style={{ height: "750px" }}>
            {result.isSuccess ? (
              <Viewer
                httpHeaders={{ "Access-Control-Allow-Origin": "*" }}
                fileUrl={result.data?.data.pdf_link}
                plugins={[defaultLayoutPluginInstance]}
              />
            ) : null}
          </div>
        </Worker>
      </Container>
    </>
  );
};

export default Me;
