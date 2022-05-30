import React from 'react';
import Head from 'next/head';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Include 2 projects in this page."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
