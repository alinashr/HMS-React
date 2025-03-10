import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Service_p from '../components/Service_p'
import { Helmet } from 'react-helmet'

const ServicePage = () => {
  return (
    <>
    <Helmet><title>My Services Page</title></Helmet>
    <Service_p/>
    </>

  )
}

export default ServicePage