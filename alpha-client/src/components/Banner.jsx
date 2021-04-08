import React from 'react'
import Image1 from './img/intro-carousel/1.jpg'
import Image2 from './img/intro-carousel/2.jpg'
import Image3 from './img/intro-carousel/3.jpg'
import Image4 from './img/intro-carousel/4.jpg'
import Image5 from './img/intro-carousel/5.jpg'


export default function Banner() {
  return (
    // <div>
    //   <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    //     <div class="carousel-inner">
    //       <div class="carousel-item active">
    //         <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" class="d-block w-100" alt="..." />
    //         <div class="carousel-caption d-none d-md-block">
    //           <h5>First slide label</h5>
    //           <p>Some representative placeholder content for the first slide.</p>
    //         </div>
    //       </div>
    //       <div class="carousel-item">
    //         <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" class="d-block w-100" alt="..." />
    //         <div class="carousel-caption d-none d-md-block">
    //           <h5>First slide label</h5>
    //           <p>Some representative placeholder content for the first slide.</p>
    //         </div>
    //       </div>
    //       <div class="carousel-item">
    //         <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" class="d-block w-100" alt="..." />
    //         <div class="carousel-caption d-none d-md-block">
    //           <h5>First slide label</h5>
    //           <p>Some representative placeholder content for the first slide.</p>
    //         </div>
    //       </div>
    //     </div>
    //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Previous</span>
    //     </button>
    //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
      <section id="intro">

      <div class="intro-content">
        <h2>Making <span>your</span><span> ideas</span></h2>
        <h2>happen!</h2>
        <div>
          <a href="#about" class="btn-get-started scrollto">Get Started</a>
          <a href="#portofolio" class="btn-projects scrollto">Our Projects</a>
        </div>
      </div>

      <div id="intro-carousel" class="owl-carousel" >
        <div class="item" style={{ backgroundImage: Image1 }}></div>
        {/* <div class="item" style={{ backgroundImage: Image2 }}></div>
        <div class="item" style={{ backgroundImage: Image3 }}></div>
        <div class="item" style={{ backgroundImage: Image4 }}></div>
        <div class="item" style={{ backgroundImage: Image5 }}></div> */}
      </div>

    </section>
  )
}