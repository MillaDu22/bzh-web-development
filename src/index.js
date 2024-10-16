import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from '../src/components/Navbar/index.jsx';
import Footer from "../src/components/Footer/index.jsx";
import Router from "./Router/router.jsx";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <HelmetProvider>
          <HashRouter>
            <Navbar />
            <Router />
            <Footer />
          </HashRouter>
        </HelmetProvider>
  </React.StrictMode>
);
reportWebVitals();