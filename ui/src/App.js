import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home.js';
import Footer from './Footer.js';
import Header from './Header.js';
import LoginPage from './LoginPage.js';
import { PrimeReactProvider } from 'primereact/api';
import DestinationPage from './DestinationPage.js';
import Cookies from 'js-cookie';
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import DetailsPage from './DetailsPage.js';


export const AuthContext = React.createContext();

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      setAuth(true);
    }
  }, []);

  return (
    <Router>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <PrimeReactProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={auth ? <Home /> : <Navigate to="/" />} />
            <Route path="/destination/:cityId" element={auth ? <DestinationPage /> : <Navigate to="/" />} />
            <Route path="/details" element={auth ? <DetailsPage /> : <Navigate to="/" />} />
          </Routes>
          <Footer />
        </PrimeReactProvider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;