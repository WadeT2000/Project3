import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Preferences from './Preferences';
import { useContext } from 'react';
import { ActivitiesContext } from '../DestinationPage';



const DestinationCard = ({ destination, activities }) => {


  const header = (
    <img 
      alt={destination.name} 
      src={'https://picsum.photos/200/300'} 
      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
    />
  );

  const buttonStyle = {
    flex: 1,
    minWidth: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '0.875rem',
    padding: '0.5rem',
  };

  const footer = (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', gap: '0.5rem' }}>
      <Button 
        className="p-button destination-button"
        label="View Details" 
        icon="pi pi-info-circle" 
        style={buttonStyle}
      />
      <Button 
        className="p-button destination-button"
        label="Book Now" 
        icon="pi pi-info-circle"
        style={buttonStyle}
      />
    </div>
  );

  const {filteredActivities, setFilteredActivities} = useContext(ActivitiesContext);

  return (
    <>
      <h3>{destination.name}</h3>
      <div className="flex flex-wrap column-gap-4 row-gap-6 justify-content-between m-2">
      {filteredActivities.map((activity, index) => (
        <Card 
          key={index}
          title={activity.name}
          header={header}
          footer={footer}
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
