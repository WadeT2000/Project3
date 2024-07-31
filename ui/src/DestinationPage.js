//import { Card } from 'primereact/card';
import DestinationCard from './components/DestinationCard';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function DestinationPage(){
  const { cityId } = useParams();
  const [cityData, setCityData] = useState(null);
//  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/cities?search=${cityId}`);
        const data = await response.json();
        console.log('Activities.length: ' + activities.length)
        setCityData(data);
        setActivities(data.activities || []);
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
          <div className="flex flex-wrap">
            
          {activities.length > 0 ? (
              <DestinationCard 
                destination={cityData}
                activities={activities}
              />
          ) : (
            <p>Looking for your "perfect" destination...</p>
          )}
          </div>
    </div>
  )
}

export default DestinationPage;