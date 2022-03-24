import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import './Box.css';
import ScrollToTop from 'react-scroll-to-top';
import { BACKEND_URL } from '../config';

const Art = (props) => {
    return (
        <div>
          <Card style={{ width: '40rem' }}>
            <Card.Img variant="top" src={props.art.image} />
            <Card.Body>
                <Card.Title>{props.art.title}</Card.Title>
                <Card.Text>
                    {props.art.text}
                </Card.Text>
             <a href={props.art.link}>   <Button variant="primary">Go somewhere </Button></a>
            </Card.Body>
        </Card>  
        </div>
        
    )
}

export default class Arts extends Component {
    constructor(props){
        super(props) 
        this.state = {
            arts: [],
            loading: true
          }
    }
    componentDidMount() {
        axios.get(BACKEND_URL + "art/")
          .then(response => {
            this.setState({
              arts: response.data,
              loading: false
            })
            console.log('heres the list of art attractions')
          })
          .catch((error) => {
            console.log(error)
          })
}

artList(){
    return this.state.arts.map((currentArt) => {
        return <Art art={currentArt} key={currentArt._id}/>
    })
}

render() {
    return (
      this.state.loading === false ? (
        <div className='d-flex flex-wrap'>
            <ScrollToTop smooth />
          {this.artList()}
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