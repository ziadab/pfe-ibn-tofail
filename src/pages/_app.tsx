import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";

const montserrat = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-montserrat",
  preload: true,
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <main className={`${montserrat.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
