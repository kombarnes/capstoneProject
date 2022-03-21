import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Box.css';
import ScrollToTop from 'react-scroll-to-top';

const Sports = () => {
    const cardInfo = [
        {image: 'https://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/paul16_top.jpg', title: 'Paul Brown Stadium', text: 'description text', link: 'https://www.bengals.com/stadium/'},
        {image: 'https://www.sportsvideo.org/new/wp-content/uploads/2021/04/TQL-Stadium-featured.jpg', title: 'TQL Stadium', text: 'description text', link: 'https://tqlstadium.com/'},
        {image: 'https://thisgreatgame.com/wp-content/uploads/2020/07/gabp-main.jpg', title: 'Great American Ballpark', text: 'description text', link: 'https://www.mlb.com/reds/ballpark'},
        {image: 'https://i0.wp.com/www.sportstravelmagazine.com/wp-content/uploads/2019/11/CincinnatiArena.jpg?fit=770%2C513&ssl=1&w=640', title: 'Heritage Bank Center', text: 'description text', link: 'https://heritagebankcenter.com/'},
        // {image: '', title: '', text: 'description text', link: ''},
    ];

    const renderCard = (card, index) =>{
        return(
            <Card style={{ width: '40rem' }} key={index}>
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>
                    <Button variant="primary" href={card.link} target='_blank'>Visit</Button>
                </Card.Body>
            </Card>
        )
    }

    return (
        <>
        <div>
            <ScrollToTop smooth />
        </div>
        <div className='attraction-header' id='sports-header'>
            <h1>Sports</h1>
        </div>
        <div className="box">
            <div className='grid'>{cardInfo.map(renderCard)}</div>  
        </div>
          
        <div className='center'>
            <button className='btn'><a href="/attractions">Go Back to Attractions</a></button>
        </div>
        </>
        
    )
};


export default Sports