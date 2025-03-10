import React from 'react'
import ContactUs from './ContactUs'
import { Helmet } from 'react-helmet'

const Contact_p = () => {
  return (
    <div>
        <Helmet><title>My ContactPage</title></Helmet>
        <ContactUs/>
    </div>
  )
}

export default Contact_p