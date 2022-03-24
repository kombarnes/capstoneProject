import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import './Box.css';
import ScrollToTop from 'react-scroll-to-top';
import { BACKEND_URL } from '../config';

const Sport = (props) => {
    return (
        <div>
          <Card style={{ width: '40rem'}}>
            <Card.Img variant="top" src={props.sport.image} className='card-images'/>
            <Card.Body>
                <Card.Title>{props.sport.title}</Card.Title>
                <Card.Text>
                    {props.sport.text}
                </Card.Text>
             <a href={props.sport.link}>   <Button variant="primary">Go somewhere </Button></a>
            </Card.Body>
        </Card>  
        </div>
        
    )
}

export default class Sports extends Component {
    constructor(props){
        super(props) 
        this.state = {
            sports: [],
            loading: true
          }
    }
    componentDidMount() {
        axios.get(BACKEND_URL + "sports/")
          .then(response => {
            this.setState({
              sports: response.data,
              loading: false
            })
            console.log('heres the list of sports attractions')
          })
          .catch((error) => {
            console.log(error)
          })
}

sportList(){
    return this.state.sports.map((currentSport) => {
        return <Sport sport={currentSport} key={currentSport._id}/>
    })
}

render() {
    return (
      this.state.loading === false ? (

        <>

        <div id='visit-header'>
          <img src="https://m.psecn.photoshelter.com/img-get2/I0000WcZZ84jrmoo/fit=1000x750/DSC02947-Cincinnati-Skyline-Night-Panorama-Photo.jpg" id='visit-main-img' alt="" />
          <div id='visit-center'>
            <h1>Sports</h1>
          </div>
            
          </div>
        <div className='d-flex flex-wrap justify-content-around'>
            <ScrollToTop smooth />
            

          {this.sportList()}
          <div className='center'>
            <button className='btn'><Link to='/attractions'>Go Back to Attractions</Link></button>
        </div>
        </div>
        </>


      ) : (
        <div className="">loading....</div>
      )
    )
  }
}
