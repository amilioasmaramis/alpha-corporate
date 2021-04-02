import React from 'react'
import ProfileImg from './img/about/1.jpg'; // with import

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



export default function Profile() {
  return (
    // <!-- Start About area -->
    <div id="about" class="about-area area-padding mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <h2>About Alpha Corporate</h2>
            </div>
          </div>
        </div>
        <div class="row">
          {/* <!-- single-well start--> */}
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-left">
              <div class="single-well">
                <Link href="#">
                  <img src={ProfileImg} alt="..." style={{ objectFit: "cover", width: "100%" }} />
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- single-well end--> */}
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-middle">
              <div class="single-well">
                <Link href="#" style={{ color: 'black' }}>
                  <h4 class="sec-head">Project Company by Alpha</h4>
                </Link>
                <p>
                  Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure aspernatur sit adipisci quaerat unde at nequeRedug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure
                </p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#bbbbbb" }} /> Interior design Package
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#bbbbbb" }} /> Building House
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#bbbbbb" }} /> Reparing of Residentail Roof
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#bbbbbb" }} /> Renovaion of Commercial Office
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#bbbbbb" }} /> Make Quality Products
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- End col--> */}
        </div>
      </div>
    </div>
  )
}