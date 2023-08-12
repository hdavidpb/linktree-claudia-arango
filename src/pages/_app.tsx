import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Open_Sans } from "next/font/google";

const poppins = Open_Sans({
  weight: ["300", "400", "600", "800"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
