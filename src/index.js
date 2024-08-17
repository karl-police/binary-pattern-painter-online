import React from "react";
import ReactDOM from "react-dom/client";

// Had to install this manually into Microsoft/TypeScript
import {Route, HashRouter, Routes} from "react-router-dom";
import {Helmet} from "react-helmet";

// CSS
import './css/main.css';


import Main_Page from "./pages/Main_Page";

//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <Helmet>
    <html lang="en"></html>
  </Helmet>

  <HashRouter>
    <Routes>
      <Route path="/" element={<Main_Page/>} />
    </Routes>
  </HashRouter>
</>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();