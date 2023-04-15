import Head from "next/head";
import { Inter } from "next/font/google";
import { NavBar } from "@/components";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ibn Tofail University</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <NavBar />
      <div className="h-[calc(100vh_-_64px)] w-full flex justify-center items-center">
        {/* <img
          src={
            "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          }
          alt="img"
          className="object-cover w-full h-full"
        /> */}

        <div className="h-[calc(100vh_-_64px)] w-full relative">
          <img
            className="w-full h-full object-cover bg-auto bg-no-repeat bg-center bg-gradient-to-t"
            src="https://www.utoronto.ca/sites/default/files/media/banner/qs-rankings-2023-1.jpg"
            alt=""
          />
          <div className="rounded-t-lg text-white  absolute bottom-0 left-0 z-10 bg-primary -600 w-1/2 h-1/2">
            <div>
              <div className="text-2xl md:text-8xl">
                <span className="text-10xl font-black  text-white-900 dark:text-white">
                  U
                </span>
                niversité
              </div>
              <div className="text-2xl md:text-8xl">
                <span className="text-10xl font-black text-white-900 dark:text-white">
                  I
                </span>
                bn
              </div>
              <div className="text-2xl md:text-8xl">
                <span className="text-10xl font-black text-white-900 dark:text-white">
                  T
                </span>
                ofail
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
