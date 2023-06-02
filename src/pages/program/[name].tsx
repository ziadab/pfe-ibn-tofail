import { NavBar } from "@/components";
import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const Me: NextPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <Head>
        <title>thla</title>
      </Head>
      <NavBar />
      <Container>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.js">
          <div style={{ height: "750px" }}>
            <Viewer
              httpHeaders={{ "Access-Control-Allow-Origin": "*" }}
              fileUrl={
                "https://firebasestorage.googleapis.com/v0/b/shen-6832a.appspot.com/o/LUS-Recovered_compressed.pdf?alt=media&token=2884a38b-181c-4ed9-b882-17da2b3c5338"
              }
              plugins={[defaultLayoutPluginInstance]}
            />
          </div>
        </Worker>
      </Container>
    </>
  );
};

export default Me;
