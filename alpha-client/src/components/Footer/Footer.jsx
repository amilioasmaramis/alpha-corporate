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
              <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                A108 Adam Street <br/>
                New York, NY 535022<br/>
                United States <br/>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
                <strong>Email:</strong> info@example.com<br/>
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