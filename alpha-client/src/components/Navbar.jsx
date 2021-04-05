import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top navbar-bg">
        <div class="container-fluid">
          <Link class="navbar-brand" id="link-color">Company by Alpha</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" id="link-color" aria-current="page" href="#carouselExampleFade">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="link-color" href="#profile">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="link-color" href="#services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="link-color" href="#team">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="link-color" href="#portofolio">Portofolio</a>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" href="#" id="link-color" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" id="link-color" href="#">Action</Link></li>
                  <li><Link class="dropdown-item" id="link-color" href="#">Another action</Link></li>
                  <li><hr class="dropdown-divider" id="link-color" /></li>
                  <li><Link class="dropdown-item" id="link-color" href="#">Something else here</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="link-color" to="profile">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}