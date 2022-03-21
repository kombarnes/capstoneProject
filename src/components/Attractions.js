import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Attractions.css'
import ScrollToTop from 'react-scroll-to-top';

// const linkStyle = {
//   textDecoration: 'none',
//   color: 'white',
// }


const Attraction = (props) => {
  // display each attraction in a card or some styling, similar to the pet store 
  return (

    <div className='container'>
      <div className='card' id='new-attraction-card'>
        <img className='card-img-top' src={props.attraction.imageUrl} alt="card-image" id='new-attraction-img' />
        <div className="card-body" id='new-attraction-body'>
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
        <div>
            <ScrollToTop smooth />
        </div>
          <div id='visit-header'>
          <img src="https://m.psecn.photoshelter.com/img-get2/I0000WcZZ84jrmoo/fit=1000x750/DSC02947-Cincinnati-Skyline-Night-Panorama-Photo.jpg" id='visit-main-img' alt="" />
          <div id='attraction-center'>
            <h1>Visit Cincinnati</h1>
            <h5>Are you on a family vacation? Maybe you just need time to get away. Our city has options for everyone! How would YOU like to plan your trip?</h5>
          </div>
            
          </div>

          <br />


          <div className="container" id='visit-attractions'>

            <div id='attraction-container'>
              <Link to='/food' ><img src="https://ohiotimesnewsimages.s3.amazonaws.com/wp-content/uploads/2021/10/22081827/98040cb9-3e18-45cf-8f0c-0f6f99d8aa4b-Burger_2.jpg" alt="food-image" id='attraction-main-img' /></Link>
              <div id='attraction-center' ><h3>Food & Drinks</h3></div>
            </div>

            <br />

            <div id='attraction-container'>
              <Link to='/arts' ><img src="https://cdn2.cincinnatimagazine.com/wp-content/uploads/sites/5/2021/02/DSC_5152-190-scaled.jpg" id='attraction-main-img' alt="arts-image" /></Link>
              <div id='attraction-center'><h3>Arts & Music</h3></div>
            </div>

            <br />

            <div id='attraction-container'>
              <Link to='/sports' ><img src="https://www.gannett-cdn.com/presto/2020/09/15/PCIN/3c2b41dc-7e51-4baf-8941-65afeb523e49-091420_RedsPirates_NightGame_MV_0022.JPG" id='attraction-main-img' alt="sports-image" /></Link>
              <div id='attraction-center'><h3>Sports</h3></div>
            </div>

            <br />

            <div id='attraction-container'>
              <Link to='/themeparks' ><img src="https://atlas-assets.roadtrippers.com/uploads/place_image/image/2176463/-strip_-quality_60_-interlace_Plane_-resize_640x360_U__-gravity_center_-extent_640x360/place_image-image-653ef153-dc01-4e9e-8f0f-8f035badee40.jpg" id='attraction-main-img' alt="themes-image" /></Link>
              <div id='attraction-center'><h3>Amusements & Theme Parks</h3></div>
            </div>

            <br />

            <div id='attraction-container'>
              <Link to='/nightlife' ><img src="https://hardrockmagnets.com/blog/wp-content/uploads/2021/04/Rock-Shop-at-Hard-Rock-Casino-Cincinnati-Ohio.jpg" id='attraction-main-img' alt="night-image" /></Link>
              <div id='attraction-center'><h3>Night Life</h3></div>
            </div>

          </div>

          <div className="add-attraction">
            <h1>Add a New Attraction</h1>
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


