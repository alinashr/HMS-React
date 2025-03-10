// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import patient from "../assets/patient_mgmt.webp";
// import emergency from "../assets/emergency.png";
// import telemedicine from "../assets/telemedicine.jpg";
// // import emr from "./assets/emergency.png";
// // import rawData from "../rawData";
// import AOS from "aos";
// import "aos/dist/aos.css";

// useEffect(() => {
//   AOS.init();
// }, []);
// const Service = () => {
//   return (
//     <div className="services py-5">
//       <h2 className="text-center pb-5 text-white" id="services">
//         Our Services
//       </h2>
//       <div className="container d-flex flex-wrap justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-center mx-2.5  ">
//         <div className="card me-3 mb-5 col-lg-3 col-md-7 col-sm-7 col-10  p-3"  data-aos="fade-right">
//           <img
//             src={patient}
//             class="card-img-top w-100 h-60"
//             alt="Patient Management"
//           />
//           <div className="card-body">
//             <h5 className="card-title text-center">Patient Management</h5>
//             <br />
//             <div className="features items-center">
//               {/* <div className="d-flex flex-col ">
//                 <Link to="/appointment">
//                   <button className="btn btn-primary p-1">
//                     Book an Appointment
//                   </button>
//                 </Link>
//                 <Link to="/register">
//                   <button className="btn btn-primary p-1">New Registration</button>
//                 </Link>
//               </div> */}
//               <div className="d-flex flex-col text-center">
//                 <Link to="/appointment">
//                   <button className="btn btn-primary p-1 mb-2">
//                     Book an Appointment
//                   </button>
//                 </Link>
//                 <Link to="/register">
//                   <button className="btn btn-primary p-1">
//                     New Registration
//                   </button>
//                 </Link>
//               </div>

//               {/* <div className="d-flex justify-center mb-2.5">
//                 <Link to="/register">
//                   <button className="btn btn-primary">New Registration</button>
//                 </Link>
//               </div> */}
//             </div>
//           </div>
//         </div>

//         <div className="card me-4 mb-5 col-lg-3 col-md-7 col-sm-7 col-10  p-3" data-aos="fade-down"
//      data-aos-easing="linear"
//      data-aos-duration="1500">
//           <img
//             src={emergency}
//             className="card-img-top w-100 h-60 "
//             alt="Emergency Management"
//           />
//           <div className="card-body">
//             <h5 className="card-title text-center">Emergency Management</h5>
//             <div className="available d-flex justify-content-between">
//               <strong className=" sm:text-xs md:text-sm lg:text-base text-xs">
//                 Opening Hours:
//               </strong>
//               <p className="ps-3 sm:text-xs md:text-sm lg:text-base text-xs">
//                 24 Hours: 7 days a week
//               </p>
//             </div>
//             <div className="ambulance d-flex justify-content-between">
//               <strong className=" sm:text-xs md:text-sm lg:text-base text-xs">
//                 Ambulance:{" "}
//               </strong>
//               <div className="flex sm:flex-col md:flex-row">
//                 <p className="ps-3 sm:text-xs md:text-sm lg:text-base text-xs">
//                   98031232111/
//                 </p>
//                 <p className="sm:ps-3 sm:text-xs md:text-sm lg:text-base text-xs">
//                   9803234222
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="card me-4 mb-5 col-lg-3 col-md-7 col-sm-7 col-10  p-3" data-aos="fade-left">
//           <img
//             src={telemedicine}
//             className="card-img-top w-100 h-60"
//             alt="Telemedicine"
//           />
//           <div className="card-body">
//             <h5 className="card-title text-center">Telemedicine</h5>
//             <div className="available  d-flex justify-content-between">
//               <strong className="sm:text-xs md:text-sm lg:text-base text-xs">
//                 Opening Hours:
//               </strong>
//               <p className="sm:text-xs md:text-sm lg:text-base text-xs">
//                 10 A.M - 5 P.M: SUN - FRI
//               </p>
//             </div>
//             <div className="dial d-flex justify-content-between">
//               <strong className="sm:text-xs md:text-sm lg:text-base text-xs">Further Info:</strong>
//               <span className="fa fa-ambulance sm:text-xs md:text-sm lg:text-base text-xs" >

//                 98031232111 / 9803234222
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import patient from "../assets/patient_mgmt.webp";
import emergency from "../assets/emergency.png";
import telemedicine from "../assets/telemedicine.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="services py-5">
      <h2 className="text-center pb-5 text-white" id="services">
        Our Services
      </h2>
      <div className="container d-flex flex-wrap justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-center mx-2.5">
        {/* Service1 */}
        <div
          className="card me-3 mb-5 col-lg-3 col-md-7 col-sm-7 col-10 p-3"
          data-aos="fade-right"
        >
          <img
            src={patient}
            className="card-img-top w-100 h-60"
            alt="Patient Management"
          />
          <div className="card-body">
            <Link to="service#patient" className="text-decoration-none">
              <h5 className="card-title text-center">Patient Management</h5>
            </Link>
            <br />
            <div className="features items-center">
              <div className="d-flex flex-col text-center">
                <Link to="/appointment">
                  <button className="btn btn-primary p-1 mb-2">
                    Book an Appointment
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn btn-primary p-1">
                    New Registration
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Service1 */}

        {/* Service2 */}
        <div
          className="card me-4 mb-5 col-lg-3 col-md-7 col-sm-7 col-10 p-3"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src={emergency}
            className="card-img-top w-100 h-60"
            alt="Emergency Management"
          />
          <div className="card-body">
            <Link to="service#emergency" className="text-decoration-none">
              <h5 className="card-title text-center">Emergency Management</h5>
            </Link>
            <div className="available d-flex justify-content-between">
              <strong className="sm:text-xs md:text-sm lg:text-base text-xs">
                Opening Hours:
              </strong>
              <p className="ps-3 sm:text-xs md:text-sm lg:text-base text-xs">
                24 Hours: 7 days a week
              </p>
            </div>
            <div className="ambulance d-flex justify-content-between">
              <strong className="sm:text-xs md:text-sm lg:text-base text-xs">
                Ambulance:{" "}
              </strong>
              <span className="ps-3 fa fa-ambulance sm:text-xs md:text-sm lg:text-base text-xs">
                98031232111 / 01-523415
              </span>
            </div>
          </div>
        </div>
        {/* Service2 */}

        {/* Service3 */}
        <div
          className="card me-4 mb-5 col-lg-3 col-md-7 col-sm-7 col-10 p-3"
          data-aos="fade-left"
        >
          <img
            src={telemedicine}
            className="card-img-top w-100 h-60"
            alt="Telemedicine"
          />
          <div className="card-body">
            <Link to="service#telemedicine" className="text-decoration-none">
              <h5 className="card-title text-center">Telemedicine</h5>
            </Link>
            <div className="available d-flex justify-content-between">
              <strong className="sm:text-xs md:text-sm lg:text-base text-xs">
                Opening Hours:
              </strong>
              <p className="sm:text-xs md:text-sm lg:text-base text-xs">
                10 A.M - 5 P.M: SUN - FRI
              </p>
            </div>
            <div className="dial d-flex justify-content-between">
              <strong className="sm:text-xs md:text-sm lg:text-base text-xs">
                Further Info:
              </strong>
              <span className="fa fa-ambulance sm:text-xs md:text-sm lg:text-base text-xs">
                98031232111 / 9803234222
              </span>
            </div>
          </div>
        </div>
        {/* Service3 */}
      </div>
    </div>
  );
};

export default Service;
