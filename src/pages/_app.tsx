import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";

const montserrat = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-montserrat",
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
