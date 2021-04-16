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
          <h3>About Alpha Company</h3>
          <p>
            Kami adalah perusahaan penyedia layanan kreatif berupa barang dan jasa yang
            dapat diaplikasikan pada berbagai macam media
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
                1.	Menyediakan layanan kreatif bagi konsumen yaitu pada bidang design, marketing & branding, wedding organizer, construction dan juga IT
              </p>
              <p>
                2.	Memberikan pelayanan terbaik bagi konsumen serta karyawan untuk dapat menumbuhkan semangat simbiosis mutualisme baik 
                didalam internal maupun eksternal perusahaan
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
                Sebuah Creative Company yang menyediakan layanan kreatif berupa barang dan jasa yang bisa diaplikasikan pada berbagai macam media dengan 
                menjunjung tinggi nilai kejujuran dan profesionalitas yang berlandasakan pada azas kekeluargaan creative : memiliki daya cipta (kecerdasan & imajinasi)
              </p>
              <p></p>
              <p></p>
              <p></p>
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
                1.	Menjadi sebuah creative company yang menyediakan layanan kreatif berupa penyediaan barang dan jasa yang dapat diterapkan 
                pada segala aspek kehidupan baik secara real maupun virtual. 
              </p>
              <p>
                2.	Menjadi sebuah creative company yang menjunjung tinggi nilai kejujuran dan profesionalitas yang berlandaskan azas kekeluargaan.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}