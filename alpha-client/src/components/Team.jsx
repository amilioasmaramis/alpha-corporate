import React from 'react'
import { Link } from 'react-router-dom';

import Team1 from './img/team/1.jpg'; // with import
import Team2 from './img/team/2.jpg'; // with import
import Team3 from './img/team/3.jpg'; // with import
import Team4 from './img/team/4.jpg'; // with import


import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Team() {
  return (
    <div id="team" class="our-team-area area-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <h2>Our special Team</h2>
            </div>
          </div>
        </div>
        {/* Card Member */}
        <div className="d-flex justify-content-center text-center">
          <div className="d-flex justify-content-space-between" style={{ flexWrap: "wrap" }}>  
            <div class="card" style={{ width: "18rem", margin: 15 }}>
              <div class="single-team-member">
                <div class="team-img d-flex justify-content-center">
                  <Link href="#">
                      <img src={Team1} style={{ width: "18rem", objectFit: "contain"}} alt="" />
                  </Link>
                  <div class="team-social-icon text-center">
                    <ul>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team-content text-center">
                  <h4>Jhon Mickel</h4>
                  <p>Seo</p>
                </div>
              </div>
            </div>

            <div class="card" style={{ width: "18rem", margin: 15 }}>
              <div class="single-team-member">
                <div class="team-img d-flex justify-content-center">
                  <Link href="#">
                      <img src={Team2} style={{ width: "18rem", objectFit: "contain"}} alt="" />
                  </Link>
                  <div class="team-social-icon text-center">
                    <ul>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team-content text-center">
                  <h4>Jhon Mickel</h4>
                  <p>Seo</p>
                </div>
              </div>
            </div>

            <div class="card" style={{ width: "18rem", margin: 15 }}>
              <div class="single-team-member">
                <div class="team-img d-flex justify-content-center">
                  <Link href="#">
                      <img src={Team3} style={{ width: "18rem", objectFit: "contain"}} alt="" />
                  </Link>
                  <div class="team-social-icon text-center">
                    <ul>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team-content text-center">
                  <h4>Jhon Mickel</h4>
                  <p>Seo</p>
                </div>
              </div>
            </div>

            <div class="card" style={{ width: "18rem", margin: 15 }}>
              <div class="single-team-member">
                <div class="team-img d-flex justify-content-center">
                  <Link href="#">
                      <img src={Team4} style={{ width: "18rem", objectFit: "contain"}} alt="" />
                  </Link>
                  <div class="team-social-icon text-center">
                    <ul>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team-content text-center">
                  <h4>Jhon Mickel</h4>
                  <p>Seo</p>
                </div>
              </div>
            </div>

            <div class="card" style={{ width: "18rem", margin: 15 }}>
              <div class="single-team-member">
                <div class="team-img d-flex justify-content-center">
                  <Link href="#">
                      <img src={Team1} style={{ width: "18rem", objectFit: "contain"}} alt="" />
                  </Link>
                  <div class="team-social-icon text-center">
                    <ul>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team-content text-center">
                  <h4>Jhon Mickel</h4>
                  <p>Seo</p>
                </div>
              </div>
            </div>

            <div class="card" style={{ width: "18rem", margin: 15 }}>
              <div class="single-team-member">
                <div class="team-img d-flex justify-content-center">
                  <Link href="#">
                      <img src={Team2} style={{ width: "18rem", objectFit: "contain"}} alt="" />
                  </Link>
                  <div class="team-social-icon text-center">
                    <ul>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team-content text-center">
                  <h4>Jhon Mickel</h4>
                  <p>Seo</p>
                </div>
              </div>
            </div>

            <div class="card" style={{ width: "18rem", margin: 15 }}>
              <div class="single-team-member">
                <div class="team-img d-flex justify-content-center">
                  <Link href="#">
                      <img src={Team3} style={{ width: "18rem", objectFit: "contain"}} alt="" />
                  </Link>
                  <div class="team-social-icon text-center">
                    <ul>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team-content text-center">
                  <h4>Jhon Mickel</h4>
                  <p>Seo</p>
                </div>
              </div>
            </div>

            <div class="card" style={{ width: "18rem", margin: 15 }}>
              <div class="single-team-member">
                <div class="team-img d-flex justify-content-center">
                  <Link href="#">
                      <img src={Team4} style={{ width: "18rem", objectFit: "contain"}} alt="" />
                  </Link>
                  <div class="team-social-icon text-center">
                    <ul>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="team-content text-center">
                  <h4>Jhon Mickel</h4>
                  <p>Seo</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}