import type { NextPage } from "next";
import IBN_TOFAIL from "@/assets/logos/logo";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

interface LoginProps {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<LoginProps>();
  const router = useRouter();

  const onSubmit = async (data: LoginProps) => {
    // @ts-ignore
    const { ok } = await signIn("credentials", {
      redirect: false,
      ...data,
    });
    if (ok) router.replace("/");
  };

  return (
    <>
      <Head>
        <title>login</title>
      </Head>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Pattern"
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="w-full">
              <Link className="block text-blue-600" href="/">
                <span className="sr-only">Home</span>
                <IBN_TOFAIL />
              </Link>

              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Content de te revoir
              </h1>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    placeholder="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    {...register("email", { required: true })}
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Mot de passe
                  </label>

                  <input
                    type="password"
                    id="Password"
                    placeholder="password"
                    {...register("password", { required: true })}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Connexion
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Je n&apos;ai pas de compte?{" "}
                    <Link href="/register" className="text-gray-700 underline">
                      s&apos;authentifier
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Login;
