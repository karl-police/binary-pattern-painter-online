// This has a bit of a different setup, compared to actual React

import React from "react";

import Head from "next/head";

// CSS
import '../css/main.css';

import Header from "../Components/Header";

function AppRoot({Component, pageProps}) {
  return(<>
    <Head>
      <title>Binary Pattern Editor Online</title>
    </Head>

    <Header></Header>

    <Component {...pageProps} />
  </>)
}


export default AppRoot;