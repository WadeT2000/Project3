//import { Card } from 'primereact/card';
import DestinationCard from './components/DestinationCard';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import Preferences from './components/Preferences';
import BackButton, { LogoutButton } from './NavigationButton';

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
        console.log(data);
        setActivities(data.activities);
        setFilteredActivities(data.activities);
        console.log(data.activities)
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
      <div className='buttonContainer'>
      <BackButton /> <LogoutButton />
      </div>
          <ActivitiesContext.Provider value={{activities, filteredActivities, setFilteredActivities}}>
          <Preferences destination={cityData} />
          {filteredActivities.length > 0 ? (
            <DestinationCard 
              destination={cityData}
              activities={filteredActivities}
            />
          ) : (
            <p>Your "perfect" destination doesn't exist... You're too needy!</p>
          )}
          </ActivitiesContext.Provider>
    </div>
  )

}

export default DestinationPage;