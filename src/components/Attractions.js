import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Attractions = () => {

  return (
    <div>
      <h1 className="center">Visit Cincinnati!</h1>
      <br />
      <h5 className='center'>Are you on a family vacation? Maybe you just need time to get away. Our city has options for everyone! How would you like to plan your trip?</h5>
      <a href='#restaurants'><h4>Restaurants</h4></a>
      <a href='#arts'><h4>Arts/Music</h4></a>
      <a href='#sports'><h4>Sports</h4></a>
      <a href='#themeparks'><h4>Amusements/Theme Parks</h4></a>
      <a href='#nightlife'><h4>Night Life</h4></a>
      <a id='restaurants'><h1 className='center'>Restaurants</h1></a>
      <a id='arts'><h1 className='center'>Arts/Music</h1></a>
      <a id='sports'><h1 className='center'>Sports</h1></a>
      <a id='themeparks'><h1 className='center'>Amusements/Theme Parks</h1></a>
      <a id='nightlife'><h1 className='center'>Night Life</h1></a>
    </div>
  )
}

export default Attractions