// This has a bit of a different setup, compared to actual React

import React from "react";

import {Helmet} from "react-helmet";

// CSS
import '../css/main.css';

import Header from "../Components/Header";

function AppRoot({Component, pageProps}) {
  return(<>
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title="Binary Pattern Editor Online"
    />

    <Header></Header>

    <Component {...pageProps} />
  </>)
}


export default AppRoot;