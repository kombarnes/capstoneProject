import React, { Component } from 'react'

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
      <h3 >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam provident praesentium, illum saepe ea odio at adipisci similique ipsum, omnis, ipsam iste odit repellat nostrum.</h3>
      </blockquote>
    </div>
  </div>
  <div>
    <p id='history-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis tenetur, deserunt neque blanditiis expedita eius explicabo omnis quo sunt suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore amet facilis at aliquid laudantium repellendus quae nostrum qui, tenetur nam optio ullam fugit itaque dolores doloribus atque ad debitis necessitatibus. Soluta suscipit odit ad labore est harum repudiandae, optio excepturi ratione cumque minus, commodi sapiente dolores quaerat perspiciatis officiis quod! Corrupti, nostrum at animi nihil beatae laudantium sunt voluptas laborum ut nam. Quam corrupti nesciunt facilis cumque quas qui consequuntur.</p>
  </div>

         <div id='header-before-attractions' className='center'> 
            <h3 className='black-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
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
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>
         <div className="card">
         <a href="/Arts">

           <img className='card-img-top' src="https://www.cincymuseum.org/wp-content/uploads/2020/05/UT-1.jpg" alt="Card image cap" />
           </a>
           <div className="card-body">
             <h5 className="card-title">Arts & Music</h5>
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>
         <div className="card">
         <Link to="/Sports">

           <img className='card-img-top' src="https://d3pxppq3195xue.cloudfront.net/media/images/13/01/25/Paul-BrownExterior_966x668.jpg" alt="Card image cap" />
           </Link>
           <div className="card-body">
             <h5 className="card-title ">Sports</h5>
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>
         <div className="card">
         <Link to="/theme">

           <img className='card-img-top' src="https://d31029zd06w0t6.cloudfront.net/wp-content/uploads/sites/28/2020/06/Kings-Island.jpg" alt="Card image cap" />
           </Link>
           <div className="card-body">
             <h5 className="card-title">Amusement Parks</h5>
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>
         <div className="card">
         <Link to="/night">

           <img className='card-img-top' src="https://www.gannett-cdn.com/presto/2019/10/11/PCIN/93a801a0-6279-4056-8994-581d7d6a444e-BLINK2019_MV_0001.JPG?crop=3899,2193,x1,y0&width=660&height=372&format=pjpg&auto=webp" alt="Card image cap" />
           </Link>
           <div className="card-body">
             <h5 className="card-title">Night Life</h5>
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>

         </div>
    </div>
    
  )
}

export default Home