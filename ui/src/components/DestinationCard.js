import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const DestinationCard = ({ destination, activities }) => {
  const header = (
    <img 
      alt={destination.name} 
      src={destination.imageUrl} 
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

  return (
    <Card 
      title={destination.name}
      subTitle={`${destination.country}, ${destination.region}`}
      header={header}
      footer={footer}
      className="m-2"
      style={{ width: '400px', boxShadow: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)' }}
    >
      <div className="m-0">
        <p>{destination.description}</p>
        <h4>Top Activities:</h4>
        <ul className="pl-2 ml-2">
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default DestinationCard;