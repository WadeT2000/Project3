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
  const [messages, setMessages] = useState([]);
  

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
        // setActivities(data.activities);
        // setFilteredActivities(data.activities);

        const preferenceMessages = [];
        const preferences = filteredDetails[0];

        if (preferences.beach) preferenceMessages.push("The ocean is within walking distance from here. HEAVY shark infestation.");
        if (preferences.mountain) preferenceMessages.push("There are plenty of places to get lost in the Mountains. Watch out for the cannibals'.");
        if (preferences.forest) preferenceMessages.push("The forest has eyes... don't stay too long.");
        if (preferences.downtown) preferenceMessages.push("Downtown has a plethora of restaurants to take your money! If the homeless don't first.");
        if (preferences.countryside) preferenceMessages.push("If you don't like the smell of cow and horse, stay away from the country.");
        if (preferences.suburbia) preferenceMessages.push("The suburbs are a great place to raise a family! Everyone here is a TikTok or Instagram influencer. Ugh.");
        if (preferences.meal) preferenceMessages.push('The food here is voted "Best in the World!" Seems to be a copy and paste. But they have food.');
        if (preferences.entertainment) preferenceMessages.push("The entertainment here is like Vegas. Use your imagination.");
        if (preferences.social) preferenceMessages.push("The people here are so friendly. Just be wary when they're sober.");
        if (preferences.before_sunrise) preferenceMessages.push("Best place to watch the sun rise! Don't look directly at it.");
        if (preferences.late_morning) preferenceMessages.push("Sunrise here sucks. Best place to sleep in a bit longer.");
        if (preferences.noon) preferenceMessages.push("I mean... it's noon here I guess.");
        if (preferences.afternoon) preferenceMessages.push("It's like noon... but after.");
        if (preferences.evening) preferenceMessages.push("Watching the sun set over this town is the best in the world. Just don't be out too long after dark.");
        if (preferences.night) preferenceMessages.push("The nightlife here is unbelievable. Strap up though.");
  
        
        setMessages(preferenceMessages);

      } catch (error) {
        console.error('Error fetching activity data:', error);
      }
    };

    fetchActivityData();
  }, [id]);

  return (

    <div >
      <BackButton /> <LogoutButton />
      <div className='detailDiv'>
      <h1>Details</h1>
      {activityDetails ? (
        <Card 
        title={activityDetails.activity_name}
        subTitle={'$'+ activityDetails.price}
        header={<img 
          alt='img'
          src={process.env.PUBLIC_URL + imgSrc}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />}
        style={{ width: '400px', boxShadow: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)' }}
      >
        {messages.map((message, index) =>(
          <p key={index}>{message}</p>
        ))}
        <content>
          <b>Address:</b> {activityDetails.address}<br/>
          <b>Participants:</b> {activityDetails.participants} <br/>
          {/* Restrictions: {activityDetails.restrictions} <br/> */}
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


