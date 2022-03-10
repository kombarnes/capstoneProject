import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Attraction from '../../backend/models/attraction.model';
import Cards from './Cards'

const Attractions = () => {

  return (
    <div>
      <h1 className="center">Visit Cincinnati!</h1>
      <br />
      <h5 className='center'>Are you on a family vacation? Maybe you just need time to get away. Our city has options for everyone! How would you like to plan your trip?</h5>
      <h1 className='center'>Restaurants</h1>
      <h1 className='center'>Arts/Music</h1>
      <h1 className='center'>Sports</h1>
      <h1 className='center'>Amusements/Theme Parks</h1>
      <h1 className='center'>Night Life</h1>
    </div>
  )
}

export default Attractions