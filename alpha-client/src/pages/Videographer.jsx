import React from "react";
import BannerCareer from "../components/BannerCarrer";
import NavbarCareer from "../components/NavbarCareer";
import Footer from "../components/Footer";

export default function Videographer() {
  return (
    <div>
      <div>
        <NavbarCareer />
        <BannerCareer />
      </div>
      {/* <!-- Hero Area End -->
        <!-- job post company Start --> */}
      <div class="job-post-company pt-120 pb-120">
        <div class="container">
          <div class="row justify-content-between">
            {/* <!-- Left Content --> */}
            <div class="col-xl-7 col-lg-8">
              {/* <!-- job single --> */}
              <div class="single-job-items mb-50">
                <div class="job-items">
                  <div class="company-img company-img-details">
                    <a href="/videographer">
                      <img src="img/logo/ILS.png" alt="" />
                    </a>
                  </div>
                  <div class="job-tittle">
                    <a href="#">
                      <h4>Ilustrator</h4>
                    </a>
                    <ul>
                      <li>Creative Agency</li>
                      <li>
                        <i class="fas fa-map-marker-alt"></i>Tegal, Indonesia
                      </li>
                      {/* <li>$3500 - $4000</li> */}
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- job single End --> */}
              <div class="job-post-details">
                <div class="post-details1 mb-50">
                  {/* <!-- Small Section Tittle --> */}
                  <div class="small-section-tittle">
                    <h4>Deksripsi Job</h4>
                  </div>
                  <p>
                    Kamu suka menggambar? Wah kamu bisa banget nih berkecimpung
                    di profesi ilustrator. Apalagi dengan dukungan teknologi,
                    profesi ilustrator semakin naik daun dan banyak dicari lho.
                    Kemampuan menggambar tentu menjadi modal utama bagi seorang
                    ilustrator, karena sehari-hari kamu akan mengerjakan gambar
                    ilustrasi sesuai kebutuhan. Ilustrator bisa bekerja di
                    berbagai bidang industri namun yang paling umum adalah di
                    industri kreatif dan industri media.
                  </p>
                </div>
                <div class="post-details2  mb-50">
                  {/* <!-- Small Section Tittle --> */}
                  <div class="small-section-tittle">
                    <h4>Ketentuan Khusus:</h4>
                  </div>
                  <ul>
                    <li>
                      Mengupload karya berupa 1 buah ilustrasi ke instagram.
                    </li>
                    <li>
                      Ceritakan tentang karya tersebut dan alasan mengapa kamu
                      ingin bergabung bersama alpha.
                    </li>
                    <li>
                      Sertakan logo alpha company pada karya tersebut, gunakan
                      hashtag #katanyakreatif dan tag @companyby.alpha pada
                      kolom caption.
                    </li>
                    <br />
                    <div class="company-img company-img-details">
                      <a
                        href="img/logo/LOGO ALPHA.png"
                        download="logo-alpha.jpg"
                        title="alphaCreative"
                      >
                        <img src="img/logo/LOGO ALPHA.png" alt="" width="25%" />
                      </a>
                    </div>
                    <br />
                    <li>
                      Akun instagram tidak diperkenankan untuk di private.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- Right Content --> */}
            <div class="col-xl-4 col-lg-4">
              <div class="post-details3  mb-50">
                {/* <!-- Small Section Tittle --> */}
                <div class="small-section-tittle">
                  <h4>Job Overview</h4>
                </div>
                <ul>
                  <li>
                    Posted date : <span>11 Dec 2021</span>
                  </li>
                  <li>
                    Location : <span>Tegal, Indonesia</span>
                  </li>
                  <li>
                    Vacancy : <span>04</span>
                  </li>
                  {/* <li>
                    Job nature : <span>Full time</span>
                  </li>
                  <li>
                    Salary : <span>$7,800 yearly</span>
                  </li>
                  <li>
                    Application date : <span>12 Sep 2020</span>
                  </li> */}
                </ul>
                <div class="apply-btn2">
                  <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeYgC6IqAq-zNhCodIOb9pdOW4jLDXjyWOdvIrqQGqoVT2j8Q/viewform" class="btn">
                  Isi Data Dirimu Disini!
                  </a>
                </div>
              </div>
              <div class="post-details4  mb-50">
                {/* <!-- Small Section Tittle --> */}
                <div class="small-section-tittle">
                  <h4>Company Information</h4>
                </div>
                <span>Alpha Creative Company</span>
                <p>
                  Sebuah Creative Company yang menyediakan layanan kreatif
                  berupa barang dan jasa yang dapat diaplikasikan pada berbagai
                  macam media.
                </p>
                <ul>
                  <li>
                    Name: <span>Alpha Creative </span>
                  </li>
                  <li>
                    Web :{" "}
                    <span>
                      <a
                        href="https://alpha-creative-v2.web.app/"
                        style={{ color: "blue" }}
                      >
                        Alpha Creative
                      </a>
                    </span>
                  </li>
                  <li>
                    Email: <span>office@alphacreativedev.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
