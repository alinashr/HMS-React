import React from "react";
import { Helmet } from "react-helmet";
import Register from "../components/Register";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <div className="signup p-5">
      <Helmet>
        <title>My Hopepage</title>
      </Helmet>
      <Register />
    </div>
  );
};

export default Signup;
