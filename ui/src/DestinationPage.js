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
        setCityData(data);
        //setActivities(data.activities || []);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchCityData();
  }, [cityId]);

  if (!cityData) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   const fetchActivities = async () => {
  //     try {
  //       const citiesPull = await fetch('') <= API HERE
  //       const cities = await citiesPull.json();

          // return{
          //   name: city.name,
            
          // }
  //     }
  //   }
  // })

  const destinations = [
    {
      name: "Paris",
      country: "France",
      region: "Europe",
      description: "The City of Light, known for its art, cuisine, and iconic landmarks.",
      activities: ["Visit the Eiffel Tower", "Explore the Louvre", "Stroll along the Seine"],
      imageUrl: "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_640.jpg"
    },
    {
      name: "Bali",
      country: "Indonesia",
      region: "Southeast Asia",
      description: "A tropical paradise with beautiful beaches and rich culture.",
      activities: ["Relax on the beaches", "Visit ancient temples", "Try surfing"],
      imageUrl: "https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg"
    }
  ];
  
  return (
    <div className='homePage'>
       <h1>Home</h1>
          <div className="flex flex-wrap">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={index}
              destination={destination}
              activities={destination.activities}
            />
          ))}
          </div>
    </div>
  )
}

export default DestinationPage;