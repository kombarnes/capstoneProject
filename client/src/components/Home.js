import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import heroVideo from '../videos/cincinnati.mp4'


const Home = () => {
  return (

    
    <div>


    <div  className='center'> 

      <img id='hero-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Downtown_Cincinnati_viewed_from_Devou_Park_Cropped.jpg/1000px-Downtown_Cincinnati_viewed_from_Devou_Park_Cropped.jpg' />
      </div>

      <h4 id='title-padding' className="center">HISTORY OF CINCINNATI</h4>
 
      <div class="container-1">
    <div class="image">
      <img class="small-image" src="https://www.jaredweberphotography.com/images/xl/cincinnati-ohio-skyline-at-night.jpg"/>
    </div>
    <div class="a-paragraph">
    <blockquote>
      <h3 >From modest beginnings, Cincinnati came to be known as the "Queen City of the West.”
</h3>
      </blockquote>
    </div>
  </div>
  <div>
    <p id='history-paragraph'>Cincinnati, Ohio, U.S. Situated on the Ohio River across from Kentucky, it was first settled in 1788; the area was renamed in 1790 to honour the Society of the Cincinnati. A river port after 1811, it grew in importance with the opening of the Miami and Erie Canal in 1832. Its manufactures include transportation equipment and building materials, and it is a major inland coal port. A cultural centre, it has an orchestra, opera and ballet companies, and several notable museums. It is the seat of the University of Cincinnati, the birthplace of William Howard Taft, and the site of the Harriet Beecher Stowe House, where she lived briefly and frequently visited her family during her tenure in the city.</p>
  </div>

         <div id='header-before-attractions' className='center'> 
            <h3 className='black-text'> Now that you've learned a little about our history, take a look at the fascinating sights that Cincinnati has to offer.</h3>
         </div>
         <div>  
            <h1 id='attractions-title' className='center black-text' >Attractions</h1>
         </div>
         <div className='card-group'>
         <div className="card">
           <Link to="/food">
           <img className='card-img-top' src="https://cincinnatiusa.com/sites/default/files/styles/Array/public/Venues/56_LaRosa%27s%20Pizza_DSC_0579.JPG" alt="Card image cap" />
           </Link>
           <div className="card-body">
             <h5 className="card-title">Food & Drink</h5>
             <p className="card-text">Feeling hungry? Here are a few places to check out.</p>
           </div>
         </div>
         <div className="card">
         <Link to="/arts">

           <img className='card-img-top' src="https://www.cincymuseum.org/wp-content/uploads/2020/05/UT-1.jpg" alt="Card image cap" />
           </Link>
           <div className="card-body">
             <h5 className="card-title">Arts & Music</h5>
             <p className="card-text"> Take a look at the creative side of Cincinnati. </p>
           </div>
         </div>
         <div className="card">
         <Link to="/Sports">

           <img className='card-img-top' src="https://d3pxppq3195xue.cloudfront.net/media/images/13/01/25/Paul-BrownExterior_966x668.jpg" alt="Card image cap" />
           </Link>
           <div className="card-body">
             <h5 className="card-title ">Sports</h5>
             <p className="card-text">Home to three major teams, Cincinnati has lots to offer when it comes to sports</p>
           </div>
         </div>
         <div className="card">
         <Link to="/themeparks">

           <img className='card-img-top' src="https://d31029zd06w0t6.cloudfront.net/wp-content/uploads/sites/28/2020/06/Kings-Island.jpg" alt="Card image cap" />
           </Link>
           <div className="card-body">
             <h5 className="card-title">Amusement Parks</h5>
             <p className="card-text">Looking for fun? Check out Cincinnati's amusement & theme parks!</p>
           </div>
         </div>
         <div className="card">
         <Link to="/nightlife">

           <img className='card-img-top' src="https://www.gannett-cdn.com/presto/2019/10/11/PCIN/93a801a0-6279-4056-8994-581d7d6a444e-BLINK2019_MV_0001.JPG?crop=3899,2193,x1,y0&width=660&height=372&format=pjpg&auto=webp" alt="Card image cap" />
           </Link>
           <div className="card-body">
             <h5 className="card-title">Night Life</h5>
             <p className="card-text"> By night, the party is only beginning. Take a look at the night life hotspots of Cincinnati.</p>
           </div>
         </div>

         </div>
    </div>
    
  )
}

export default Home