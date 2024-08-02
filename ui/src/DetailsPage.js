import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import BackButton, { LogoutButton } from './NavigationButton';
import { useState, useEffect } from 'react';
import { Card } from 'primereact/card';

function DetailsPage () {
  const { id } = useParams();
  const [ activityDetails, setActivityDetails ] = useState([]);
  const location = useLocation();
  const { imgSrc } = location.state || {};
  

  useEffect( () => {
    const fetchActivityData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/activities/details`);
        const data = await response.json();
        // console.log('Activities.length: ' + activities.length)
        // setActivityDetails(data);
        let filteredDetails = data.filter((item) => {
          return item.id == id
        })
        setActivityDetails(filteredDetails[0]);
        console.log(filteredDetails[0])

      } catch (error) {
        console.error('Error fetching activity data:', error);
      }
    };

    fetchActivityData();
  }, [id]);

  return (
    <div>
      <div className='buttonContainer'>
        <BackButton /> <LogoutButton />
      </div>
      <div className='detailDiv'>
        <h1>Details</h1>
        {activityDetails ? (
          <Card 
            title={activityDetails.activity_name}
            subTitle={'$'+ activityDetails.price}
            header={
              activityDetails.activity_name === "Peterson's Public Bath House" ? (
                <iframe 
                  width="100%" 
                  height="200px" 
                  src="https://www.youtube.com/embed/Aq5WXmQQooo?autoplay=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : (
                <img 
                  alt='img'
                  src={process.env.PUBLIC_URL + imgSrc}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              )
            }
            style={{ width: '400px', boxShadow: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)' }}
          >
            <content>
              <b>Address:</b> {activityDetails.address}<br/>
              <b>Participants:</b> {activityDetails.participants} <br/>
              <b>Dress Code:</b> {activityDetails.dress_code} <br/>
              <b>Security:</b> {activityDetails.security}
            </content>
          </Card>
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  )
}

//localhost:8080/activities/details
// {
//   "id": 1,
//   "activity_name": "Wade's Home Gym",
//   "price": 1148,
//   "address": "9218 NE 38th St, Yarrow Point, WA 98004",
//   "participants": "Minimum participants: 2 \n Maximum participants: 14",
//   "family_friendly": false,
//   "restrictions": "{\"Do not feed other patrons\",\"Please keep hands and feet inside the venue at all times\",\"No fighting the inmates\"}",
//   "dress_code": "birthday suit",
//   "aquarium": false,
//   "lodging": false,
//   "event_length": 65,
//   "security": "FBI"
// },

export default DetailsPage