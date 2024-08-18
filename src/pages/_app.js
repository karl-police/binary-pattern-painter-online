import React from "react";
//import ReactDOM from "react-dom/client";

import {Helmet} from "react-helmet";

// CSS
import '../css/main.css';

import Header from "../Components/Header";

//const root = ReactDOM.createRoot(document.getElementById('root'));

function AppRoot({children}) {
  return(<>
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title="Binary Pattern Editor Online"
    />

    <Header></Header>

    {children}
  </>)
}


export default AppRoot;