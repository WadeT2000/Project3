import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownList from './DropdownList';
import Cookies from 'js-cookie';
import { LogoutButton } from './NavigationButton';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get('auth_token');
      if (!token) {
        navigate('/');
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div className='homeDiv'>
      <div className='buttonContainer'>
      <div></div>
      <LogoutButton />
      </div>
      
      <div className='dropDownDiv'>
      <h1> 2"BDB Travel</h1>
      <DropdownList style='justify-content-center'/>
      </div>
    </div>
  );
};

export default Home;