import React from 'react'
// import ProfileImg from './img/about/craft.PNG'; // with import
import { Icon, InlineIcon } from '@iconify/react';
import iosSpeedometerOutline from '@iconify-icons/ion/ios-speedometer-outline';
import iosBookmarksOutline from '@iconify-icons/ion/ios-bookmarks-outline';
import iosEyeOutline from '@iconify-icons/ion/ios-eye-outline';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



export default function Profile() {
  return (
    <section id="about">
      <div class="container">

        <header class="section-header">
          <h3>About Us</h3>
          <p>
            Kami adalah anak perusahaan dari Alpha Creative Development Company yang menawarkanlayanan kreatif untuk dapat membantu membranding produk yang anda miliki mulai dari keperluan Desain Grafis seperti pembuatan logo, ilustrasi, proposal kreatif, konten media sosial, hingga kebutuhan foto dan video untuk wedding
          </p>
        </header>

        <div class="row about-cols">

          <div class="col-md-4 wow fadeInUp">
            <div class="about-col">
              <div class="img">
                <img src="img/about-mission.jpg" alt="" class="img-fluid" />
                <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
              </div>
              <h2 class="title"><a href="#">Our Mission</a></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="about-col">
              <div class="img">
                <img src="img/about-plan.jpg" alt="" class="img-fluid" />
                <div class="icon"><i class="ion-ios-list-outline"></i></div>
              </div>
              <h2 class="title"><a href="#">Our Plan</a></h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div class="about-col">
              <div class="img">
                <img src="img/about-vision.jpg" alt="" class="img-fluid" />
                <div class="icon"><i class="ion-ios-eye-outline"></i></div>
              </div>
              <h2 class="title"><a href="#">Our Vision</a></h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}