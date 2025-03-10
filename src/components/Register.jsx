import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    exampleInputPassword1: "",
    exampleInputPassword2: "",
  });

  const [errors, setErrors] = useState({});
  const [corrects, setCorrects] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    validateField(id, value);

    // if (id === "exampleInputPassword1" && formData.exampleInputPassword2) {
    //   validateField("exampleInputPassword2", formData.exampleInputPassword2);
    // }
  };

  const togglePasswordVisibility = (id) => {
    const pwdField = document.getElementById(id);
    pwdField.type = pwdField.type === "password" ? "text" : "password";
  };

  const validateField = (field, value) => {
    let error = "";
    let correct = "";

    // Name validation
    if (field === "fname" || field === "lname") {
      if (value.trim() === "") {
        error = "Required";
      } else if (value.trim().length < 3) {
        error = `${field === "fname" ? "First" : "Last"} name must be at least 3 characters`;
      } else {
        correct = "Valid";
      }
    }
    
    // Email validation
    else if (field === "email") {
      if(value===""){
        error = "Required";
      }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email address";
      } else {
        correct = "Valid";
      }
    } 
    
    // Password Validation
    else if (field === "exampleInputPassword1") {
      const errors = [];
      if (!/[A-Z]/.test(value))
        errors.push("Must have an uppercase letter");
      if (!/[a-z]/.test(value))
        errors.push("Must have a lowercase letter");
      if (!/[0-9]/.test(value))
        errors.push("Must have a digit");
      if (!/[!@#$%^&*(),.?\":{}|<>]/.test(value))
        errors.push("Must have a special character");
      if ((value).length<8)
        errors.push("Must have be 8 char");

      error = errors.join(", ");
      if (error === "")
         correct = "Valid";
    }
    
    // Confirm Password Validation
    else if (field === "exampleInputPassword2") {
      if (formData.exampleInputPassword1 !== value) {
        error = "Passwords don't match";
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
      alert("Your account has been registered successfully🙂", formData);
    }

    else{
      alert("Please fill up all the fields")
    }  
  };

  return (
    <form
      className="col-lg-4 col-md-6 col-sm-8 col-12 align-items-center border-top mx-auto px-4 border rounded-3"
      onSubmit={handleSubmit}
    >
      <h2 className="m-3 text-center">Register</h2>
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

      <div className="form-group mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <span className="text-danger">{errors.email}</span>
        <span className="text-success">{corrects.email}</span>
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
          required
        />
        <input
          type="checkbox"
          onClick={() => togglePasswordVisibility("exampleInputPassword1")}
        /> Show Password <br />
        <span className="text-danger">{errors.exampleInputPassword1}</span>
        <span className="text-success">{corrects.exampleInputPassword1}</span>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="exampleInputPassword2">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword2"
          placeholder="Confirm Password"
          value={formData.exampleInputPassword2}
          onChange={handleChange}
          required
        />
        <input
          type="checkbox"
          onClick={() => togglePasswordVisibility("exampleInputPassword2")}
        /> Show Password
        <span className="text-danger">{errors.exampleInputPassword2}</span>
        <span className="text-success">{corrects.exampleInputPassword2}</span>
      </div>

      <div className="d-flex">
        <small>Already registered?</small>
        <small>
          <a href="/login" className="text-decoration-none ms-2">
            Log in
          </a>
        </small>
      </div>

      <div className="text-center mt-3">
        <button type="submit" className="btn btn-primary mb-3">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Register;



