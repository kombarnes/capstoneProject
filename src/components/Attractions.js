import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Attractions.css'
import slideshow1 from '../images/21c.png'
import slideshow2 from '../images/paul-brown.jpg'
import slideshow3 from '../images/otr.jpg'


const Attraction = (props) => {
  // display each attraction in a card or some styling, similar to the pet store 
  return (

    <div className='container'>
      <div className='card' style={{ width: '40rem' }}>
        <img className='card-img-top' src={props.attraction.imageUrl} alt="card-image" style={{ width: '100%'}} />
        <div className="card-body center">
          <h1 className='card-title'>
            {props.attraction.name}
          </h1>
          <div className="card-text">
            <p>
              {props.attraction.description}
              <br />
              {props.attraction.city}
              ,
              {props.attraction.state}
              <br />
              {props.attraction.zipcode}
            </p>
          </div>

        </div>
      </div>

    </div>


  )
}

export default class Attractions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attractions: [],
      loading: true
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/' + "Attractions/")
      .then(response => {
        this.setState({
          attractions: response.data,
          loading: false
        })
        console.log('heres the list of attractions')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  attractionList() {
    return this.state.attractions.map((currentAttraction) => {
      return <Attraction attraction={currentAttraction} key={currentAttraction._id} />
    })
  }

  render() {
    return (
      this.state.loading === false ? (
        <div>
          <div id='visit-header'>
            <h1>Visit Cincinnati</h1>
            <br />
            <h5 >Are you on a family vacation? Maybe you just need time to get away. Our city has options for everyone! How would YOU like to plan your trip?</h5>
          </div>

          <br />

          <div id='attraction-titles'>
            <h3><Link to='/food'>Food & Drinks</Link></h3>
            <h3><Link to='/arts'>Arts & Music</Link></h3>
            <h3><Link to='/sports'>Sports</Link></h3>
            <h3><Link to='/themeparks'>Amusements & Theme Parks</Link></h3>
            <h3><Link to='/nightlife'>Night Life</Link></h3>
          </div>

          <br />

          {this.attractionList()}
        </div>


      ) : (
        <div className="">loading....</div>
      )
    )
  }
}


