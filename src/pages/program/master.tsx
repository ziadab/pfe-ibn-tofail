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
            <h1 className="font-sans text-3xl ml-4">Master Professionnelles</h1>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
            <div className="flex-grow overflow-hidden h-full flex flex-col">
              <div className="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
                <div className="flex h-full text-gray-600 dark:text-gray-400">
                  <a
                    href="feg"
                    className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8"
                  >
                    Faculté Economie et de Gestion
                  </a>
                  <a
                    href="#"
                    className="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center"
                  >
                    Faculté des sciences
                  </a>
                  <a
                    href="flsh"
                    className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8"
                  >
                    Faculté des Lettres et des Sciences Humaines
                  </a>
                  <a
                    href="flla"
                    className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center"
                  >
                    Faculté des Langues,des Lettres et des Arts
                  </a>
                </div>
              </div>
              <div className="flex-grow flex overflow-x-hidden">
                <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
                  <div className="relative mt-2"></div>
                  <div className="space-y-4 mt-3">
                    <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                      <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                        Pr LAASSIRI Jalal
                      </div>
                      <div className="flex items-center w-full">
                        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">
                          laassiri@uit.ac.ma
                        </div>
                      </div>
                    </button>

                    <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                      <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                        Pr ABOUSSALEH Youssef
                      </div>
                      <div className="flex items-center w-full">
                        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-yellow-100 text-yellow-600 rounded-md">
                          youssef.aboussaleh@uit.ac.ma
                        </div>
                      </div>
                    </button>
                    <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                      <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                        Pr Abdeljalil RACHIDI
                      </div>
                      <div className="flex items-center w-full">
                        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md">
                          abdeljalil.rachidi@uit.ac.ma
                        </div>
                      </div>
                    </button>
                    <button className="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                      <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                        Pr AIT FORA Abderrahman
                      </div>
                      <div className="flex items-center w-full">
                        <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">
                          abderrahman.aitfora@uit.ac.ma
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
                  <div className="sm:p-7 p-4">
                    <div className="flex w-full items-center mb-7">
                      <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center"></div>
                    </div>

                    <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      <div className="relative group bg-indigo-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                        <img
                          className="w-20 h-20 object-cover object-center rounded-full"
                          src="https://kiffelesmaths.com/wp-content/uploads/2020/09/pexels-pixabay-270348.jpg"
                          alt="cuisine"
                        />
                        <h4 className="text-white text-2xl font-bold capitalize text-center">
                          Sciences Mathématiques et Informatique
                        </h4>
                        {/* <p className="text-white/50">55 members</p> */}
                      </div>
                      <div className="relative group bg-indigo-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                        <img
                          className="w-20 h-20 object-cover object-center rounded-full"
                          src="https://www.ip-paris.fr/sites/default/files/styles/actualite_liste/public/visual-editor/4-%20M2%20Mathematical%20modelling.jpg?h=64c01939&itok=-Uzx8vHh"
                          alt="art"
                        />
                        <h4 className="text-white text-2xl font-bold capitalize text-center">
                          Sciences Mathématiques et Applications
                        </h4>
                        {/* <p className="text-white/50">132 members</p> */}
                      </div>
                      <div className="relative group bg-indigo-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                        <img
                          className="w-20 h-20 object-cover object-center rounded-full"
                          src="https://www.radiofrance.fr/s3/cruiser-production/2020/03/786dcaef-f289-4bea-8370-8bb80fa93ee6/870x489_capture_decran_2020-03-20_a_11.51.58.jpg"
                          alt="gaming"
                        />
                        <h4 className="text-white text-2xl font-bold capitalize text-center">
                          Sciences de la Vie et de la Terre
                        </h4>
                        {/* <p className="text-white/50">207 members</p> */}
                      </div>
                      <div className="relative group bg-indigo-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                        <img
                          className="w-20 h-20 object-cover object-center rounded-full"
                          src="https://us.123rf.com/450wm/nexusplexus/nexusplexus2203/nexusplexus220300481/182891951-nanotechnologie-image-de-mod%C3%A8le-de-mol%C3%A9cule-technique-mixte.jpg?ver=6"
                          alt="cinema"
                        />
                        <h4 className="text-white text-2xl font-bold capitalize text-center">
                          Sciences de la Matière Physique
                        </h4>
                        {/* <p className="text-white/50">105 members</p> */}
                      </div>
                      <div className="relative group bg-indigo-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                        <img
                          className="w-20 h-20 object-cover object-center rounded-full"
                          src="data:image/jpeg;base64,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"
                          alt="song"
                        />
                        <h4 className="text-white text-2xl font-bold capitalize text-center">
                          Sciences de la Matière Chimie
                        </h4>
                        {/* <p className="text-white/50">67 members</p> */}
                      </div>

                      <div className="relative group bg-indigo-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                        <img
                          className="w-20 h-20 object-cover object-center rounded-full"
                          src="https://cdn0.projetecolo.com/fr/posts/5/5/4/biologie_moleculaire_definition_et_importance_455_600.jpg"
                          alt="dancing"
                        />
                        <h4 className="text-white text-2xl font-bold capitalize text-center">
                          Microbiologie appliquée et biologie moléculaire de la
                          cellule
                        </h4>
                        {/* <p className="text-white/50">108 members</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Undergraduate;
