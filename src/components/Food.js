import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Box.css';
import ScrollToTop from 'react-scroll-to-top';

const Food = () => {
    const cardInfo = [
        {image: 'https://hungryfortheculture.com/wp-content/uploads/2020/10/Boomtown-Biscuits-and-Whiskey.jpg', title: 'Boomtown Biscuits & Whiskey', text: '1201 Broadway St Cincinnati, OH 45202', link: 'https://www.boomtownbiscuitsandwhiskey.com/'},
        {image: 'https://cincinnatirefined.com/resources/media/fa38c452-d705-4a03-a0eb-76a429e9475b-large16x9_CVIOXBlaCkCoffee2.jpg?1573101437340', title: 'blaCk Coffee lounge', text: '824 Elm St, Cincinnati, OH 45202', link: 'https://instagram.com/blackcoffeecincy?utm_medium=copy_link'},
        {image: 'https://media2.citybeat.com/citybeat/imager/u/original/12263330/117102048_10156961059301148_5716591573085613018_n.5f32b59d6a.png', title: 'Taste of Belgium', text: ' 16 West Freedom Way Cincinnati, OH 45202', link: 'https://authenticwaffle.com/'},
        {image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/bb/55/ca/it-s-a-classic-purely.jpg?w=800&h=600&s=1', title: 'Bru Burger Bar', text: '41 E 6th St Cincinnati, OH 45202', link: 'https://www.bruburgerbar.com/'},
        {image: 'https://images.otstatic.com/prod1/47100878/1/huge.jpg', title: 'The Eagle', text: '1342 Vine St Cincinnati, OH 45202', link: 'https://www.eaglerestaurant.com/'},
        {image: 'https://media1.citybeat.com/citybeat/imager/u/original/12033654/graeters.5f0cb8d0362ce.png', title: "Graeter's", text: '511 Walnut St Cincinnati, OH 45202 or 1401 Vine St Cincinnati, OH 45202', link: 'https://www.graeters.com/'},
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
        <div className='attraction-header' id='food-header'>
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