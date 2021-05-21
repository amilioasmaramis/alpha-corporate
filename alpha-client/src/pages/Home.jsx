import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Portofolio from '../components/Portofolio'
import Clients from '../components/Clients'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

export default function Home() {
  const [data, setData] = useState()
  // const dispatch = useDispatch()
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