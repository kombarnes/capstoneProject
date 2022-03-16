import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Attractions.css'
import slideshow1 from '../images/21c.png'
import slideshow2 from '../images/paul-brown.jpg'
import slideshow3 from '../images/otr.jpg'


const Attractions = (props) => {


  return (
    <>
          <div>
    
      <h1 className="center" id='title-padding'>Visit Cincinnati!</h1>
      <br />

      <h5 className='center intro'>Are you on a family vacation? Maybe you just need time to get away. Our city has options for everyone! How would you like to plan your trip?</h5>
    </div>
    <div>
    <h3><Link to='/food'>Food & Drinks</Link></h3>
    <h3><Link to='/arts'>Arts & Music</Link></h3>
    <h3><Link to='/sports'>Sports</Link></h3>
    <h3><Link to='/themeparks'>Amusements & Theme Parks</Link></h3>
    <h3><Link to='/nightlife'>Night Life</Link></h3>
    </div>
    </>


  )
}

export default Attractions