import React from 'react'
import { Link } from 'react-router-dom';

// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { faInfo } from "@fortawesome/free-solid-svg-icons";
// import { faEdit } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { fabFace } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">

            <div class="col-lg-3 col-md-6 footer-info">
              <h3>Alpha</h3>
              <p>Sebuah Creative Company yang menyediakan layanan kreatif berupa barang dan jasa yang bisa diaplikasikan 
                pada berbagai macam media dengan menjunjung tinggi nilai kejujuran dan profesionalitas yang berlandasakan pada azas kekeluargaan
              </p>
              <p>
                Creative : memiliki daya cipta (kecerdasan & imajinasi)
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="ion-ios-arrow-right"></i> <a href="#intro">Home</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#about">About us</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#services">Services</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#portfolio">Portofolio</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Jl. Werkudoro No.132, <br/>
                Slerok, Kec. Tegal Timur<br/> 
                Kota Tegal, Jawa Tengah 52124 <br/>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
                <strong>Email:</strong> alpha-creative@alpha.id<br/>
              </p>
              
              <div class="social-links">
                {/* <!-- Facebook --> */}
                <Link class="facebook" href="#!">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>

                {/* <!-- Twitter --> */}
                <Link class="twitter" href="#!">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>

                {/* <!-- Google --> */}
                <Link class="google-plus" href="#!">
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>

                {/* <!-- Instagram --> */}
                <Link class="instagram" href="#!">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>

                {/* <!-- Linkedin --> */}
                <Link class="linkedin" href="#!">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>

                {/* <!-- Github --> */}
                <Link class="github" href="#!">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </div>

            </div>

            <div class="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit"  value="Subscribe" />
              </form>
            </div>

          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; 2021 Copyright : <strong>Companyby.Alpha</strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="https://bootstrapmade.com/">Razormangs</a>
        </div>
      </div>
    </footer>

  )
}