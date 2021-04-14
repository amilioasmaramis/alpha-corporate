import React from 'react'
// import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header id="header">
      <div class="container-fluid">

        <div id="logo" class="pull-left">
          <h1><a href="#intro" class="scrollto">Alpha</a></h1>
          {/* <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>--> */}
        </div>

        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li class="menu-active"><a href="#intro">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            {/* <li><a href="#team">Team</a></li> */}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}