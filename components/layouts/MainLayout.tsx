import Head from "next/head";
import React, { ReactElement, ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";

type MainLayoutProps = {
  children: ReactElement | ReactNode;
  title?: string;
};

function MainLayout({ children, title }: MainLayoutProps) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>{title}</title>
      </Head>
      <main className="flex flex-row">
        <Sidebar />
        <div className="py-14 px-10 ml-[18rem]">{children}</div>
      </main>
    </div>
  );
}

export default MainLayout;
