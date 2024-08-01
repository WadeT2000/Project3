import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton, { LogoutButton } from './NavigationButton';

function DetailsPage () {
  const { activityId } = useParams();

  return (

    <div>
      <BackButton /> <LogoutButton />
      <h1>Details</h1>
    </div>
  )

}


export default DetailsPage
