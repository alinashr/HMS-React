import React from 'react'
import Layout from '../Layout'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Service from '../components/Service'
import Specialists from '../components/Specialists'
import { Helmet } from 'react-helmet'

const Homepage = () => {
  return (
    <div>
      <Helmet><title>My Hopepage</title></Helmet>
      <Carousel/>
      <Specialists/>
      <Service/>
    </div>
  )
}

export default Homepage