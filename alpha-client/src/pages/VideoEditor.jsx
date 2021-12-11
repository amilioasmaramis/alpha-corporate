import React from "react";
import BannerCareer from "../components/BannerCarrer";
import NavbarCareer from "../components/NavbarCareer";
import Footer from "../components/Footer";

export default function Videoeditor() {
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
                    <a href="#">
                      <img src="img/logo/photografer.jpg" alt="" />
                    </a>
                  </div>
                  <div class="job-tittle">
                    <a href="#">
                      <h4>Photographer</h4>
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
                  <p align="justify">
                    Seorang fotografer yang baik nggak cuma asal jepret tetapi
                    juga memiliki pesan yang akan disampaikan dalam setiap
                    karyanya. Pekerjaan ini membutuhkan sudut pandang khusus
                    untuk menentukan bagaimana cara menampilkan objek atau
                    subjek dan pesan apa yang ingin disampaikan melalui gambar.
                    Selain itu, pekerjaan ini memerlukan teknik khusus
                    masing-masing tergantung pada genre (seperti berita, iklan,
                    dsb) atau objek yang akan difoto.
                  </p>
                </div>
                <div class="post-details2  mb-50">
                  {/* <!-- Small Section Tittle --> */}
                  <div class="small-section-tittle">
                    <h4>Ketentuan Khusus:</h4>
                  </div>
                  <ul>
                    <li>
                      Mengupload karya berupa 3 foto (slide) ke instagram.
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
                    Vacancy : <span>02</span>
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
                {/* <div class="apply-btn2">
                  <a href="#" class="btn">
                    Apply Now
                  </a>
                </div> */}
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
