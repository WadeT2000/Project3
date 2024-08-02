import React from 'react';
import { Card } from 'primereact/card';
import Preferences from './Preferences';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const CityCard = () => {
  const citiesServer = 'http://localhost:8080/cities';
  const [citiesData, setCitiesData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${citiesServer}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setCitiesData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCityChange = (city_id) => {
    setSelectedCity(city_id);
    if (city_id) {
      navigate(`/destination/${city_id}`);
    }
  };

  return (
    <div className="flex flex-wrap column-gap-4 row-gap-6 justify-content-center m-2 city-card-container">
      {citiesData.length > 0 ? (
        <>
        {citiesData.map((city, index) => (
          <Card 
            key={index}
            title={city.name}
            header={<img 
              alt={city.name} 
              src={process.env.PUBLIC_URL + city.photo}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />}
            style={{ width: '400px', boxShadow: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)' }}
            onClick={()=>handleCityChange(city.id)}
          >
          </Card>
        ))}
        </>
      ) : (
        <p>Looking for your "perfect" destination...</p>
      )}
    </div>
  );

  
};

export default CityCard;
