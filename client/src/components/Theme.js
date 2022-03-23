import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Box.css';
import ScrollToTop from 'react-scroll-to-top';

const Theme = () => {
    const cardInfo = [
        {image: 'https://www.gannett-cdn.com/presto/2019/06/16/PCIN/596b2aa6-5797-49aa-9315-60a7b5c0cc7c-6-15_GrandCarnival1.jpg?crop=6015,3372,x0,y0&width=660&height=372&format=pjpg&auto=webp', title: 'Kings Island', text: '6300 Kings Island Dr Mason, OH 45040', link: 'https://www.visitkingsisland.com/'},
        {image: 'https://atlas-assets.roadtrippers.com/uploads/place_image/image/15661711/-strip_-quality_60_-interlace_Plane_-resize_640x360_U__-gravity_center_-extent_640x360/place_image-image-9d53cc56-2bd8-4768-b2f9-cc615a78a667.jpg', title: 'Coney Island Park', text: '6201 Kellog Ave Cincinnati, OH 45230', link: 'https://coneyislandpark.com/'},
        {image: 'https://bora.co/wp-content/uploads/2015/11/bora_nurfc_07.jpg', title: 'National Underground Railroad Freedom Center', text: '50 E Freedom Way Cincinnati, OH 45202', link: 'https://freedomcenter.org/'},
        {image: 'https://cloudfront-us-east-1.images.arcpublishing.com/cmg/SKJXZZRKV5E5RAPRDBEIMIMXQ4.jpg', title: 'Cincinnati Zoo & Botanical Garder', text: '3400 Vine St Cincinnati, OH 45220', link: 'https://cincinnatizoo.org/'},
        {image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/krohn-conservatory-paul-lindner.jpg', title: 'Krohn Conservatory', text: '1501 Eden Park Dr Cincinnati, OH 45202', link: 'https://www.cincinnati-oh.gov/cincyparks/visit-a-park/find-a-parkfacility/krohn-conservatory/'},
        {image: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/northkentucky/Shark_Tunnel3_Copy_6b558b59-d150-48e7-9baf-93b455b0c177.jpg', title: 'Newport Aquarium', text: '1 Levee Wat Newport, KY 41071', link: 'https://www.newportaquarium.com/'},
        {image: 'https://pictures.dealer.com/f/fullercincinnatifordfd/0712/f22d319eea0d2e1a606dbf781be85b88x.jpg?impolicy=downsize&w=568', title: 'Cincinnati Observatory', text: '3489 Observatory Pl Cincinnati, OH 45208', link: 'https://www.cincinnatiobservatory.org/home/'},
        {image: 'https://remigerdesign.com/wp-content/uploads/2019/11/Science-Center-OMNIMAX-Theater.jpg', title: 'Omnimax Theater', text: '1301 Western Ave Cincinnati, OH 45203', link: 'https://www.cincymuseum.org/omnimax/'},
        {image: 'https://365cincinnati.com/wp-content/uploads/2012/05/front-room.jpg', title: 'American Sign Museum', text: '1330 Monmouth Ave Cincinnati, OH 45225', link: 'americansignmuseum.org'},
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
        <div id='visit-header'>
        <img src="https://gray-wtap-prod.cdn.arcpublishing.com/resizer/7BDEOgirvfCjSb3kpkus9Uumz0Q=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/ZVLW7O72XZGBZCGOA2APSD2E3U.jpg" id='visit-main-img' alt="" />
        <div id='attraction-center'>
            <h1>Amusements & Theme Parks</h1>
        </div>
            
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


export default Theme