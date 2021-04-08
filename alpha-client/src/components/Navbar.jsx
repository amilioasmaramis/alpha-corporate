import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
  <header id="header">
    <div class="container-fluid">

      <div id="logo" class="pull-left">
        <h1><a href="#intro" class="scrollto">BizPage</a></h1>
        {/* <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>--> */}
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <li class="menu-active"><a href="#intro">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portofolio">Portofolio</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#pricing">Products</a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}