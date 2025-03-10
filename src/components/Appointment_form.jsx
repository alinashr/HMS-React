import React, { useState } from "react";

const Appointment_form = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    contactnum: "",
    dateTime: "",
    address: "",
    department: "",
    specialist: "",
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

    if (field === "fname") {
      if (value.trim() === "") {
        error = "First name is required";
      } else if (value.trim().length < 3) {
        error = "First name must be at least 3 characters";
      } else {
        correct = "Valid";
      }
    } else if (field === "lname") {
      if (value.trim() === "") {
        error = "Last name is required";
      } else if (value.trim().length < 3) {
        error = "Last name must be at least 3 characters";
      } else {
        correct = "Valid";
      }
    } else if (field === "contactnum") {
      if (!/^\d{10}$/.test(value)) {
        error = "Contact number must be 10 digits";
      } else {
        correct = "Valid";
      }
    } else if (field === "dateTime") {
      const selectedDateTime = new Date(value);
      const currentDateTime = new Date();

      if (value === "") {
        error = "Please select a date and time";
      } else if (selectedDateTime < currentDateTime) {
        error = "The selected date and time must be in the future";
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
      alert("Appointment Form Has Been Submitted Successfully 🙂");
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  return (
    
    <form
      className="col-lg-4 col-md-6 col-sm-6 col-xs-12 appointment px-3 border-top mx-auto pr-5 pt-3 border rounded-3 shadow"
      onSubmit={handleSubmit}
    >
      <h2 className="m-3 text-center">Appointment</h2>

      {/* First & Last Name */}
      <div className="form-group mb-3 d-flex">
        <div className="first me-2">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="fname"
            placeholder="Enter name..."
            value={formData.fname}
            onChange={handleChange}
            required
          />
          <span className="text-danger">{errors.fname}</span>
          <span className="text-success">{corrects.fname}</span>
        </div>

        <div className="last">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lname"
            placeholder="Enter name"
            value={formData.lname}
            onChange={handleChange}
            required
          />
          <span className="text-danger">{errors.lname}</span>
          <span className="text-success">{corrects.lname}</span>
        </div>
      </div>

      {/* Address */}
      <div className="form-group mb-3">
        <label htmlFor="address">Address</label>
        <select
          id="address"
          className="border rounded-1 p-1 dropdown form-control"
          value={formData.address}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select City</option>
          <option value="Kathmandu">Kathmandu</option>
          <option value="Bhaktapur">Bhaktapur</option>
          <option value="Lalitpur">Lalitpur</option>
        </select>
      </div>

      {/* Contact */}
      <div className="form-group mb-3">
        <label htmlFor="contactnum">Contact</label>
        <input
          type="tel"
          className="form-control"
          id="contactnum"
          placeholder="Enter your number"
          value={formData.contactnum}
          onChange={handleChange}
          required
        />
        <span className="text-danger">{errors.contactnum}</span>
        <span className="text-success">{corrects.contactnum}</span>
      </div>

      {/* Department */}
      <div className="form-group mb-3">
        <label htmlFor="department">Department</label>
        <select
          id="department"
          className="border rounded-1 p-1 dropdown form-control"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Department</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Oncology">Oncology</option>
          <option value="Dermatology">Dermatology</option>
        </select>
      </div>

      {/* Specialist */}
      <div className="form-group mb-3">
        <label htmlFor="specialist">Specialist</label>
        <select
          id="specialist"
          className="border rounded-1 p-1 dropdown form-control"
          value={formData.specialist}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Specialist</option>
          <option value="Dr.Name1">Dr. Name1</option>
          <option value="Dr.Name2">Dr. Name2</option>
          <option value="Dr.Name3">Dr. Name3</option>
        </select>
      </div>

      {/* Date & Time Selection */}
      <div className="form-group mb-3">
        <label htmlFor="dateTime" className="form-label">Schedule</label>
        <input
          type="datetime-local"
          className="form-control"
          id="dateTime"
          value={formData.dateTime}
          min={new Date().toISOString().slice(0, 16)} // Prevents past dates
          onChange={handleChange}
          required
        />
        <span className="text-danger">{errors.dateTime}</span>
        <span className="text-success">{corrects.dateTime}</span>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-3">
        <button type="submit" className="btn btn-primary mb-3">
          Book an Appointment
        </button>
      </div>
    </form>

    
  );
};

export default Appointment_form;
