import React from 'react'

import Portofolio1 from './img/portfolio/1.jpg'; // with import
import Portofolio2 from './img/portfolio/2.jpg'; // with import
import Portofolio3 from './img/portfolio/3.jpg'; // with import
import Portofolio4 from './img/portfolio/4.jpg'; // with import
import Portofolio5 from './img/portfolio/5.jpg'; // with import
import Portofolio6 from './img/portfolio/6.jpg'; // with import


export default function Portofolio() {
  return (
    <section>
      {/* <!-- Start portfolio Area --> */}
      <div id="portofolio" class="portfolio-area area-padding fix">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h2>Our Portfolio</h2>
              </div>
            </div>
          </div>
          <div class="row">
            {/* <!-- Start Portfolio -page --> */}
            <div class="awesome-project-1 fix">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="awesome-menu ">
                  <ul class="project-menu">
                    <li>
                      <a href="#" class="active" data-filter="*">All</a>
                    </li>
                    <li>
                      <a href="#" data-filter=".development">Development</a>
                    </li>
                    <li>
                      <a href="#" data-filter=".design">Design</a>
                    </li>
                    <li>
                      <a href="#" data-filter=".photo">Photoshop</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div class="awesome-project-content"> */}
            <div className="d-flex justify-content-center text-center">
              <div className="d-flex justify-content-space-between" style={{ flexWrap: "wrap" }}> 
                {/* <!-- single-awesome-project start --> */}
                <div class="col-md-4 col-sm-4 col-xs-12 design development">
                  <div class="single-awesome-project">
                    <div class="awesome-img">
                      <a href="#"><img src={Portofolio1} alt="" /></a>
                      <div class="add-actions text-center">
                        <div class="project-dec">
                          <a class="venobox" data-gall="myGallery" href="img/portfolio/1.jpg">
                            <h4>Business City</h4>
                            <span>Web Development</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- single-awesome-project end -->
                <!-- single-awesome-project start --> */}
                <div class="col-md-4 col-sm-4 col-xs-12 photo">
                  <div class="single-awesome-project">
                    <div class="awesome-img">
                      <a href="#"><img src={Portofolio2} alt="" /></a>
                      <div class="add-actions text-center">
                        <div class="project-dec">
                          <a class="venobox" data-gall="myGallery" href="img/portfolio/2.jpg">
                            <h4>Blue Sea</h4>
                            <span>Photosho</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- single-awesome-project end -->
                <!-- single-awesome-project start --> */}
                <div class="col-md-4 col-sm-4 col-xs-12 design">
                  <div class="single-awesome-project">
                    <div class="awesome-img">
                      <a href="#"><img src={Portofolio3} alt="" /></a>
                      <div class="add-actions text-center">
                        <div class="project-dec">
                          <a class="venobox" data-gall="myGallery" href="img/portfolio/3.jpg">
                            <h4>Beautiful Nature</h4>
                            <span>Web Design</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- single-awesome-project end -->
                <!-- single-awesome-project start --> */}
                <div class="col-md-4 col-sm-4 col-xs-12 photo development">
                  <div class="single-awesome-project">
                    <div class="awesome-img">
                      <a href="#"><img src={Portofolio4} alt="" /></a>
                      <div class="add-actions text-center">
                        <div class="project-dec">
                          <a class="venobox" data-gall="myGallery" href="img/portfolio/4.jpg">
                            <h4>Creative Team</h4>
                            <span>Web design</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- single-awesome-project end -->
                <!-- single-awesome-project start --> */}
                <div class="col-md-4 col-sm-4 col-xs-12 development">
                  <div class="single-awesome-project">
                    <div class="awesome-img">
                      <a href="#"><img src={Portofolio5} alt="" /></a>
                      <div class="add-actions text-center text-center">
                        <div class="project-dec">
                          <a class="venobox" data-gall="myGallery" href="img/portfolio/5.jpg">
                            <h4>Beautiful Flower</h4>
                            <span>Web Development</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- single-awesome-project end -->
                <!-- single-awesome-project start --> */}
                <div class="col-md-4 col-sm-4 col-xs-12 design photo">
                  <div class="single-awesome-project">
                    <div class="awesome-img">
                      <a href="#"><img src={Portofolio6} alt="" /></a>
                      <div class="add-actions text-center">
                        <div class="project-dec">
                          <a class="venobox" data-gall="myGallery" href="img/portfolio/6.jpg">
                            <h4>Night Hill</h4>
                            <span>Photoshop</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single-awesome-project end --> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}