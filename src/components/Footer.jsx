import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactnum: "",
  });

  const [errors, setErrors] = useState({});
  const [corrects, setCorrects] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    validateField(id, value);
  };

  const validateField = (field, value) => {
    let error = "";
    let correct = "";

    if (field === "name") {
      if (value.trim() === "") {
        error = "Name is required";
      }
       else if (value.trim().length < 3) {
        error = "Name must be atleast of 3 characters";
      }
       else {
        correct = "Valid";
      }
    } else if (field === "contactnum") {
      if (!/^\d{10}$/.test(value)) {
        error = "Contact number must be 10 digits";
      } else {
        correct = "Valid";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
    setCorrects((prevErrors) => ({ ...prevErrors, [field]: correct }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const isValid = Object.values(formData).every((val) => val !== "");

    if (isValid && Object.values(errors).every((err) => err === "")) {
      alert("Thankyou! We will get back to you soon😃", formData);
    }
  };

  return (
    <>
      <div className="footer px-5 pt-5">
        <footer className="">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 lg:!pt-0 md:pt-5 sm:pt-5 pt-4">
              <h3>Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.663002818675!2d85.32087257754769!3d27.665896286293346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000a4f32cf%3A0x53f71813950137ff!2sEvolve%20IT%20Hub%20Nepal!5e0!3m2!1sen!2snp!4v1737203153527!5m2!1sen!2snp"
                width="250"
                height="200"
                // style="border: 0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="lg:w-[200px] md:w-[200px]"
              ></iframe>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 lg:!pt-0 md:pt-5 sm:pt-5 pt-4">
              <h3>Contact</h3>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-body-secondary">
                    Mahalaxmisthan, Lalitpur
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-body-secondary">
                    <b>Email:</b> info@myhospital.com
                  </Link>
                </li>

                <li className="nav-item mb-2">
                  <a
                    href="tel:+97798783172483"
                    className="nav-link p-0 text-body-secondary"
                  >
                    <b>Customer Care:</b> +977-98783172483
                  </a>
                </li>

                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-body-secondary">
                    <b>Customer Care:</b> +977-98783172483
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-3 lg:!pt-0 md:pt-5 sm:pt-5 pt-4">
              <h3>Our Services</h3>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-body-secondary">
                    Emergency Services
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-body-secondary">
                    Pharmacy
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-body-secondary">
                    Appointment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Enquiry Form Field */}
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 lg:!pt-0 md:pt-5 sm:pt-5 pt-4">
              <h3>Get in Touch with Us</h3>
              <form className="border rounded-3 p-1 " onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleChange}
                    required
                  />
                  <span className="text-red-700">{errors.name}</span>
                  <span className="text-green-700">{corrects.name}</span>
                </div>
                <div className="form-group mb-2">
                  <input
                    type="tel"
                    className="form-control"
                    id="contactnum"
                    value={formData.contactnum}
                    placeholder="Enter your number"
                    onChange={handleChange}
                    required
                  />
                  <span className="text-red-700">{errors.contactnum}</span>
                  <span className="text-green-700">{corrects.contactnum}</span>
                </div>
                <div className="form-group mb-2">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Drop Your Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary text-center">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="text-center justify-content-between pt-3 mt-5 border-top">
            <p>&copy; 2025 Company, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
