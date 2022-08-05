import { useFormik } from "formik";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      try {
        const data = await axios.post("/auth/forgotpassword", values,{
          headers: {
            Authorization : window.localStorage.getItem("myapptoken")
          }
        });
        alert("please check your email")
        
        
      } catch (error) {
        console.log(error.response.data);
      }
    },
  });

  return (
    <div className="login_container">
      <div className="login_form-container">
        <h1>Please enter your valid email</h1>
        <form onSubmit={formik.handleSubmit} className="login_form">
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="login_input"
            placeholder="Email"
          />

          <button className="login_btn" type="submit">
            verify
          </button>
        </form>
        <div></div>
        <p>
          Back to
          <span className="login_footer">
            <Link to={"/login"}>Login..</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
