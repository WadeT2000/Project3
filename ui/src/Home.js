import { Card } from 'primereact/card';
import DestinationCard from './components/DestinationCard';
import { useState, useEffect } from 'react';
import {Dropdown} from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';

function DropdownList() { 
  const citiesServer = 'http://localhost:8080/cities';
  const [citiesData, setCitiesData] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const response = fetch(`${citiesServer}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setCitiesData(res);
      })
      .catch((error) => {
        console.log(error);
        return 'Error Connecting to the Server';
      })
  }, []);

//  const [selectedValue, setSelectedValue] = useState('Option 1'); 
//  const handleChange = (event) => {
//  setSelectedValue(event.target.value);
//  };

 const handleCityChange = (e) => {
  setSelectedCity(e.value);
  if (e.value) {
    navigate(`/destination/${e.value.id}`);
  }
};


 return (
  <div>
    <h1>Select your Destination</h1>
    {citiesData.length > 0 ? (
      <Dropdown 
        value={selectedCity} 
        onChange={handleCityChange} 
        options={citiesData} 
        optionLabel="name" 
        placeholder="Select a City" 
        className="w-full md:w-14rem" 
      />
    ) : (
      <p>Looking for your "perfect" destination...</p>
    )}
  </div>
);
}
export default DropdownList;
