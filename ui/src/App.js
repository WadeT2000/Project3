import './App.css';
import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home.js';
import Footer from './Footer.js';
import Header from './Header.js';
import LoginPage from './LoginPage.js';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { useState } from 'react';
import DestinationPage from './DestinationPage.js';

import "primereact/resources/themes/lara-light-cyan/theme.css";

export const AuthContext = React.createContext();

function App() {
  const [ auth, setAuth ] = useState(false);
  return (
    <Router>
      <AuthContext.Provider value={ {auth, setAuth} }>
      <PrimeReactProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination/:cityId" element={<DestinationPage />} />
        </Routes>
        <Footer />
      </PrimeReactProvider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
