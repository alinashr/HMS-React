import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbars shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 w-10" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="mr-10 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-gray-200 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex justify-start ">
            <Link to="/" className="text-lg !text-red-600 px-2.5 hover:text-blue-600 hover:scale-110 text-decoration-none">Home</Link>
            <Link to="/service" className="text-lg !text-red-600 px-2.5 text-dark hover:scale-110 hover:text-blue-600 text-decoration-none">Services</Link>
            <Link to="/specialist" className="text-lg !text-red-600 px-2.5 text-dark hover:scale-110 hover:text-blue-600 text-decoration-none">Specialist</Link>
            <Link to="/contact" className="text-lg !text-red-600 px-2.5 text-dark hover:scale-110 text-decoration-none">Contact</Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-9">
            <Link to="/appointment" className="bg-blue-600 text-white px-2 py-2 rounded hover:bg-blue-700 text-decoration-none">Book an Appointment</Link>
            <Link to="/register" className="bg-blue-600 mx-2 text-white px-2 py-2 rounded hover:bg-blue-700 text-decoration-none">Sign Up</Link>
            <Link to="/login" className="bg-blue-600 text-white px-2 py-2 rounded hover:bg-blue-700 text-decoration-none">Login</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-2 bg-gray-100">
            <Link to="/" className="block text-lg text-gray-700 hover:text-blue-600 text-decoration-none">Home</Link>
            <Link to="/service" className="block text-lg text-gray-700 hover:text-blue-600 text-decoration-none">Services</Link>
            <Link to="/specialist" className="block text-lg text-gray-700 hover:text-blue-600 text-decoration-none">Specialist</Link>
            <Link to="/contact" className="block text-lg text-gray-700 hover:text-blue-600 text-decoration-none">Contact</Link>
            <div className="mt-4 gap-y-2 flex flex-col text-center justify-between">
              <Link to="/appointment" className=" block w-51 bg-blue-600 text-white py-1 rounded hover:bg-blue-700 text-decoration-none">Book an Appointment</Link>
              <Link to="/register" className="block w-26 bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 text-decoration-none">Sign Up</Link>
               <Link to="/login" className="block w-20 bg-blue-600 text-white  py-1 rounded hover:bg-blue-700 text-decoration-none">Login</Link>
             </div>
           </div>
       </div>
      )}
    </nav>
  );
};

export default Navbar;




// // Tailwind Custom Button Styles
// const btnPrimary = "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700";
// const btnSecondary = "bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"; */}
