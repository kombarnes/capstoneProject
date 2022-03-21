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
        {image: 'https://www.bakersfieldtacos.com/images/home-gallery-1.jpg', title: 'Bakersfield', text: '1213 Vine St Cincinnati, OH 45202', link: 'https://www.bakersfieldtacos.com/'},
        {image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/d3/cc/fd/20151222-124145-largejpg.jpg', title: "Ollie's Trolley", text: '1607 Central Ave Cincinnati, OH 45214', link: 'https://www.facebook.com/OlliesTrolleyCincinnati/'},
        {image: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/3e/df/1d/fish-and-chips-cod-dinner.jpg', title: 'Alabama Fish Bar', text: '1601 Race St Cincinnati, OH 45202', link: 'https://m.facebook.com/ALABAMAFISHBAR/?ref=external%3Awww.google.com&__nodl'},
        {image: 'https://images.squarespace-cdn.com/content/v1/54a5a0dbe4b010b9ae242583/1420163479729-GIHJJVWD372JSTI4MU3L/image-asset.jpeg', title: 'Iris Bookcafe', text: '1331 Main St Cincinnati, OH 45202', link: 'https://www.irisbookcafeotr.com/'},
        {image: 'https://ewscripps.brightspotcdn.com/d0/64/3e6cfa124ab9bfc76017d5e5b85b/screen-shot-2019-08-19-at-10.46.21%20AM.png', title: 'Agave & Rye', text: '3825 Edwards Rd Cincinnati, OH 45209', link: 'https://agaveandrye.com/'},
        {image: 'https://cincinnatiusa.com/sites/default/files/styles/Array/public/Rotator/Camp_Washington_Chili_3_way_Teri%20Studios.jpg', title: 'Camp Washington Chili', text: '3005 Colerain Ave Cincinnati, OH 45225', link: 'https://campwashingtonchili.com/'},
        {image: 'https://s3-media0.fl.yelpcdn.com/bphoto/nvIz7WOygxI01qoYkZoWcA/l.jpg', title: 'Montgomery Inn Boathouse on the River', text: '925 Riverside Drive Cincinnati, OH 45202', link: 'https://www.montgomeryinn.com/location/montgomery-inn-the-boathouse/'},
        {image: 'https://www.gannett-cdn.com/-mm-/0a108c57f7a2394fa6da315a89b3d9b4874b327b/c=0-109-500-391/local/-/media/Cincinnati/promo/2014/08/04/1407159490000-bbq500.jpg', title: "Eli's BBQ", text: '3313 Riverside Dr Cincinnati, OH 45226', link: 'https://www.elisbarbeque.com/'},
        {image: 'https://media.bizj.us/view/img/10770666/sleepy-bee-17*1200xx1800-1013-0-94.jpg', title: 'Sleepy Bee Cafe', text: '3098 Madison Rd Cincinnati, OH 45209', link: 'https://www.sleepybeecafe.com/'},
        {image: 'https://www.larosas.com/images/coupons/555Coupon.jpg', title: "Larosa's Family Pizzeria", text: '1250 W. 8th St Cincinnati, OH 45203', link: 'https://www.larosas.com/'},
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
        <img src="https://foodanddine.com/wp-content/uploads/2021/02/Agave-and-Rye-birria-grilled-street-tacos.jpg" id='visit-main-img' alt="" />
        <div id='attraction-center'>
           <h1>Food/Drinks</h1> 
        </div>
            
        </div>
        <div className="box" >
            <div className='grid'>{cardInfo.map(renderCard)}</div>  
        </div>
          
        <div className='center'>
            <button className='btn'><a href="/attractions">Go Back to Attractions</a></button>
        </div>
        </>
        
    )
};


export default Food