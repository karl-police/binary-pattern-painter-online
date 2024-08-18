// This has a bit of a different setup, compared to actual React

import React from "react";
//import ReactDOM from "react-dom/client";

import {Helmet} from "react-helmet";

// CSS
import '../css/main.css';

import Header from "../Components/Header";

//const root = ReactDOM.createRoot(document.getElementById('root'));

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