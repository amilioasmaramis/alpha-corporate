import React from 'react'

import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Portofolio from '../components/Portofolio'
import Clients from '../components/Clients'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <Services />
      <Portofolio />
      <Clients />
      <ContactUs />
      <Footer />
    </div>
  )
}