import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Box.css';
import ScrollToTop from 'react-scroll-to-top';

const Food = () => {
    const cardInfo = [
        {image: 'https://ewscripps.brightspotcdn.com/dims4/default/ee1b540/2147483647/strip/true/crop/918x516+0+21/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F7a%2F68%2Fdaf0466d41a3b88f556b4cb10b78%2Fboomtown.PNG', title: 'Boomtown Biscuits & Whiskey', text: 'description text', link: 'https://www.boomtownbiscuitsandwhiskey.com/'},
        {image: 'https://cincinnatirefined.com/resources/media/fa38c452-d705-4a03-a0eb-76a429e9475b-large16x9_CVIOXBlaCkCoffee2.jpg?1573101437340', title: 'blaCk Coffee lounge', text: 'description text', link: 'https://instagram.com/blackcoffeecincy?utm_medium=copy_link'},
        {image: 'https://365cincinnati.com/wp-content/uploads/2018/03/taste-of-belgium-bar-area.jpg', title: 'Taste of Belgium', text: ' description text', link: 'https://authenticwaffle.com/'},
        {image: 'https://cincinnatirefined.com/resources/media/89940183-1b4b-4494-b888-95a495da9139-smallScale_CVIOXbruburger1of12.jpg?1559797545362', title: 'Bru Burger Bar', text: 'description text', link: 'https://www.bruburgerbar.com/'},
        {image: 'https://cdn2.cincinnatimagazine.com/wp-content/uploads/sites/5/2014/07/AUG14_DineReview_Eagle_store1.jpg', title: 'The Eagle', text: 'description text', link: 'https://www.eaglerestaurant.com/'},
        {image: 'https://cincinnatiusa.com/sites/default/files/styles/Array/public/Venues/Graeter%27s%20Ice%20Cream_1_Pramik.jpg', title: "Graeter's", text: 'description text', link: 'https://www.graeters.com/'},
        {image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/c1/3e/d7/photo3jpg.jpg', title: 'Bakersfield', text: 'description text', link: 'https://www.bakersfieldtacos.com/'},
        {image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/d3/cc/fd/20151222-124145-largejpg.jpg', title: "Ollie's Trolley", text: 'description text', link: 'https://www.facebook.com/OlliesTrolleyCincinnati/'},
        {image: 'https://local12.com/resources/media2/16x9/full/1015/center/80/18dcc841-0bd4-4faa-8335-53fe615cf8de-large16x9_gmcalabamafish2.PNG', title: 'Alabama Fish Bar', text: 'description text', link: 'https://m.facebook.com/ALABAMAFISHBAR/?ref=external%3Awww.google.com&__nodl'},
        {image: 'https://images.squarespace-cdn.com/content/v1/58d3ff9c4402432cd5828b0d/1490991120852-Q9HVC8T7NY39DMDM3ADV/Screen+Shot+2017-03-31+at+4.11.30+PM.png', title: 'Iris Bookcafe', text: 'description text', link: 'https://www.irisbookcafeotr.com/'},
        // {image: '', title: '', text: '', link: ''},
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
        <div className='attraction-header' id='title-padding'>
            <h1>Food/Drinks</h1>
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


export default Food