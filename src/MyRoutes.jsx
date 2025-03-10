import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Appointment from "./pages/Appointment";
import Login from "./pages/Login";
import ServicePage from "./pages/ServicePage";
import Layout from "./Layout";
import Signup from "./pages/Signup";
import Specialist_p from "./pages/Specialist_p";
import Contact_p from "./pages/Contact_p";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="appointment" element={<Appointment />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Signup />} />
            <Route index element={<Homepage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="specialist" element={<Specialist_p />} />
            <Route path="contact" element={<Contact_p />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
