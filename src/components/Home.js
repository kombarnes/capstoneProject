import React, { Component } from 'react'

import heroVideo from '../videos/cincinnati.mp4'


const Home = () => {
  return (

    
    <div>


    <div  className='center'> 
    <header>
      <video id="hero-video" autoplay loop>
        <source src={heroVideo} type="video/mp4" />
      </video>
    </header>
      <img id='hero-image' src='https://via.placeholder.com/1500x400' />
      </div>

      <h4 id='title-padding' className="center">HISTORY OF CINCINNATI</h4>
 
      <div class="container">
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
           <img className='card-img-top' src="https://via.placeholder.com/400x200" alt="Card image cap" />
           <div className="card-body">
             <h5 className="card-title">Card Title</h5>
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>
         <div className="card">
           <img className='card-img-top' src="https://via.placeholder.com/400x200" alt="Card image cap" />
           <div className="card-body">
             <h5 className="card-title">Card Title</h5>
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>
         <div className="card">
           <img className='card-img-top' src="https://via.placeholder.com/400x200" alt="Card image cap" />
           <div className="card-body">
             <h5 className="card-title">Card Title</h5>
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>
         <div className="card">
           <img className='card-img-top' src="https://via.placeholder.com/400x200" alt="Card image cap" />
           <div className="card-body">
             <h5 className="card-title">Card Title</h5>
             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
           </div>
         </div>

         </div>
    </div>
    
  )
}

export default Home