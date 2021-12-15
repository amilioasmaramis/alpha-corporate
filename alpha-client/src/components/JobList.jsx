import React from "react";
import { Link } from "react-router-dom";

export default function JobList() {
  return (
    <div>
      {/* <!-- Featured_job_start --> */}
      <section class="featured-job-area" style={{ margin: 10 }}>
        <div class="container">
          {/* <!-- Section Tittle --> */}
          <div class="row">
            <div class="col-lg-12">
              <div class="section-tittle text-center">
                <h2>Avaliable Jobs</h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-10">
              {/* <!-- single-job-content --> */}
              <div class="single-job-items mb-30">
                <div class="job-items">
                  <div class="company-img">
                    <a href="/admin-studio">
                      <img src="img/logo/VG.png" alt="" />
                    </a>
                  </div>
                  <div class="job-tittle">
                    <a href="job_details.html">
                      <h4>Videographer</h4>
                    </a>
                    <ul>
                      <li>Creative Agency</li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>Tegal, Indonesia
                      </li>
                      <li>Negotiable</li>
                    </ul>
                  </div>
                </div>
                <div class="items-link f-right">
                  <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeYgC6IqAq-zNhCodIOb9pdOW4jLDXjyWOdvIrqQGqoVT2j8Q/viewform">Join Now</a>
                </div>
                <div class="items-link f-right">
                  <Link to="/admin-studio">Detail</Link>
                </div>
              </div>
              {/* <!-- single-job-content --> */}
              <div class="single-job-items mb-30">
                <div class="job-items">
                  <div class="company-img">
                    <a href="/video-editor">
                      <img src="img/logo/FG.png" alt="" />
                    </a>
                  </div>
                  <div class="job-tittle">
                    <a href="job_details.html">
                      <h4>Photographer</h4>
                    </a>
                    <ul>
                      <li>Creative Agency</li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>Tegal, Indonesia
                      </li>
                      <li>Negotiable</li>
                    </ul>
                  </div>
                </div>
                <div class="items-link f-right">
                  <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeYgC6IqAq-zNhCodIOb9pdOW4jLDXjyWOdvIrqQGqoVT2j8Q/viewform">Join Now</a>
                </div>
                <div class="items-link f-right">
                  <Link to="/video-editor">Detail</Link>
                </div>
              </div>
              {/* <!-- single-job-content --> */}
              <div class="single-job-items mb-30">
                <div class="job-items">
                  <div class="company-img">
                    <a href="/photographer">
                      <img src="img/logo/GD.png" alt="" />
                    </a>
                  </div>
                  <div class="job-tittle">
                    <a href="job_details.html">
                      <h4>Graphic Designer</h4>
                    </a>
                    <ul>
                      <li>Creative Agency</li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>Tegal, Indonesia
                      </li>
                      <li>Negotiable</li>
                    </ul>
                  </div>
                </div>
                <div class="items-link f-right">
                  <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeYgC6IqAq-zNhCodIOb9pdOW4jLDXjyWOdvIrqQGqoVT2j8Q/viewform">Join Now</a>
                </div>
                <div class="items-link f-right">
                  <Link to="/photographer">Detail</Link>
                </div>
              </div>
              {/* <!-- single-job-content --> */}
              <div class="single-job-items mb-30">
                <div class="job-items">
                  <div class="company-img">
                    <a href="/videographer">
                      <img src="img/logo/ILS.png" alt="" />
                    </a>
                  </div>
                  <div class="job-tittle">
                    <a href="job_details.html">
                      <h4>Ilustrator</h4>
                    </a>
                    <ul>
                      <li>Creative Agency</li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>Tegal, Indonesia
                      </li>
                      <li>Negotiable</li>
                    </ul>
                  </div>
                </div>
                <div class="items-link f-right">
                  <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeYgC6IqAq-zNhCodIOb9pdOW4jLDXjyWOdvIrqQGqoVT2j8Q/viewform">Join Now</a>
                </div>
                <div class="items-link f-right">
                  <Link to="/videographer">Detail</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Featured_job_end --> */}
    </div>
  );
}
