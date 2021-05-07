import React from 'react'

export default function Services() {
  return (
    <section id="services">
      <div class="container">
        <div class="section-header">
          <h2>Our Services</h2>
          <p>
            Merupakan layanan kreatif yang kami tawarkan
            untuk dapat membantu membranding produk
            yang anda miliki mulai dari kebutuhan Ide dan
            Desain seperti pembuatan Logo, Ilustrasi,
            Proposal Kreatif, Konten Media Sosial,
            hingga kebutuhan foto dan video
            untuk wedding.
          </p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="box wow fadeInLeft">
              <div class="icon">
                <img style={{ width: 80, height: 80 }} src="img/alpha-creative.jpeg" alt="" class="rounded-circle b-shadow-a" />
              </div>
              <h4 class="title"><a href="">Alpha Creative Media</a></h4>
              <p class="description">
                Layanan kreatif pertama yang kami tawarkan adalah pengelolaan media sosial. 
                Pengelolaan ini kami lakukan mulai dari pembuatan konten visual yang menarik 
                hingga copy writing. Selain itu, kami juga dapat membantu mensukseskan campaign 
                project mulai dari ide hingga narasi yang ingin diangkat.
              </p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="box wow fadeInRight">
              <div class="icon">
                <img style={{ width: 80, height: 80 }} src="img/alpha-tech.jpeg" alt="" class="rounded-circle b-shadow-a" />
              </div>
              <h4 class="title"><a href="">Alpha Tech</a></h4>
              <p class="description">
                Sebuah layanan yang kami sediakan untuk dapat membantu memudahkan 
                pekerjaan anda yang berkaitan dengan dunia digital seperti sistem pemrograman 
                hingga pembuatan aplikasi yang sesuai dengan kebutuhan anda.
              </p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="box wow fadeInLeft" data-wow-delay="0.2s">
              <div class="icon">
                <img style={{ width: 80, height: 80 }} src="img/alpha-house.jpeg" alt="" class="rounded-circle b-shadow-a" />
              </div>
              <h4 class="title"><a href="">Alpha House</a></h4>
              <p class="description">
                Merupakan sebuah layanan photo studio yang menyediakan jasa pemotretan 
                dengan beberapa konsep kreatif untuk memunhi kebutuhan foto anda seperti 
                foto produk hingga foto keluarga.
              </p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="box wow fadeInRight" data-wow-delay="0.2s">
              <div class="icon">
                <img style={{ width: 80, height: 80 }} src="img/alpha-contructor.jpg" alt="" class="rounded-circle b-shadow-a" />
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

      </div>
    </section>
  )
}