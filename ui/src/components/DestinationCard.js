import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Preferences from './Preferences';
import { useContext } from 'react';
import { ActivitiesContext } from '../DestinationPage';
import DetailsPage from '../DetailsPage';
import { useNavigate } from 'react-router-dom';



const DestinationCard = ({ destination, activities }) => {
  const navigate = useNavigate();
  console.log(activities)

  const buttonStyle = {
    flex: 1,
    minWidth: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '0.875rem',
    padding: '0.5rem',
  };

  const handleClick = (id, src, activity) => {
    navigate(`/details/${id}`, { 
      state: { imgSrc: src }
    });
  }

  const {filteredActivities, setFilteredActivities} = useContext(ActivitiesContext);


  return (
    <>
      <h3>{destination.name}</h3>
      <div className="flex flex-wrap column-gap-4 row-gap-6 justify-content-center m-2">
      {filteredActivities.map((activity, index) => (
        
        <Card 
          key={index}
          title={activity.name}
          header={<img 
            alt={activity.name} 
            src={process.env.PUBLIC_URL + activity.photo}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />}
          footer={(
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', gap: '0.5rem' }}>
              <Button 
                onClick={()=>handleClick(activity.id, activity.photo, activity)}
                className="p-button destination-button"
                label="View Details" 
                icon="pi pi-info-circle" 
                style={buttonStyle}
              />
            </div>
          )}
          style={{ width: '400px', boxShadow: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)' }}
        >
          <div className="m-0">
            <ul className="pl-2 ml-2">
              <li>{activity.description}</li>
            </ul>
          </div>
        </Card>
      ))}
      </div>
    </>
  );
};

export default DestinationCard;
