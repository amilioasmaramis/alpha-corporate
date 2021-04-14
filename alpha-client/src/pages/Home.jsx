import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Profile from '../components/Profile/Profile'
import Services from '../components/Services/Services'
import Teams from '../components/Team'
import Portofolio from '../components/Portofolio/Portofolio'
import Product from '../components/Package'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <section>
      <Navbar />
      <Banner />
      <Profile />
      <Services />
      <Portofolio />
      {/* <Teams /> */}
      {/* <Product /> */}
      <ContactUs />
      <Footer />
    </section>
  )
}