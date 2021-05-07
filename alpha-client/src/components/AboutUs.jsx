import React from 'react'

export default function AboutUs() {
  return (
    <section id="about">
      <div class="container">
        <div class="row about-container">

          <div class="col-lg-6 content order-lg-1 order-2">
            <h2 class="title">Tentang Kami</h2>
            <p>
              Sebuah Creative Company yang menyediakan layanan kreatif
              berupa barang dan jasa yang dapat diaplikasikan pada berbagai
              macam media.
            </p>

            <div class="icon-box wow fadeInUp">
              <div class="icon"><i class="fa fa-eye"></i></div>
              <h4 class="title"><a href="">Visi</a></h4>
              <p class="description">
                Menjadi Creative Company yang selalu dapat memberikan solusi 
                kreatif bagi setiap masalah kreatif yang ada.
              </p>
            </div>

            <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div class="icon"><i class="fa fa-list-ul"></i></div>
              <h4 class="title"><a href="">Misi</a></h4>
              <p class="description">
                Menyediakan layanan kreatif bagi konsumen pada bidang design, 
                marketing and branding, wedding organizer, construction dan juga
                kebutuhan IT.
              </p>
            </div>

          </div>

          <div class="col-lg-6 background order-lg-2 order-1 wow fadeInRight"></div>
        </div>

      </div>
    </section>
  )
}