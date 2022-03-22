import React, { Component } from 'react'
import "./about.css"

const About = () => {
  return (
    <div>
      <h1 className="center">👑The Queen City known as Cincinnati👑</h1>


      <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  {/* <h1 class="my-4"> */}
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>

      

      <div className="container">
      <div className="row">

    <div className="col-9 ">


          <img className="img1" src="https://www.artworkscincinnati.org/media/Miami_and_Erie_Canal_slide.jpg" alt="" />


          <img className='img2' src="https://3nwec1qd4zy21zftr339bla3-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/02_Smale-Riverfront-Park_website-1800x1196.jpg" alt="" />

          <br />

          <img className="img3" src="https://freedomcenter.org/wp-content/uploads/2020/07/JM8_2733a.jpg" alt="" />


          <img className='img4' src="https://3nwec1qd4zy21zftr339bla3-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/02_Smale-Riverfront-Park_website-1800x1196.jpg" alt="" />


        
    </div>
    <div className="col-3">

      <div className="info">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div>
      </div>
    </div>
    </div>
      </div>
      

  )
}

export default About