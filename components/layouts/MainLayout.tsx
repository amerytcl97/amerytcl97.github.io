import Head from 'next/head';
import React, { ReactElement, ReactNode } from 'react';
import Info from '../Info';
import Sidebar from '../sidebar/Sidebar';
import Footer from './Footer';
import Header from './Header';

type MainLayoutProps = {
  children: ReactElement | ReactNode;
  title?: string;
};

function MainLayout({ children, title }: MainLayoutProps) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>
      <main className="container mx-auto px-5">
        <Header />
        {/* <Sidebar /> */}
        {children}
        <Info />
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default MainLayout;
