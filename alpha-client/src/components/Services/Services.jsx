import React from 'react'

import { faCameraRetro, faChartBar, faCode, faInfinity, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngrycreative, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
// import ProfileImg from './img/about/craft.PNG'; // with import
import LogoCreative from './Logo alpha/ALPHA CREATIVE.jpeg'; // with import
import LogoWedding from './Logo alpha/ALPHA WEDDING.jpeg'; // with import
import LogoCraft from './Logo alpha/craft.JPG'; // with import
import LogoTech from './Logo alpha/ALPHA TECH.jpeg'; // with import
import LogoHouse from './Logo alpha/ALPHA HOUSE.jpeg'; // with import
// import alpha2 from './img/services/alpha2.JPG'; // with import


export default function Services() {
  return (
    <section id="services">
      <div class="container">

        <header class="section-header wow fadeInUp">
          <h3>Services</h3>
          <p>Layanan kreatif yang ada pada perusahaan kami</p>
        </header>

        <div class="row">

          <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
            <div class="icon">
              {/* <i class="ion-ios-analytics-outline"></i> */}
              <img className="logo-alpha" src={LogoCreative} style={{ width: 50, height: 50 }} alt="" title="" />
            </div>
            <h4 class="title"><a href="">Alpha Creative Media</a></h4>
            <p class="description">
              Layanan kreatif pertama yang kami
              tawarkan adalah pengelolaan media
              sosial. Pengelolaan ini kami lakukan
              mulai dari pembuatan konten visual
              yang menarik hingga copy writing.
              Selain itu, kami juga dapat membantu
              mensukseskan campaign project mulai
              dari ide hingga narasi yang ingin
              diangkat.
            </p>
          </div>

          <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
            <div class="icon">
              {/* <i class="ion-ios-analytics-outline"></i> */}
              <img className="logo-alpha" src={LogoTech} style={{ width: 50, height: 50 }} alt="" title="" />
            </div>
            <h4 class="title"><a href="">Alpha Tech</a></h4>
            <p class="description">
              Sebuah layanan yang kami sediakan untuk dapat membantu memudahkan 
              pekerjaan anda yang berkaitan dengan dunia digital seperti sistem pemrograman
              hingga pembuatan aplikasi yang sesuai dengan kebutuhan anda.
            </p>
          </div>

          <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
            <div class="icon">
              {/* <i class="ion-ios-analytics-outline"></i> */}
              <img className="logo-alpha" src={LogoHouse} style={{ width: 50, height: 50 }} alt="" title="" />
            </div>
            <h4 class="title"><a href="">Alpha House</a></h4>
            <p class="description">
              Merupakan sebuah layanan photo studio yang menyediakan jasa pemotretan
              dengan beberapa konsep kreatif untuk memunhi kebutuhan foto anda seperti
              foto produk hingga foto keluarga.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
            <div class="icon">
              {/* <i class="ion-ios-analytics-outline"></i> */}
              <img className="logo-alpha" src={LogoHouse} style={{ width: 50, height: 50 }} alt="" title="" />
            </div>
            <h4 class="title"><a href="">Alpha Constructions</a></h4>
            <p class="description">
              Sedikit berbeda dari layanan lainnya, Alpha Construction hadir bukan hanya
              menyediakan jasa, namun juga barang. Kami bisa membantu anda untuk mewujudkan
              design bangunan yang anda inginkan lengkap dengan kebutuhan interior didalamnya.
            </p>
          </div>
        </div>  

      </div>
    </section>
  )
}