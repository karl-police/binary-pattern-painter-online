// This has a bit of a different setup, compared to actual React

import React from "react";

import Head from "next/head";

// CSS
import '../css/main.css';

import Header from "../Components/Header";

function AppRoot({Component, pageProps}) {
  return(<>
    <html lang="en">
      <Head>
        <title>Binary Pattern Editor Online</title>
      </Head>

      <Header></Header>

      <Component {...pageProps} />
    </html>
  </>)
}


export default AppRoot;