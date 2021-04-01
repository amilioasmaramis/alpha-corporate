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
    // <!-- Footer -->
    <footer class="bg-dark text-center text-white">
      {/* <!-- Grid container --> */}
      <div class="container p-4">
        {/* <!-- Section: Social media --> */}
        <section class="mb-4">
          {/* <!-- Facebook --> */}
          <Link class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>

          {/* <!-- Twitter --> */}
          <Link class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>

          {/* <!-- Google --> */}
          <Link class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faGoogle} />
          </Link>

          {/* <!-- Instagram --> */}
          <Link class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          {/* <!-- Linkedin --> */}
          <Link class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          {/* <!-- Github --> */}
          <Link class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Form --> */}
        <section class="">
          <form action="">
            {/* <!--Grid row--> */}
            <div class="row d-flex justify-content-center">
              {/* <!--Grid column--> */}
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-md-5 col-12">
                {/* <!-- Email input --> */}
                <div class="form-outline form-white mb-4">
                  <input type="email" id="form5Example2" class="form-control" />
                  <label class="form-label" for="form5Example2">Email address</label>
                </div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-auto">
                {/* <!-- Submit button --> */}
                <button type="submit" class="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </form>
        </section>
        {/* <!-- Section: Form --> */}

        {/* <!-- Section: Text --> */}
        <section class="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>
        {/* <!-- Section: Text --> */}

        {/* <!-- Section: Links --> */}
        <section class="">
          {/* <!--Grid row--> */}
          <div class="row">
            {/* <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <Link href="#!" class="text-white">Link 1</Link>
                </li>
                <li>
                  <Link href="#!" class="text-white">Link 2</Link>
                </li>
                <li>
                  <Link href="#!" class="text-white">Link 3</Link>
                </li>
                <li>
                  <Link href="#!" class="text-white">Link 4</Link>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <Link href="#!" class="text-white">Link 1</Link>
                </li>
                <li>
                  <Link href="#!" class="text-white">Link 2</Link>
                </li>
                <li>
                  <Link href="#!" class="text-white">Link 3</Link>
                </li>
                <li>
                  <Link href="#!" class="text-white">Link 4</Link>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <Link href="#!" class="text-white">Link 1</Link>
                </li>
                <li>
                  <Link href="#!" class="text-white">Link 2</Link>
                </li>
                <li>
                  <Link href="#!" class="text-white">Link 3</Link>
                </li>
                <li>
                  <Link href="#!" class="text-white">Link 4</Link>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <Link href="#!" class="text-white">Link 1</Link>
                </li>
                <li>
                  <Link href="#!" class="text-white">Link 2</Link>
                </li>
                <li>
                  <Link href="#!" class="text-white">Link 3</Link>
                </li>
                <li>
                  <Link href="#!" class="text-white">Link 4</Link>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </section>
        {/* <!-- Section: Links --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div class="text-center p-3">
        © 2020 Copyright: <Link class="text-white" href="https://mdbootstrap.com/">Companyby.Alpha</Link>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  )
}