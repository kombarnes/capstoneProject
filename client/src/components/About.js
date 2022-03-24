import React, { } from 'react'
import "./about.css"
const About = () => {
  return (
    <div>
      <h1 className="center">:crown:The Queen City which is Cincinnati:crown:</h1>
      <img className="jumbo" src="https://www.tpl.org/sites/default/files/8_2021_Cincinnati-Ohio_header.jpg" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <a type="" className=" " data-toggle="modal" href="#exampleModal1" data-target='#exampleModal1'>
              <img className="img1" src="https://www.artworkscincinnati.org/media/Miami_and_Erie_Canal_slide.jpg" alt="" />
            </a>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel1">Birth :construction_worker:</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <h2>CIncinnati, Ohio known as the queen city. Was chartered as a town on January 1st, 1802.</h2>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Button trigger modal --> */}
            <a type="" className=" " data-toggle="modal" href="#exampleModal2" data-target='#exampleModal2'>
              <img className="img2" src="https://www.mobleyreporting.com/wp-content/uploads/2019/06/What-To-Do-When-Visiting-Cincinnati-OH.jpg" alt="" />
            </a>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">The Queen :princess:</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <h3>In 1820 Cincinnati locals began the "queen city" nickname,  in reference to the culture, arts, and civilization the city offered in the midst of the wildness of the emerging West.</h3>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Button trigger modal --> */}
            <a type="" className=" " data-toggle="modal" href="#exampleModal3" data-target='#exampleModal3'>
              <img className="img3" src="https://freedomcenter.org/wp-content/uploads/2020/07/JM8_2733a.jpg" alt="" />
            </a>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel3">Underground railroad :mostly_sunny:</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <h2>Cincinnati had a significant role in the underground railroad, as thousands of slaves escaped to freedom by crossing the Ohio River from the southern slave states.</h2>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Button trigger modal --> */}
            <a type="" className=" " data-toggle="modal" href="#exampleModal4" data-target='#exampleModal4'>
              <img className="img4" src="https://local12.com/resources/media2/16x9/full/1015/center/80/4a99ffba-361f-4939-8fea-fb37ef31bac4-large16x9_frozen4.PNG" alt="" />
            </a>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel4">Freezer Bowl :tiger2:</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <h2>Cincinnati Bengals hosted the freezer bowl in 1981. For the Afc chapmionship game the tempertures where -9 degrees and the wind chill made it feel like a mind numbing -59 degrees. </h2>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <img className="img6" src="https://1.bp.blogspot.com/-BiWKWXmmrH8/YE6tEe_9JfI/AAAAAAAA5aI/pWhWlpFPM5Yt3RTEidMhbjQAKk0nGSgPQCLcBGAsYHQ/s0/Flag_of_Ohio.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default About