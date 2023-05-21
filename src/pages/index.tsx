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
          {/* <img
            className="w-full h-full object-cover bg-auto bg-no-repeat bg-center bg-gradient-to-t"
            src="https://www.utoronto.ca/sites/default/files/media/banner/qs-rankings-2023-1.jpg"
            alt=""
          /> */}

          <div className="h-screen w-full flex overflow-hidden select-none">
            <nav className="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">
              <div>
                <svg
                  className="h-8 w-8 fill-current text-blue-600 dark:text-blue-300"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82
					6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12
					15l5-2.73V16z"
                  ></path>
                </svg>
              </div>

              <div
                className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			dark:text-blue-500 rounded-full"
              >
                <a href="#">
                  <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7
						7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0
						003-3V10c0-5-4.03-9-9-9z"
                    ></path>
                  </svg>
                </a>
              </div>
            </nav>
            <main
              className="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200 dark:bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto"
            >
              <div className="flex flex-col capitalize text-3xl">
                <span className="font-semibold"></span>
              </div>
              <div className="flex">
                <div
                  className="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-600 rounded-lg"
                >
                  <h3
                    className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
					capitalize dark:text-gray-300"
                  >
                    <span>Evénements</span>
                    <button className="ml-2">
                      <svg
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 256 512"
                      >
                        <path
                          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"
                        ></path>
                      </svg>
                    </button>
                  </h3>

                  <div>
                    <ul className="pt-1 pb-2 px-3 overflow-y-auto">
                      <li className="mt-2">
                        <a
                          className="p-5 flex flex-col justify-between
								bg-gray-100 dark:bg-gray-200 rounded-lg"
                          href="#"
                        >
                          <div
                            className="flex items-center justify-between
									font-semibold capitalize dark:text-gray-700"
                          >
                            <span>03 juillet 2023</span>

                            <div className="flex items-center"></div>
                          </div>

                          <p
                            className="text-sm font-medium leading-snug
									text-gray-600 my-3"
                          >
                            Avis aux étudiants du cycle licence fondamentale :
                            Examens session d’Automne – Normale 2022/2023
                          </p>

                          <div className="flex justify-between">
                            <div className="flex">
                              <img
                                className="h-6 w-6 rounded-full mr-3"
                                src="https://upload.wikimedia.org/wikipedia/fr/8/8b/Ibntofail-logo.JPG"
                                alt=""
                              />
                            </div>

                            <p
                              className="text-sm font-medium leading-snug
										text-gray-600"
                            ></p>
                          </div>
                        </a>
                      </li>

                      <li className="mt-2">
                        <a
                          className="p-5 flex flex-col justify-between
  bg-gray-100 dark:bg-gray-200 rounded-lg"
                          href="#"
                        >
                          <div
                            className="flex items-center justify-between
    font-semibold capitalize dark:text-gray-700"
                          >
                            <span>02 juin 2023</span>
                          </div>

                          <p
                            className="text-sm font-medium leading-snug
    text-gray-600 my-3"
                          >
                            La résilience des systèmes agroalimentaires
                            biologiques et agro écologiques au Maroc et leur
                            impact sur la nutrition et la santé
                          </p>

                          <div className="flex justify-between">
                            <div className="flex">
                              <img
                                className="h-6 w-6 rounded-full mr-3"
                                src="https://upload.wikimedia.org/wikipedia/fr/8/8b/Ibntofail-logo.JPG"
                                alt=""
                              />
                            </div>

                            <p
                              className="text-sm font-medium leading-snug
      text-gray-600"
                            ></p>
                          </div>
                        </a>
                      </li>
                      <li className="mt-2">
                        <a
                          className="p-5 flex flex-col justify-between
								bg-gray-100 dark:bg-gray-200 rounded-lg"
                          href="#"
                        >
                          <div
                            className="flex items-center justify-between
									font-semibold capitalize dark:text-gray-700"
                          >
                            <span>27 mai 2023</span>
                          </div>

                          <p
                            className="text-sm font-medium leading-snug
									text-gray-600 my-3"
                          >
                            Appel à Communication – Journée Internationale
                            d’Analyse Fonctionnelle
                          </p>

                          <div className="flex justify-between">
                            <div className="flex">
                              <img
                                className="h-6 w-6 rounded-full mr-3"
                                src="https://upload.wikimedia.org/wikipedia/fr/8/8b/Ibntofail-logo.JPG"
                                alt=""
                              />
                            </div>

                            <p
                              className="text-sm font-medium leading-snug
										text-gray-600"
                            ></p>
                          </div>
                        </a>
                      </li>

                      <li className="mt-2">
                        <a
                          className="p-5 flex flex-col justify-between
								bg-gray-100 dark:bg-gray-200 rounded-lg"
                          href="#"
                        >
                          <div
                            className="flex items-center justify-between
									font-semibold capitalize dark:text-gray-700"
                          >
                            <span>25 mai 2023</span>
                          </div>

                          <p
                            className="text-sm font-medium leading-snug
									text-gray-600 my-3"
                          >
                            Appel à candidatures pour les bourses de mobilité
                            Université Libre de Bruxelles / ARES
                          </p>

                          <div className="flex justify-between">
                            <div className="flex">
                              <img
                                className="h-6 w-6 rounded-full mr-3"
                                src="https://upload.wikimedia.org/wikipedia/fr/8/8b/Ibntofail-logo.JPG"
                                alt="Issue"
                              />
                            </div>

                            <p
                              className="text-sm font-medium leading-snug
										text-gray-600"
                            ></p>
                          </div>
                        </a>
                      </li>
                    </ul>

                    <a
                      href="#"
                      className="flex justify-center capitalize text-blue-500
						dark:text-blue-200"
                    >
                      <span>voir plus</span>
                    </a>
                  </div>
                </div>

                <div
                  className="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col
				bg-indigo-900 text-white"
                >
                  <h3
                    className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
					capitalize"
                  ></h3>

                  <div className="flex flex-col items-center mt-12">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=" empty schedule"
                    />

                    <span className="font-bold mt-8">
                      faculte des science kenitra
                    </span>
                  </div>
                  <div className="flex flex-col items-center mt-12">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJ0Hkxityadmj20YFSSbTh3mA2vre65d44w&usqp=CAU"
                      alt=" empty schedule"
                    />

                    <span className="font-bold mt-8">
                      Bibliothèque Universitaire
                    </span>
                  </div>
                  <div className="flex flex-col items-center mt-12">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPN4KyCjKNpVhyQC9_9i4g6DIH407zN8nxA&usqp=CAU"
                      alt=" empty schedule"
                    />

                    <span className="font-bold mt-8">Complex Sportif</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
