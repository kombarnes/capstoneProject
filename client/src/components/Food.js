import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import './Box.css';
import ScrollToTop from 'react-scroll-to-top';
import { BACKEND_URL } from '../config';

const Food = (props) => {
    return (
        <div>
          <Card style={{ width: '40rem'}}>
            <Card.Img variant="top" src={props.food.image} />
            <Card.Body>
                <Card.Title>{props.food.title}</Card.Title>
                <Card.Text>
                    {props.food.text}
                </Card.Text>
             <a href={props.food.link}>   <Button variant="primary">Go somewhere </Button></a>
            </Card.Body>
        </Card>  
        </div>
        
    )
}

export default class Foods extends Component {
    constructor(props){
        super(props) 
        this.state = {
            foods: [],
            loading: true
          }
    }
    componentDidMount() {
        axios.get(BACKEND_URL + "foods/")
          .then(response => {
            this.setState({
              foods: response.data,
              loading: false
            })
            console.log('heres the list of food attractions')
          })
          .catch((error) => {
            console.log(error)
          })
}

foodList(){
    return this.state.foods.map((currentFood) => {
        return <Food food={currentFood} key={currentFood._id}/>
    })
}

render() {
    return (
      this.state.loading === false ? (
        
        <div className='d-flex flex-wrap justify-content-around'>
            <ScrollToTop smooth />
            <div id='visit-header'>
          <img src="https://m.psecn.photoshelter.com/img-get2/I0000WcZZ84jrmoo/fit=1000x750/DSC02947-Cincinnati-Skyline-Night-Panorama-Photo.jpg" id='visit-main-img' alt="" />
          <div id='visit-center'>
            <h1>Visit Cincinnati</h1>
            <h5>Are you on a family vacation? Maybe you just need time to get away. Our city has options for everyone! How would YOU like to plan your trip?</h5>
          </div>
            
          </div>

          {this.foodList()}
          <div className='center'>
            <button className='btn'><Link to='/attractions'>Go Back to Attractions</Link></button>
        </div>
        </div>
        


      ) : (
        <div className="">loading....</div>
      )
    )
  }
}
