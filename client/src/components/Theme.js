import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import './Box.css';
import ScrollToTop from 'react-scroll-to-top';
import { BACKEND_URL } from '../config';

const Theme = (props) => {
    return (
        <div>
          <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={props.theme.image} className='card-images' />
            <Card.Body>
                <Card.Title>{props.theme.title}</Card.Title>
                <Card.Text>
                    {props.theme.text}
                </Card.Text>
             <a href={props.theme.link}>   <Button variant="primary">Go somewhere </Button></a>
            </Card.Body>
        </Card>  
        </div>
        
    )
}

export default class Themes extends Component {
    constructor(props){
        super(props) 
        this.state = {
            themes: [],
            loading: true
          }
    }
    componentDidMount() {
        axios.get(BACKEND_URL + "theme/")
          .then(response => {
            this.setState({
              themes: response.data,
              loading: false
            })
            console.log('heres the list of theme attractions')
          })
          .catch((error) => {
            console.log(error)
          })
}

themeList(){
    return this.state.themes.map((currentTheme) => {
        return <Theme theme={currentTheme} key={currentTheme._id}/>
    })
}

render() {
    return (
      this.state.loading === false ? (
<>
<div id='visit-header'>
          <img src="https://m.psecn.photoshelter.com/img-get2/I0000WcZZ84jrmoo/fit=1000x750/DSC02947-Cincinnati-Skyline-Night-Panorama-Photo.jpg" id='visit-main-img' alt="" />
          <div id='visit-center'>
            <h1>Theme Parks</h1>
          </div>

        <div className='d-flex flex-wrap justify-content-around'>
            <ScrollToTop smooth />
            
            {this.themeList()}
          </div>
          
          
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
