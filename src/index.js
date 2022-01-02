import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.scss';

import App from './App';
import Homepage from "./sites/Homepage/Homepage";
import Onboarding from "./sites/Onboarding/Onboarding";
import Wiki from "./sites/Wiki/Wiki";
import WikiRacing from "./sites/Wiki/WikiRacing";
import WikiInfo from "./sites/Wiki/WikiInfo";
import WikiTasten from "./sites/Wiki/WikiTasten";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anleitung" element={<Onboarding />} />
        <Route path="/wiki" element={<Wiki />}>
          <Route path="" element={<WikiInfo />} />
          <Route path="racing" element={<WikiRacing />} />
          <Route path="hotkeys" element={<WikiTasten />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

