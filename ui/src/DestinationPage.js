//import { Card } from 'primereact/card';
import DestinationCard from './components/DestinationCard';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import Preferences from './components/Preferences';

import "../node_modules/primeflex/primeflex.css"

export const ActivitiesContext = React.createContext();

function DestinationPage(){
  const { cityId } = useParams();
  const [cityData, setCityData] = useState(null);
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/cities?search=${cityId}`);
        const data = await response.json();
        console.log('Activities.length: ' + activities.length)
        setCityData(data);
        setActivities(data.activities);
        setFilteredActivities(data.activities);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchCityData();
  }, [cityId]);

  if (!cityData || !activities) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className='homePage'>
          <ActivitiesContext.Provider value={{activities, filteredActivities, setFilteredActivities}}>
          <Preferences destination={cityData} />
          {filteredActivities.length > 0 ? (
            <DestinationCard 
              
              destination={cityData}
              activities={filteredActivities}
            />
          ) : (
            <p>Looking for your "perfect" destination...</p>
          )}
          </ActivitiesContext.Provider>
    </div>
  )

}

//add ability to navigate back home after a destination has been selected

export default DestinationPage;