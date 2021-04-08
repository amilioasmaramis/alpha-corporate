import React from 'react'

import { faCameraRetro, faChartBar, faCode, faInfinity, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngrycreative, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import ProfileImg from './img/about/craft.PNG'; // with import
import alpha1 from './img/services/alpha1.jpeg'; // with import
import alpha2 from './img/services/alpha2.JPG'; // with import


export default function Services() {
  return (
    // <!-- Start Service area -->
    <div id="services" class="services-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline services-head text-center">
              <h2>Our Services</h2>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center text-center">
          <div className="d-flex justify-content-space-between" style={{ flexWrap: "wrap" }}>
            <div class="col-md-3 col-sm-4 col-xs-12 m-5">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <Link class="services-icon" href="#">
                      <FontAwesomeIcon icon={faAngrycreative} />
                      {/* <img src={ProfileImg} alt="" style={{ width: 100, height: 100 }} /> */}
                    </Link>
                    <h4>Creative & Branding</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-4 col-xs-12 m-5">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <Link class="services-icon" href="#">
                      <FontAwesomeIcon icon={faCameraRetro} />
                      {/* <img src={alpha1} alt="" style={{ width: 100, height: 100 }} /> */}
                    </Link>
                    <h4>Graphic Design & Logo</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-4 col-xs-12 m-5">
              <div class=" about-move">
                <div class="services-details">
                  <div class="single-services">
                    <Link class="services-icon" href="#">
                      <FontAwesomeIcon icon={faInfinity} />
                      {/* <img src={alpha2} alt="" style={{ width: 100, height: 100 }} /> */}
                    </Link>
                    <h4>Ilustration</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-4 col-xs-12 m-5">
              <div class=" about-move">
                <div class="services-details">
                  <div class="single-services">
                    <Link class="services-icon" href="#">
                      <FontAwesomeIcon icon={faCameraRetro} />
                    </Link>
                    <h4>Technology Information</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-4 col-xs-12 m-5">
              <div class=" about-move">
                <div class="services-details">
                  <div class="single-services">
                    <Link class="services-icon" href="#">
                      <FontAwesomeIcon icon={faChartBar} />
                    </Link>
                    <h4>Seo Expart</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-4 col-xs-12 m-5">
              <div class=" about-move">
                <div class="services-details">
                  <div class="single-services">
                    <Link class="services-icon" href="#">
                      <FontAwesomeIcon icon={faTicketAlt} />
                    </Link>
                    <h4>24/7 Support</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    // <!-- End Service area -->
  )
}