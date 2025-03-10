import React from "react";
import Appointment_form from "../components/Appointment_form";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Appointment = () => {
  return (
    <div className="app_f p-5">
      <Appointment_form />
    </div>
  );
};

export default Appointment;
