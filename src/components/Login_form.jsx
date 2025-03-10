import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login_form = () => {
  const [formData, setFormData] = useState({
    exampleInputEmail1: "",
    exampleInputPassword1: "",
  });

  const [errors, setErrors] = useState({});
  const [corrects, setCorrects] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    validateField(id, value);
  };

  const togglePasswordVisibility = (id) => {
    const pwdField = document.getElementById(id);
    pwdField.type = pwdField.type === "password" ? "text" : "password";
  };

  const validateField = (field, value) => {
    let error = "";
    let correct = "";

    // Email validation
    if (field === "exampleInputEmail1") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email address";
      } else {
        correct = "Valid";
      }
    }

    // Password Validation
    else if (field === "exampleInputPassword1") {
      const errors = [];
      if (!/[A-Z]/.test(value)) errors.push("Must have an uppercase letter");
      if (!/[a-z]/.test(value)) errors.push("Must have a lowercase letter");
      if (!/[0-9]/.test(value)) errors.push("Must have a digit");
      if (!/[!@#$%^&*(),.?\":{}|<>]/.test(value))
        errors.push("Must have a special character");
      if (value.length < 8) errors.push("Must have be 8 char");

      error = errors.join(", ");
      if (error === "") correct = "Valid";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
    setCorrects((prevCorrects) => ({ ...prevCorrects, [field]: correct }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(formData).every((val) => val !== "");

    if (isValid && Object.values(errors).every((err) => err === "")) {
      alert("You are logged in🙂", formData);
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  return (
    <>
      <form
        className="login col-lg-3 col-md-4 col-sm-6 col-6 align-items-center border-top mx-auto p-4 border rounded-3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center">Login</h2>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={formData.exampleInputEmail1}
            onChange={handleChange}
          />
          <span className="text-red-900">{errors.exampleInputEmail1}</span>
          <span className="text-green-900">{corrects.exampleInputEmail1}</span>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={formData.exampleInputPassword1}
            onChange={handleChange}
          />
          <input
            type="checkbox"
            onClick={() => togglePasswordVisibility("exampleInputPassword1")}
          />
          Show Password <br />
          <span className="text-red-900">{errors.exampleInputPassword1}</span>
          <span className="text-green-900">
            {corrects.exampleInputPassword1}
          </span>
        </div>

        <div className="div d-flex ">
          <small>Haven't registered yet?</small>
          <small>
            <Link to="/register" className="text-decoration-none ms-2">
              Sign Up
            </Link>
          </small>
        </div>

        <div className="text-center mt-3 ">
          <button type="submit" className="btn btn-primary mb-3">
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

export default Login_form;
