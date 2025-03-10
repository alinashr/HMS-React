import React, { useState } from "react";
import Carousel from "../components/Carousel";
import i1 from "../assets/contact.png";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      } else if (value.trim().length < 3) {
        error = "Name must be atleast of 3 characters";
      } else {
        correct = "Valid";
      }
    }

    // Email validation
    else if (field === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email address";
      } else {
        correct = "Valid";
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
    setCorrects((prevCorrects) => ({ ...prevCorrects, [field]: correct }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(formData).every((val) => val !== "");

    if (isValid && Object.values(errors).every((err) => err === "")) {
      alert("Your message has been Submitted Successfully🙂", formData);
    } else {
      alert("Please fill out all fields correctly.");
    }
  };
  
  return (
    <>
      <div>
        <img
          src={i1}
          className ="d-block w-100"
          style={{ height: "90vh" }}
          alt="..."
        />
      </div>
      {/* Formpart */}
      <div className="First bg-blue-50 dark:bg-slate-800  py-5" id="contact">
        <div className=" second mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-20">
          {/* Open Third */}
          <div className="third mb-4 text-center">
            {/* <div className="mb-6 max-w-3xl text-center  md:mb-12">
                        <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                            Contact
                        </p>
                        <h2 className="font-heading mb-4 font-bold tracking-tight text-center text-gray-900 dark:text-white text-3xl sm:text-5xl">Get in Touch</h2>
                    </div> */}
          </div>{" "}
          {/* Close Third */}
          {/* Open Third*/}
          <div className=" third flex items-stretch container ">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center me-3 justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>

                    <div className="ml-4 mb-4 ">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Kathmandu, Nepal
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center me-3 justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>

                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mobile: +977 98387373733
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Email: myhospital@gmail.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center me-3 justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Available:{" "}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Sunday - Friday: 06:00 - 20:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">
                  Do You Have Any Query? 
                </h2>
                <h3 className="text-center">If Yes, Drop it down.</h3><br />
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="name" onChange={handleChange}
                        />
                        <span className="text-red-500">{errors.name}</span>
                        <span className="text-green-500">{corrects.name}</span>
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="email"  onChange={handleChange}
                        />
                        <span className="text-red-500">{errors.email}</span>
                        <span className="text-green-500">{corrects.email}</span>
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="3"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-blue-800 text-white px-2 py-3 font-xl sm:mb-0 !rounded-xl border-4"  onSubmit={handleSubmit}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Close Third */}
        </div>{" "}
        {/* Close Second */}
      </div>{" "}
      {/* /FIrs Close */}
    </>
  );
};

export default ContactUs;
