import React from 'react'; 
import { Button } from 'primereact/button';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import { useState, useContext } from 'react';
import { AuthContext } from './App';

export default function BackButton() {
  const navigate = useNavigate();
    return (
            <Button label="Back" onClick={()=> navigate(-1)}/>
    )
}

export function LogoutButton() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
      Cookies.remove('auth_token')
      setAuth(false);
      navigate('/');
  };
    return (
            <Button label="Logout" onClick={()=> handleLogout()}/>
    )
}