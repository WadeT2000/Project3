import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';

function DropdownList() {
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

  const handleCityChange = (e) => {
    setSelectedCity(e.value);
    if (e.value) {
      navigate(`/destination/${e.value.id}`);
    }
  };

  return (
    <div >
      {citiesData.length > 0 ? (
        <Card 
          title="Select your Destination"
          style={{ width: '400px'}}
          >
            <Dropdown
              value={selectedCity}
              onChange={handleCityChange}
              options={citiesData}
              optionLabel="name"
              placeholder="Select a City"
              className="w-full md:w-14rem"
            />
        </Card>  
      ) : (
        <p>Looking for your "perfect" destination...</p>
      )}
    </div>
  );
}

export default DropdownList;