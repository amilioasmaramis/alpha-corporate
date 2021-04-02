import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Profile from '../components/Profile'
import Services from '../components/Services'
import Teams from '../components/Team'

export default function Home() {
  return (
    <section>
      <Navbar />
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" tabindex="0">
      <Banner />
      <Profile />
      <Services />
      <Teams />
      <Footer />
      </div>
    </section>
  )
}