import React, { } from 'react'
import "./about.css"







const About = () => {
  return (
    <div>


      <h1 className="center">👑The Queen City known as Cincinnati👑</h1>



      <img className="jumbo" src="https://www.tpl.org/sites/default/files/8_2021_Cincinnati-Ohio_header.jpg" alt="" />



      <div className="container">
        <div className="row">

          <div className="col-9 ">



            <a type="" class=" " data-toggle="modal" href="#exampleModal" data-target='#exampleModal'>
              <img className="img1" src="https://www.artworkscincinnati.org/media/Miami_and_Erie_Canal_slide.jpg" alt="" />
            </a>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Birth</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <h2>CIncinnati, Ohio known as the queen city. Was chartered as a town on January 1st, 1802.</h2>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Button trigger modal --> */}
            <a type="" class=" " data-toggle="modal" href="#exampleModal" data-target='#exampleModal'>
              <img className="img2" src="https://www.mobleyreporting.com/wp-content/uploads/2019/06/What-To-Do-When-Visiting-Cincinnati-OH.jpg" alt="" />
            </a>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">The Queen</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <h3>In 1820 Cincinnati locals began the "queen city" nickname,  in reference to the culture, arts, and civilization the city offered in the midst of the wildness of the emerging West.</h3>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Button trigger modal --> */}
            <a type="" class=" " data-toggle="modal" href="#exampleModal" data-target='#exampleModal'>
              <img className="img3" src="https://freedomcenter.org/wp-content/uploads/2020/07/JM8_2733a.jpg" alt="" />
            </a>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Underground railroad</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <h2>Cincinnati had a significant role in the underground railroad, as thousands of slaves escaped to freedom by crossing the Ohio River from the southern slave states.</h2>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Button trigger modal --> */}
            <a type="" class=" " data-toggle="modal" href="#exampleModal" data-target='#exampleModal'>
              <img className="img4" src="https://local12.com/resources/media2/16x9/full/1015/center/80/4a99ffba-361f-4939-8fea-fb37ef31bac4-large16x9_frozen4.PNG" alt="" />
            </a>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Freezer Bowl</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <h2>Cincinnati Bengals hosted the freezer bowl in 1981. For the Afc chapmionship game the tempertures where -9 degrees and the wind chill made it feel like a mind numbing -59 degrees. </h2>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>






          </div>
          <div className="col-3">

          </div>
        </div>
      </div>
    </div>


  )
}

export default About