import { useFormik } from "formik";
import axios from "axios";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  // navigation method from react-router-dom
  const navigate = useNavigate();

  // formik npm for form submission and validation
  const formik = useFormik({
    // form initial values
    initialValues: {
      email: "",
      newpassword: "",
      confirmnewpassword: "",
    },

    // on form submission
    onSubmit: async (values) => {
      try {
        // input send using axios npm
        const data = await axios.post("/auth/resetpassword", values, {
          headers: {
            // token stored in the local storage
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        });

        // navigation to login page of the application
        navigate("/login");
      } catch (error) {
        //error message is show in alert box
        alert(error.response.data.message);
      }
    },
  });

  //taking token from the url using useLocation method from react-router-dom
  const token = useLocation()
    .search.slice(0, useLocation().search.length)
    .split("=")
    .pop();

  // if token is not present in the url
  if (!token) {
    return <h1>Token Not Present</h1>;
  }

  return (
    <div className="login_container">
      <div className="login_form-container">
        {/* title */}
        <h1>Please enter your valid email</h1>

        {/* form */}
        <form onSubmit={formik.handleSubmit} className="login_form">
          {/* email input */}
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="login_input"
            placeholder="Email"
          />

          {/* new password input */}
          <input
            id="newpassword"
            name="newpassword"
            type="newpassword"
            onChange={formik.handleChange}
            value={formik.values.newpassword}
            className="login_input"
            placeholder="New password"
          />

          {/* confirm new password input */}
          <input
            id="confirmnewpassword"
            name="confirmnewpassword"
            type="confirmnewpassword"
            onChange={formik.handleChange}
            value={formik.values.confirmnewpassword}
            className="login_input"
            placeholder="Confirm Newpassword"
          />

          {/* form submission button */}
          <button className="login_btn" type="submit">
            Reset
          </button>
        </form>

        <div></div>
        <p>
          Back to
          <span className="login_footer">
            {/* navigation to login page of the application */}
            <Link to={"/login"}>Login..</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
