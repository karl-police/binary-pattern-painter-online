// This has a bit of a different setup, compared to actual React

import React from "react";

import Head from "next/head";

import Header from "../Components/Header";

import "../css/main.css"

function AppRoot({Component, pageProps}) {
  return(<>

      <Head>
        <title>Binary Pattern Editor</title>
      </Head>

      <Header></Header>

      <Component {...pageProps} />

  </>)
}


export default AppRoot;