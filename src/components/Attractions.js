import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Attractions = () => {

  const cardInfo = [
    {image: '', title: 'Boomtown Biscuits & Whiskey', text: '1201 Broadway Cincinnati, OH 45202'},
    {image: '', title: 'Black Coffee lounge', text: '824 Elm St Cincinnati, OH 45202'},
    {image: '', title: 'OTR Bagel Bar', text: '107 W Elder St Cincinnati, OH 45202'},
    {image: '', title: '', text: ''},
  ];
  
  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src="holder.js/100px180"/>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              {card.text}
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
    )
  }

  return (
    <>
      <div>
        <h1 className="center">Visit Cincinnati!</h1>
        <br />
        <h5 className='center'>Are you on a family vacation? Maybe you just need time to get away. Our city has options for everyone! How would you like to plan your trip?</h5>
        <h1 className='center'>Restaurants</h1>
        
      </div>
      <div>{cardInfo.map(renderCard)}</div>
    </>
  )
}

export default Attractions