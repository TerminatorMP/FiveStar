import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.scss';

import App from './App';
import Homepage from "./sites/Homepage/Homepage";
import Onboarding from "./sites/Onboarding/Onboarding";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anleitung" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

