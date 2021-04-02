import React from 'react'

import { faCameraRetro, faChartBar, faCode, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


export default function Services() {
  return (
    // <!-- Start Service area -->
    <div id="services" class="services-area area-padding m-5">
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
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <Link class="services-icon" href="#">
                      <FontAwesomeIcon icon={faCode} />
                    </Link>
                    <h4>Expert Coder</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <Link class="services-icon" href="#">
                      <FontAwesomeIcon icon={faCameraRetro} />
                    </Link>
                    <h4>Creative Designer</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class=" about-move">
                <div class="services-details">
                  <div class="single-services">
                    <Link class="services-icon" href="#">
                      <FontAwesomeIcon icon={faWordpress} />
                    </Link>
                    <h4>Wordpress Developer</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class=" about-move">
                <div class="services-details">
                  <div class="single-services">
                    <Link class="services-icon" href="#">
                      <FontAwesomeIcon icon={faCameraRetro} />
                    </Link>
                    <h4>Social Marketer </h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 col-xs-12">
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

            <div class="col-md-4 col-sm-4 col-xs-12">
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