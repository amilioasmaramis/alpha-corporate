import React from 'react'

export default function ContactUs() {
  return (
    <section id="contact" class="section-bg wow fadeInUp">
      <div class="container">

        <div class="section-header">
          <h3>Contact Us</h3>
          <h5 className="d-flex justify-content-center">Need a hand ? Or a high five?</h5>
          <h5 className="d-flex justify-content-center">Here's how to reach us</h5>
        </div>

        <div class="row contact-info">

          <div class="col-md-4">
            <div class="contact-address">
              <i class="ion-ios-location-outline"></i>
              <h3>Address</h3>
              <address>Jl. Werkudoro No.132, Slerok, Kec. Tegal Tim., Kota Tegal, Jawa Tengah 52124</address>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-phone">
              <i class="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+155895548855">+62 852 2767 3366</a></p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-email">
              <i class="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">alpha-creative@alpha.id</a></p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}