import { useFormik } from "formik";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {

  //formik for form submission
  const formik = useFormik({

    //initial values
    initialValues: {
      email: "",
    },

    //on Submit
    onSubmit: async (values) => {
      try {

        //sending the input via axios
        const data = await axios.post("/api/auth/forgotpassword", values, {
          //token is send for authorization of the task
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        });

        //the reset password verification token is send to the email and given alert
        alert("please check your email");
      } catch (error) {

        //the error is show in the alert
        alert(error.response.data.message);
      }
    },
  });

  return (
    <div className="login_container">
      <div className="login_form-container">
        {/* title */}
        <h1>Please enter your valid email</h1>

        {/* input form */}
        <form onSubmit={formik.handleSubmit} className="login_form">

          {/* email */}
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="login_input"
            placeholder="Email"
          />
          {/* submit button */}
          <button className="login_btn" type="submit">
            verify
          </button>
        </form>
        <div></div>
        <p>
          Back to
          {/* link to navigate to the login page */}
          <span className="login_footer">
            <Link to={"/login"}>Login..</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
