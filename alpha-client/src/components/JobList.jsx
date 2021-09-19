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
                    <a href="job_details.html">
                      <img src="assets/img/icon/job-list1.png" alt="" />
                    </a>
                  </div>
                  <div class="job-tittle">
                    <a href="job_details.html">
                      <h4>Admin Studio</h4>
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
                  <a href="job_details.html">Join Now</a>
                </div>
                <div class="items-link f-right">
                  <Link to="/admin-studio">Detail</Link>
                </div>
              </div>
              {/* <!-- single-job-content --> */}
              <div class="single-job-items mb-30">
                <div class="job-items">
                  <div class="company-img">
                    <a href="job_details.html">
                      <img src="assets/img/icon/job-list2.png" alt="" />
                    </a>
                  </div>
                  <div class="job-tittle">
                    <a href="job_details.html">
                      <h4>Video editor</h4>
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
                  <a href="job_details.html">Join Now</a>
                </div>
                <div class="items-link f-right">
                  <Link to="/video-editor">Detail</Link>
                </div>
              </div>
              {/* <!-- single-job-content --> */}
              <div class="single-job-items mb-30">
                <div class="job-items">
                  <div class="company-img">
                    <a href="job_details.html">
                      <img src="assets/img/icon/job-list3.png" alt="" />
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
                  <a href="job_details.html">Join Now</a>
                </div>
                <div class="items-link f-right">
                  <Link to="/photographer">Detail</Link>
                </div>
              </div>
              {/* <!-- single-job-content --> */}
              <div class="single-job-items mb-30">
                <div class="job-items">
                  <div class="company-img">
                    <a href="job_details.html">
                      <img src="assets/img/icon/job-list4.png" alt="" />
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
                  <a href="job_details.html">Join Now</a>
                </div>
                <div class="items-link f-right">
                  <Link to="/videographer">Detail</Link>
                </div>
              </div>
              {/* Photo Editor */}
              <div class="single-job-items mb-30">
                <div class="job-items">
                  <div class="company-img">
                    <a href="job_details.html">
                      <img src="assets/img/icon/job-list4.png" alt="" />
                    </a>
                  </div>
                  <div class="job-tittle">
                    <a href="job_details.html">
                      <h4>Photo editor</h4>
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
                <div class="items-link">
                  <a href="job_details.html">Join Now</a>
                </div>
                <div class="items-link">
                  <Link to="/photo-editor">Detail</Link>
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
