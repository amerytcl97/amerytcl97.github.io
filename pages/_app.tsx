import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto, Raleway, Inter } from "@next/font/google";
import MainLayout from "../components/layouts/MainLayout";

const inter = Inter({
  variable: "--font-inter",
});

const raleway = Raleway();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          @font-face {
            font-family: ${inter.style.fontFamily};
          }
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}
      </style>
      <MainLayout title="Portfolio - Amery">
        <Component {...pageProps} />
      </MainLayout>

    </>
  );
}
