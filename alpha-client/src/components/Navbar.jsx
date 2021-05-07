import React from 'react'

import LogoAlpha from './logo-alpha.png'

export default function Navbar() {
  return (
    <header id="header">
      <div class="container">

        <div id="logo" class="pull-left">
          <a href="#hero"><img src={LogoAlpha} alt="" title="" /></a>
          {/* <!-- Uncomment below if you prefer to use a text logo -->
          <!--<h1><a href="#hero">Regna</a></h1>--> */}
        </div>

        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li class="menu-active"><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}