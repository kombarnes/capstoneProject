import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import './Box.css';
import ScrollToTop from 'react-scroll-to-top';
import { BACKEND_URL } from '../config';

const Night = (props) => {
    return (
        <div>
          <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={props.night.image} className='card-images'/>
            <Card.Body>
                <Card.Title>{props.night.title}</Card.Title>
                <Card.Text>
                    {props.night.text}
                </Card.Text>
             <a href={props.night.link}>   <Button variant="primary">Go somewhere </Button></a>
            </Card.Body>
        </Card>  
        </div>
        
    )
}

export default class Nights extends Component {
    constructor(props){
        super(props) 
        this.state = {
            nights: [],
            loading: true
          }
    }
    componentDidMount() {
        axios.get(BACKEND_URL + "night/")
          .then(response => {
            this.setState({
              nights: response.data,
              loading: false
            })
            console.log('heres the list of night attractions')
          })
          .catch((error) => {
            console.log(error)
          })
}

nightList(){
    return this.state.nights.map((currentNight) => {
        return <Night night={currentNight} key={currentNight._id}/>
    })
}

render() {
    return (
      this.state.loading === false ? (

        <>
        <div id='visit-header'>
          <img src="https://m.psecn.photoshelter.com/img-get2/I0000WcZZ84jrmoo/fit=1000x750/DSC02947-Cincinnati-Skyline-Night-Panorama-Photo.jpg" id='visit-main-img' alt="" />
          <div id='visit-center'>
            <h1>Night Life</h1>
          </div>
            
          </div>
        <div className='d-flex flex-wrap justify-content-around'>
            <ScrollToTop smooth />
            
            <ScrollToTop smooth />
          {this.nightList()}
          
        </div>
        <div className='center'>
            <button className='btn'><Link to='/attractions'>Go Back to Attractions</Link></button>
        </div>
        </>


      ) : (
        <div className="">loading....</div>
      )
    )
  }
}