import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const data = await axios.post("/api/auth/register", values);
        alert(data.data.message);
        
      } catch (error) {
        alert(error.response.data.message)
      }
    },
  });

  return (
    <>
      <div className="register_container">
        <div className="register_form-container">
          <h1>Hello...</h1>
          <form onSubmit={formik.handleSubmit} className="register_form">
            <input
              id="name"
              name="name"
              type="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="register_input"
              placeholder="Name"
            />

            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="register_input"
              placeholder="Email"
            />

            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="register_input"
              placeholder="Password"
            />

            <button className="register_btn" type="submit">
              Register
            </button>
          </form>

          <p>
            Already a member?
            <span className="register_footer">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
