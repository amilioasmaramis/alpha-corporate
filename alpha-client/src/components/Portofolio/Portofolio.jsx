import React from 'react'

import Peraduan1 from './ImgPortofolio/Peraduan (1).JPG'; // with import
import Peraduan2 from './ImgPortofolio/Peraduan (2).JPG'; // with import
import Peraduan3 from './ImgPortofolio/Peraduan (3).JPG'; // with import

import Njajan1 from './ImgPortofolio/Njajan (1).JPG'; // with import
import Njajan2 from './ImgPortofolio/Njajan (2).JPG'; // with import
import Njajan3 from './ImgPortofolio/Njajan (3).JPG'; // with import

import Minapadi1 from './ImgPortofolio/Minapadi (1).JPG'; // with import
import Minapadi2 from './ImgPortofolio/Minapadi (2).JPG'; // with import
import Minapadi3 from './ImgPortofolio/Minapadi (3).JPG'; // with import

import Prolog1 from './ImgPortofolio/Prolog (1).JPG'; // with import
import Prolog2 from './ImgPortofolio/Prolog (2).JPG'; // with import
import Prolog3 from './ImgPortofolio/Prolog (3).JPG'; // with import

import Engagement1 from './ImgPortofolio/Engagementan/engagement (1).jpg'; // with import
import Engagement2 from './ImgPortofolio/Engagementan/engagement (2).jpg'; // with import
import Engagement3 from './ImgPortofolio/Engagementan/engagement (3).jpg'; // with import

import Wedding1 from './ImgPortofolio/Wedingan/Wedding (1).JPG'; // with import
import Wedding2 from './ImgPortofolio/Wedingan/Wedding (2).JPG'; // with import
import Wedding3 from './ImgPortofolio/Wedingan/Wedding (3).JPG'; // with import
import Wedding4 from './ImgPortofolio/Wedingan/Wedding (4).jpg'; // with import
import Wedding5 from './ImgPortofolio/Wedingan/Wedding (5).jpg'; // with import
import Wedding6 from './ImgPortofolio/Wedingan/Wedding (6).jpg'; // with import

import Prewed1 from './ImgPortofolio/Prewed/Prewed (1).jpg'; // with import
import Prewed2 from './ImgPortofolio/Prewed/Prewed (2).jpg'; // with import
import Prewed3 from './ImgPortofolio/Prewed/Prewed (3).jpg'; // with import
import Prewed4 from './ImgPortofolio/Prewed/Prewed (4).JPG'; // with import
import Prewed5 from './ImgPortofolio/Prewed/Prewed (5).JPG'; // with import
import Prewed6 from './ImgPortofolio/Prewed/Prewed (6).JPG'; // with import

import MusicAlbum1 from './ImgPortofolio/Music Albums/cover album cashman.jpg'; // with import
import MusicAlbum2 from './ImgPortofolio/Music Albums/cover album sadam.jpg'; // with import
import MusicAlbum3 from './ImgPortofolio/Music Albums/yr4.jpg'; // with import

import Comic1 from './ImgPortofolio/Comics/Comics (1).jpg'; // with import
import Comic2 from './ImgPortofolio/Comics/Comics (2).jpg'; // with import
import Comic3 from './ImgPortofolio/Comics/Comics (3).jpg'; // with import

export default function Portofolio() {
  return (
    <section id="portfolio"  class="section-bg" >
      <div class="container">

        <header class="section-header">
          <h3 class="section-title">Our Portfolio</h3>
        </header>

        {/* <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div> */}

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src={Peraduan1} class="img-fluid" alt="" />
                <a href={Peraduan1} data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Tempat Peraduan</a></h4>
                <p>Coffee Shop</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Peraduan2} class="img-fluid" alt="" />
                <a href={Peraduan2} class="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Tempat Peraduan</a></h4>
                <p>Coffee Shop</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Peraduan3} class="img-fluid" alt="" />
                <a href={Peraduan3} class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Tempat Peraduan</a></h4>
                <p>Coffee Shop</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src={Njajan1} class="img-fluid" alt="" />
                <a href={Njajan1} class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Njajan.co</a></h4>
                <p>Cafe</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Njajan2} class="img-fluid" alt="" />
                <a href={Njajan2} class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Njajan.co</a></h4>
                <p>Cafe</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Njajan3} class="img-fluid" alt="" />
                <a href={Njajan3} class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Njajan.co</a></h4>
                <p>Cafe</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Minapadi1} class="img-fluid" alt="" />
                <a href={Minapadi1} class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Minapadi</a></h4>
                <p>Coffee Shop</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Minapadi2} class="img-fluid" alt="" />
                <a href={Minapadi2} class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Minapadi</a></h4>
                <p>Coffee Shop</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Minapadi3} class="img-fluid" alt="" />
                <a href={Minapadi1} class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Minapadi</a></h4>
                <p>Coffee Shop</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src={Prolog1} class="img-fluid" alt="" />
                <a href={Prolog1} class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Prolog</a></h4>
                <p>Prolog</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Prolog2} class="img-fluid" alt="" />
                <a href={Prolog2} class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Prolog</a></h4>
                <p>Prolog</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Prolog3} class="img-fluid" alt="" />
                <a href={Prolog3} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Prolog</a></h4>
                <p>Prolog</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Engagement1} class="img-fluid" alt="" />
                <a href={Engagement1} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Engagement</a></h4>
                <p>Engagement</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Engagement2} class="img-fluid" alt="" />
                <a href={Engagement2} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Engagement</a></h4>
                <p>Engagement</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Engagement3} class="img-fluid" alt="" />
                <a href={Engagement3} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Engagement</a></h4>
                <p>Engagement</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Wedding1} class="img-fluid" alt="" />
                <a href={Wedding1} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Wedding</a></h4>
                <p>Wedding</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Wedding2} class="img-fluid" alt="" />
                <a href={Wedding2} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Wedding</a></h4>
                <p>Wedding</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Wedding3} class="img-fluid" alt="" />
                <a href={Wedding3} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Wedding</a></h4>
                <p>Wedding</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Wedding4} class="img-fluid" alt="" />
                <a href={Wedding4} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Wedding</a></h4>
                <p>Wedding</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Wedding5} class="img-fluid" alt="" />
                <a href={Wedding5} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Wedding</a></h4>
                <p>Wedding</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Wedding6} class="img-fluid" alt="" />
                <a href={Wedding6} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Wedding</a></h4>
                <p>Wedding</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Prewed1} class="img-fluid" alt="" />
                <a href={Prewed1} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Prewedd</a></h4>
                <p>Prewedd</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Prewed2} class="img-fluid" alt="" />
                <a href={Prewed2} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Prewedd</a></h4>
                <p>Prewedd</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Prewed3} class="img-fluid" alt="" />
                <a href={Prewed3} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Prewedd</a></h4>
                <p>Prewedd</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Prewed4} class="img-fluid" alt="" />
                <a href={Prewed4} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Prewedd</a></h4>
                <p>Prewedd</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Prewed5} class="img-fluid" alt="" />
                <a href={Prewed5} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Prewedd</a></h4>
                <p>Prewedd</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Prewed6} class="img-fluid" alt="" />
                <a href={Prewed6} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Prewedd</a></h4>
                <p>Prewedd</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={MusicAlbum1} class="img-fluid" alt="" />
                <a href={MusicAlbum1} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Music Album</a></h4>
                <p>Music Album</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={MusicAlbum2} class="img-fluid" alt="" />
                <a href={MusicAlbum2} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Music Album</a></h4>
                <p>Music Album</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={MusicAlbum3} class="img-fluid" alt="" />
                <a href={MusicAlbum3} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Music Album</a></h4>
                <p>Music Album</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Comic1} class="img-fluid" alt="" />
                <a href={Comic1} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Comic</a></h4>
                <p>Comic</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Comic2} class="img-fluid" alt="" />
                <a href={Comic2} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Comic</a></h4>
                <p>Comic</p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div class="portfolio-wrap">
              <figure>
                <img src={Comic3} class="img-fluid" alt="" />
                <a href={Comic3} class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                {/* <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a> */}
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">Comic</a></h4>
                <p>Comic</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}