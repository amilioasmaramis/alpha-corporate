import React from 'react'

import Portofolio1 from './img/portfolio/Alpha-6358.JPG'; // with import
import Portofolio2 from './img/portfolio/Alpha-8632.JPG'; // with import
import Portofolio3 from './img/portfolio/Alpha-5270.JPG'; // with import
import Portofolio4 from './img/portfolio/prolog.png'; // with import
import ilustrasi2 from './img/portfolio/ilustrasi 3.png'; // with import
import ilustrasi1 from './img/portfolio/ilustrasi 1.png'; // with import
import engagement from './img/portfolio/engagement.png'; // with import
import prawedding from './img/portfolio/prawedding.png'; // with import
import prawedding2 from './img/portfolio/prawedding2.png'; // with import
import wedding1 from './img/portfolio/wedding1.png'; // with import
import wedding2 from './img/portfolio/wedding2.png'; // with import



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
                      <a href="#"><img src={Portofolio3} alt="" /></a>
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
                      <a href="#"><img src={ilustrasi1} alt="" /></a>
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
                      <a href="#"><img src={ilustrasi2} alt="" /></a>
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
                {/* <!-- single-awesome-project end --> */}

                {/* <!-- single-awesome-project start --> */}
                <div class="col-md-4 col-sm-4 col-xs-12 design photo">
                  <div class="single-awesome-project">
                    <div class="awesome-img">
                      <a href="#"><img src={engagement} alt="" /></a>
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
                {/* <!-- single-awesome-project end --> */}

                {/* <!-- single-awesome-project start --> */}
                <div class="col-md-4 col-sm-4 col-xs-12 design photo">
                  <div class="single-awesome-project">
                    <div class="awesome-img">
                      <a href="#"><img src={prawedding2} alt="" /></a>
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
                {/* <!-- single-awesome-project end --> */}

                {/* <!-- single-awesome-project start --> */}
                <div class="col-md-4 col-sm-4 col-xs-12 design photo">
                  <div class="single-awesome-project">
                    <div class="awesome-img">
                      <a href="#"><img src={wedding1} alt="" /></a>
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
                {/* <!-- single-awesome-project end --> */}

                {/* <!-- single-awesome-project start --> */}
                <div class="col-md-4 col-sm-4 col-xs-12 design photo">
                  <div class="single-awesome-project">
                    <div class="awesome-img">
                      <a href="#"><img src={wedding2} alt="" /></a>
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
                {/* <!-- single-awesome-project end --> */}
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}