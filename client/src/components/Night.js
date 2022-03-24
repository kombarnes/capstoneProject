import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Box.css';
import ScrollToTop from 'react-scroll-to-top';

const Night = () => {
    const cardInfo = [
        {image: 'https://orange-chair.com/wp-content/uploads/2021/01/S5A4233.jpg', title: 'ghost baby', text: '1314 Republic St Cincinnati, OH 45202', link: 'https://www.ghost-baby.com/'},
        {image: 'https://media2.citybeat.com/citybeat/imager/u/slideshow/11963929/nostalgiaweb_hb-14.jpg?cb=1642191333', title: 'Nostalgia Wine & Jazz Lounge', text: '1432 Vine St Cincinnati, OH 45202', link: 'https://www.instagram.com/nostalgiaotr/?hl=en'},
        {image: 'https://media2.citybeat.com/citybeat/imager/u/zoom/11980001/pinsmechanicalcoweb_hb_12.jpg?cb=1642191638', title: 'Pins Mechanical Company', text: '1124 Main St Cincinnati, OH 45202', link: 'https://www.pinsbar.com/cincinnati-1'},
        {image: 'https://images.squarespace-cdn.com/content/v1/5c7d49c1f4755a1a5bf1e97e/1553279952832-X67VIXHRFN6A5MERNNV3/484151.jpg?format=1500w', title: 'Tokyo Kitty', text: '84.51 Building, 575 Race St Cincinnati, OH 45202', link: 'https://thattokyobar.com/'},
        {image: 'https://media.bizj.us/view/img/11215399/fishbowlinterior*750xx1102-620-12-0.jpg', title: 'Fishbowl at the Banks', text: '141 E Freedom Way Cincinnati, OH 45202', link: 'https://www.fishbowlatthebanks.com/'},
        {image: 'https://cincinnatiusa.com/sites/default/files/styles/Array/public/Venues/RighteousRoom.jpg', title: 'The Righteous Room', text: '614 Walnut St Cincinnati, OH 45202', link: 'https://www.facebook.com/therighteousroom/'},
        {image: 'https://media1.citybeat.com/citybeat/imager/u/original/12073436/21c5_jilliantellep.5efe45428908c.png', title: 'Cocktail Terrace at 21c', text: '609 Walnut St Cincinnati, OH 45202', link: 'https://www.21cmuseumhotels.com/cincinnati/fooddrink/cocktail-terrace/'},
        {image: 'https://tablelistpro-assets.imgix.net/www-2/tablelist-pro/c29e1ce0-473a-11ec-b3ad-a3e41f285af7.jpg', title: 'AC Upper Deck', text: '135 Joe Nuxhall Way Cincinnati, OH 45202', link: 'https://www.acupperdeck.com/'},
        {image: 'https://c1.staticflickr.com/4/3939/34120916945_53a3011c79_z.jpg', title: 'Revel Urban Winery', text: '111 E 12th St Cincinnati, OH 45202', link: 'https://www.revelotr.com/'},
        {image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/ce/cd/6e/storefront.jpg', title: 'Goodfellas Pizzeria', text: '1211 Main St Cincinnati, OH 45202', link: 'https://www.goodfellaspizzeria.com/'},
        {image: 'https://media-exp1.licdn.com/dms/image/C4E1BAQELLAMB3fQZUw/company-background_10000/0/1639420797285?e=2147483647&v=beta&t=mt1mSbdN9-h-gRRsWxa3Vxay1S5xLNP1Pq0-DfKyVLY', title: 'Hard Rock Casino', text: '1000 Broadway St Cincinnati, OH 45202', link: 'https://www.hardrockcasinocincinnati.com/'},
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
        <div id='visit-header'>
        <img src="https://i0.wp.com/moversmakers.org/wp-content/uploads/2019/05/FEAT-summer-outdoor-salsa-on-the-square2.jpg?fit=500%2C335&ssl=1" id='visit-main-img' alt="" />
        <div id='attraction-center'>
            <h1>Night Life</h1>
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


export default Night