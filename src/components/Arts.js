import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Box.css';
import ScrollToTop from 'react-scroll-to-top';

const Arts = () => {
    const cardInfo = [
        {image: 'https://www.messer.com/wp-content/uploads/project-image_The-Andrew_J_Brady_ICON_Music_Center.jpg', title: 'The Andrew J Brady ICON Music Center', text: 'description text', link: 'https://bradymusiccenter.com/'},
        {image: 'https://www.21cmuseumhotels.com/cincinnati/wp-content/uploads/sites/3/2019/11/Capture-4-937x527.png', title: '21c Museum', text: 'description text', link: 'https://www.21cmuseumhotels.com/'},
        {image: 'https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/Lobby%20and%20Store_courtesy%20FRCH.jpg', title: 'Contemporary Arts Center', text: 'description text', link: 'https://www.contemporaryartscenter.org/'},
        {image: 'https://cincinnatiusa.com/sites/default/files/styles/Array/public/attractionphotos/Music%20Hall%20interior_%40retiro.photography.jpg', title: 'Cincinnati Music Hall', text: 'description', link: 'https://www.cincinnatiarts.org/music-hall-home'},
        {image: 'https://www.cincinnatiarts.org/assets/img/slide_aronoffcenter.jpg', title: 'Aronoff Center for the Arts', text: 'description text', link: 'cincinnatiarts.org/aronoff-center-home'},
        {image: 'http://www.cincinnatiartmuseum.org/media/30775/cam_slider.jpg', title: 'Cincinnati Art Museum', text: 'description text', link: 'https://www.cincinnatiartmuseum.org/'},
        {image: 'https://atlas-assets.roadtrippers.com/uploads/place_image/image/18971306/-strip_-quality_60_-interlace_Plane_-resize_640x360_U__-gravity_center_-extent_640x360/place_image-image-ac824aaa-b420-4a16-8229-558c8658655c.jpg', title: 'Pendleton Art Center', text: 'description text', link: 'https://pendletonartcenter.com/'},
        {image: 'https://media1.citybeat.com/citybeat/imager/u/r-big16x10/12499491/taft_museum_of_art_exterior_photo_kevin_j_watkins.611d32ee47588.png?cb=1642196762', title: 'Taft Museum of Art', text: 'description text', link: 'https://www.taftmuseum.org/'},
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
        <div className='attraction-header' id='arts-header'>
            <h1>Arts & Music</h1>
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


export default Arts