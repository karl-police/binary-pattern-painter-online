// This has a bit of a different setup, compared to actual React

import React from "react";

import Header from "../Components/Header";

function AppRoot({Component, pageProps}) {
  return(<>
    <html lang="en">
      <head>
        <link rel="stlyesheet" href="../css/main.css"></link>
        <title>Binary Pattern Editor</title>
      </head>

      <Header></Header>

      <Component {...pageProps} />
    </html>
  </>)
}


export default AppRoot;