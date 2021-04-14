import React from 'react'

import { faCameraRetro, faChartBar, faCode, faInfinity, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngrycreative, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
// import ProfileImg from './img/about/craft.PNG'; // with import
// import alpha1 from './img/services/alpha1.jpeg'; // with import
// import alpha2 from './img/services/alpha2.JPG'; // with import


export default function Services() {
  return (
    <section id="services">
      <div class="container">

        <header class="section-header wow fadeInUp">
          <h3>Services</h3>
          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.</p>
        </header>

        <div class="row">

          <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
            <div class="icon"><i class="ion-ios-analytics-outline"></i></div>
            <h4 class="title"><a href="">Creative & Branding</a></h4>
            <p class="description">
              Layanan kreatif pertama yang kami
              tawarkan adalah pengelolaan media
              sosial. Pengelolaan ini kami lakukan
              mulai dari pembuatan konten visual
              yang menarik hingga copy writing.
              Selain itu, kami juga dapat membantu
              mensukseskan campaign project mulai
              dari ide hingga narasi yang ingin
              diangkat
            </p>
          </div>
          <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
            <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
            <h4 class="title"><a href="">Graphic Design & Logo</a></h4>
            <p class="description">
              Di era saat ini, tampilan visual yang
              menarik adalah hal wajib yang dimiliki
              agar dapat lebih mudah dikenal dan
              diingat. Untuk membantu mewujudkan
              hal tersebut, kami juga menawarkan
              layanan kreatif berupa pembuatan
              design grafis mulai dari proposal
              kreatif, flyer, logo, hingga ilustrasi yang
              tentunya tidak hanya menarik secara
              visual namun juga secara makna
            </p>
          </div>
          <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
            <div class="icon"><i class="ion-ios-paper-outline"></i></div>
            <h4 class="title"><a href="">Ilustration</a></h4>
            <p class="description">
              Selain logo, bentuk visual yang
              menarik dapat juga diwujudkan
              melalui ilustrasi. Meski
              seringkali dianggap sebagai
              sesuatu yang bebas dan
              abstrak, melalui ilutrasi ini
              sebenarnya kita juga dapat
              menampilkan karya visual yang
              bisa disesuaikan dengan
              karakter yang diharapkan.
              Karya ilustrasi ini nantinya juga
              bisa diterapkan pada berbagai
              macam media seperti design
              merchandise hingga design
              interior maupun eksterior
            </p>
          </div>
          <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
            <h4 class="title"><a href="">Technology Information</a></h4>
            <p class="description">Produk Digital</p>
          </div>
          <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="icon"><i class="ion-ios-barcode-outline"></i></div>
            <h4 class="title"><a href="">Technology Information</a></h4>
            <p class="description">Produk Digital</p>
          </div>
          <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div class="icon"><i class="ion-ios-people-outline"></i></div>
            <h4 class="title"><a href="">Technology Informationr</a></h4>
            <p class="description">Produk Digital</p>
          </div>

        </div>

      </div>
    </section>
  )
}