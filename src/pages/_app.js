// This has a bit of a different setup, compared to actual React

import React from "react";

import Head from "next/head";

import Header from "../Components/Header";

import "../styles/main.css"

function AppRoot({Component, pageProps}) {
  return(<>
    <html lang="en">
      <Head>
        <title>Binary Pattern Editor</title>
      </Head>

      <Header></Header>

      <Component {...pageProps} />
    </html>
  </>)
}


export default AppRoot;