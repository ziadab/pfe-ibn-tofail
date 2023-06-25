import Head from "next/head";
// import { Inter } from "next/font/google";
import { NavBar } from "@/components";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ibn Tofail University</title>
        {}
      </Head>
      <NavBar />
      <div className="h-[calc(100vh_-_64px)] w-full flex justify-center items-center">
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

          <div className="flex-grow text-gray-800">
            <main className="p-6 sm:p-10 space-y-6">
              <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="flex items-center p-8 bg-primary shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-white-600 text-white rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                      </svg>
                    </svg>
                  </div>
                  <div>
                    <span className="text-white block text-2xl font-bold">
                      11384
                    </span>
                    <span className="text-white block ">Etudiants</span>
                  </div>
                </div>
                <div className="bg-primary flex items-center p-8 text-primary shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-white-600 text-white rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </svg>
                  </div>
                  <div>
                    <span className="text-white block text-2xl font-bold">
                      234
                    </span>
                    <span className="text-white block 0C2F9C">Enseignants</span>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-primary shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-white-600 text-white rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                      </svg>
                    </svg>
                  </div>
                  <div>
                    <span className="text-white inline-block text-2xl font-bold">
                      82
                    </span>

                    <span className="text-white block">Administratifs</span>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-primary shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-white-600 text-white rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                    </svg>
                  </div>
                  <div>
                    <span className="text-white block text-2xl font-bold">
                      8
                    </span>
                    <span className="text-white block 0C2F9C">Departement</span>
                  </div>
                </div>
              </section>
              <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
                {/* <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                L'université Ibn Tofaïl est une université publique marocaine située à Kénitra. Elle a plus de 85.000 étudiants, 620 enseignants et 11 établissements. 
                Elle est classée 94ᵉ dans le classement régional 2016 des universités arabes.
                </div> */}

                <div className="row-span-3 bg-gray-950 shadow rounded-lg text-white">
                  <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                    <span>Etablissements</span>
                  </div>
                  <div className="overflow-y-auto">
                    <ul className="p-6 space-y-6">
                      <li className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden"></div>
                        <span className="text-white">
                          Faculté des Langues des Lettres et des Arts
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden"></div>
                        <span className="text-white">
                          Faculté des Sciences Humaines et Sociales
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden"></div>
                        <span className="text-white">
                          Faculté d’Economie et de Gestion
                        </span>
                      </li>

                      <li className="flex items-center">
                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden"></div>
                        <span className="text-white">
                          Institut des Métiers de Sport
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
                  <div className="p-2 flex-grow">
                    <img
                      src="https://fs.uit.ac.ma/wp-content/uploads/2022/05/nvlle-administration-scaled.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" h-16 flex items-center p-8 bg-primary shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-white rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </svg>
                  </div>
                  <div>
                    <span className="text-white block text-2xl font-bold">
                      (+212) 5 37 32 94 00
                    </span>
                  </div>
                </div>
                <div className="h-16 flex items-center p-8 bg-primary shadow rounded-lg">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-white rounded-full mr-6">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                      </svg>
                    </svg>
                  </div>
                  <div>
                    <span className="text-white block text-2xl font-bold">
                      contact.fsk@uit.ac.ma
                    </span>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
