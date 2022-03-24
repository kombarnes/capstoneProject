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
            <Card.Img variant="top" src={props.theme.image} />
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
        <div className='d-flex flex-wrap'>
            <ScrollToTop smooth />


          {this.themeList()}
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

{/* <div id='visit-header'>
        <img src="https://gray-wtap-prod.cdn.arcpublishing.com/resizer/7BDEOgirvfCjSb3kpkus9Uumz0Q=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/ZVLW7O72XZGBZCGOA2APSD2E3U.jpg" id='visit-main-img' alt="" />
        <div id='attraction-center'>
            <h1>Amusements & Theme Parks</h1>
        </div> */}