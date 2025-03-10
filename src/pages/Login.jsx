import React from 'react'
import Login_form from '../components/Login_form'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div >
    <Helmet><title>My Login</title></Helmet>
    <div className='log_f'><Login_form/></div>
    </div>
  )
}

export default Login
