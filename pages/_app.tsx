import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Raleway, Inter, Roboto_Mono, Rubik, Manrope, Cabin } from '@next/font/google';
import MainLayout from '@/components/layouts/MainLayout';

const inter = Inter({
  variable: '--font-inter',
});

const roboto = Roboto_Mono({
  // variable: "--font-roboto",
  subsets: ['latin'],
});

const rubik = Rubik();

const manrope = Manrope();

const cabin = Cabin();

const raleway = Raleway();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-roboto: ${roboto.style.fontFamily};
            --font-rubik: ${rubik.style.fontFamily};
            --font-manrope: ${manrope.style.fontFamily};
            --font-cabin: ${cabin.style.fontFamily};
            --font-inter: ${inter.style.fontFamily};
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
