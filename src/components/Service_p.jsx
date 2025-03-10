import React, { useEffect } from "react";
import p from "../assets/patient_mgmt.webp";
import e from "../assets/emergency.png";
import t from "../assets/telemedicine.jpg";
import AOS from "aos";
import { useLocation } from "react-router-dom";

const Service_p = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.hash) {
  //     const element = document.getElementById(location.hash.replace("#", ""));
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //   }
  // }, [location]);
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <div className="mx-auto bg-blue-50 px-4">
      <h1 className="text-center text-3xl font-bold py-5 !text-red-600" id="patient">Our Services</h1>
      {/* Patient Management */}
      <div className="flex ps-5 flex-col lg:flex-row gap-5" >
        <div
          className="w-full lg:w-2/5 bg-amber-200 flex items-center gap-3"
          data-aos="fade-down-right" 
        >
          <img
            src={p}
            className="w-full h-90 rounded-lg shadow-md"
            alt="Patient Management"
          />
        </div>
        <div className="w-full ps-4 lg:w-1/2">
          <h2
            className="text-center text-xl font-semibold !text-red-600" 
            
          >
            Patient Management
          </h2>
          <hr className="my-2" />
          <p>
            The patient management module of HMS caters to inpatient and
            outpatient departments, storing medical history, appointments,
            reports, and insurance details.
          </p>
          <p>
            Patients can register and book appointments online, tracking their
            activity and managing them effectively.
          </p>
          <h4 className="font-semibold mt-3 !text-red-400">Features:</h4>
          <ul className="list-disc ml-5">
            <li>
              <b>Ease of Access:</b> Online scheduling without calls.
            </li>
            <li>
              <b>Time Efficiency:</b> Reduces staff workload.
            </li>
            <li>
              <b>Enhanced Accessibility:</b> Clear doctor availability.
            </li>
          </ul>
        </div>
      </div>

      {/* Emergency Management */}
      <div className="flex ps-5 flex-col lg:flex-row gap-5 pt-16" id="emergency">
        <div
          className="w-full lg:w-2/5 flex items-center gap-3"
          data-aos="fade-down-right"
        >
          <img
            src={e}
            className="w-full h-90 rounded-lg shadow-md"
            alt="Emergency Management"
          />
        </div>
        <div className="w-full ps-4 lg:w-1/2">
          <h2 className="text-center text-xl font-semibold !text-red-600">
            Emergency Management
          </h2>
          <hr className="my-2" />
          <p>
            Emergency management prepares for and responds to hospital
            emergencies like disasters, mass casualty incidents, and outbreaks.
          </p>
          <p>Our system ensures rapid response and coordination.</p>
          <h4 className="font-semibold mt-3 !text-red-400">Features:</h4>
          <ul className="list-disc ml-5">
            <li>
              <b>Faster Response Time:</b> Monitors patient status.
            </li>
            <li>
              <b>Automated Alerts:</b> Instant notifications for emergencies.
            </li>
            <li>
              <b>Improved Communication:</b> Coordination across departments.
            </li>
          </ul>
        </div>
      </div>

      {/* Telemedicine */}
      <div className="flex ps-5 flex-col lg:flex-row gap-5 pt-16 pb-5" id="telemedicine">
        <div
          className="w-40 lg:w-2/5 flex items-center gap-3"
          data-aos="fade-down-right"
        >
          <img
            src={t}
            className="w-full h-90 rounded-lg shadow-md"
            alt="Telemedicine"
          />
        </div>
        <div className="w-full ps-4 lg:w-1/2">
          <h2
            className="text-center text-xl font-semibold !text-red-600"
            
          >
            Telemedicine
          </h2>
          <hr className="my-2" />
          <p>
            Telemedicine allows remote consultations through real-time
            communication, improving healthcare accessibility.
          </p>
          <p>
            It complements in-person visits, offering a cost-effective and
            efficient alternative for patients and practitioners.
          </p>
          <h4 className="font-semibold mt-3 !text-red-400">Features:</h4>
          <ul className="list-disc ml-5">
            <li>
              <b>Remote Consultations:</b> connect with doctors via video calls,
              phone calls, or chat without visiting a clinic.
            </li>
            <li>
              <b>Accessibility:</b> Enables healthcare access for people in
              remote or rural areas
            </li>
            <li>
              <b>Electronic Prescriptions:</b>Doctors can issue prescriptions
              digitally, making medication access easier.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service_p;
