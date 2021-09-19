import React from "react";
import { Link } from "react-router-dom";

export default function NavbarCareer() {
  return (
    <header id="header">
      <div class="container">
        <div id="logo" class="pull-left">
          <a href="#hero">
            <img src="img/LOGO UTAMA.png" alt="" title="" />
          </a>
          {/* <!-- Uncomment below if you prefer to use a text logo --> */}
          {/* <h1><a href="#hero">Alpha Creative</a></h1> */}
        </div>

        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li class="menu-active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/career">Karir</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
