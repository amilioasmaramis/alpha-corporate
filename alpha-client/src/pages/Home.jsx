import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Profile from '../components/Profile'
import Services from '../components/Services'
import Teams from '../components/Team'
import Portofolio from '../components/Portofolio'
import Product from '../components/Package'

export default function Home() {
  return (
    <section>
      <Navbar />
      <Banner />
      <Profile />
      <Services />
      <Portofolio />
      <Teams />
      <Product />
      <Footer />
    </section>
  )
}