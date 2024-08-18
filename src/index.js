import React from "react";
import ReactDOM from "react-dom/client";


// Had to install this manually into Microsoft/TypeScript
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Helmet} from "react-helmet";

// CSS
import './css/main.css';


import Main_Page from "./pages/Main_Page";
import BinaryPatternEditorPage from "./pages/BinaryPatternEditorPage";

import Header from "./Components/Header";


//import reportWebVitals from './reportWebVitals';

// https://github.com/orgs/community/discussions/36010#discussioncomment-4205316

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <Helmet
    htmlAttributes={{
      lang: "en"
    }}
    title="Binary Pattern Editor Online"
  />

  <Header></Header>

  {/* process.env.PUBLIC_URL seems to be /binary-pattern-painter-online */}
  <BrowserRouter basename={`${"/binary-pattern-painter-online"}`}>
    <Routes>
      {/* Main page, for gh-pages "/" needed to go away */}
      <Route path="/" element={<Main_Page/>} />
      <Route path="/index" element={<Main_Page/>} />
      <Route path="/main" element={<Main_Page/>} />

      {/* Rest of the paths */}
      <Route path="/binary-pattern-editor" element={<BinaryPatternEditorPage/>}></Route>
    </Routes>
  </BrowserRouter>
</>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();