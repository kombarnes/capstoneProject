import axios from 'axios';
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';

const Attraction = (props) => {

  return (
      <div>
        <h1 className="center">{props.attraction.name}</h1>
        <br />
       
        <img src={props.attraction.imageUrl} alt="" />
        
      </div>
  )
}

export default class Attractions extends Component {
  constructor(props){
    super(props)
    this.state = {
      attractions:[],
      loading: true
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/' + "Attractions/")
    .then(response => {
      this.setState({
        attractions: response.data,
        loading: false
      })
      console.log('heres the list of attractions')
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  attractionList(){
    return this.state.attractions.map((currentAttraction) => {
      return <Attraction attraction = {currentAttraction} key={currentAttraction._id}/>
    })
  }

  render() {
    return (
      this.state.loading === false ? (
        <div>
       
          {this.attractionList()}
        <h5 className='center'>Are you on a family vacation? Maybe you just need time to get away. Our city has options for everyone! How would you like to plan your trip?</h5>
        <h1 className='center'>Restaurants</h1>
        </div>


      ) : (
        <div className="">loading....</div>
      )
    )
  }
}


