import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";


//login page
const Login = ({ setIsLoggedIn }) => {

  //navigation method from react-router-dom to navigate to other pages in the application
  const navigate = useNavigate();

  //formik for form submission
  const formik = useFormik({

    //initial values of the form
    initialValues: {
      email: "",
      password: "",
    },

    //on submission
    onSubmit: async (values) => {

      try {
        //login details are send via axios
        const data = await axios.post("/auth/login", values);
        //login confirmation alert
        alert(data.data.message);
        //token is stored in the local storage
        window.localStorage.setItem("myapptoken", data.data.token);
        //navigating to home page
        navigate("/");
        //navbar toggle using hook
        setIsLoggedIn(true);
      } catch (error) {
        //error message is shown via alert
        alert(error.response.data.message);
      }
    },
  });

  return (
    <>
      <div className="login_container">
        <div className="login_form-container">
          {/* title */}
          <h1>Welcome Back</h1>

          {/* form */}
          <form onSubmit={formik.handleSubmit} className="login_form">

            {/* email for login */}
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="login_input"
              placeholder="Email"
            />

            {/* password for login */}
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="login_input"
              placeholder="Password"
            />

            {/* login submission button */}
            <button className="login_btn" type="submit">
              Login
            </button>
          </form>
          <div>

            {/* forgot password */}
            <Link to={"/forgotpassword"} className="login_forgotPassword">
              {" "}
              Forgot Password?{" "}
            </Link>
          </div>
          <p>
            New Here?
            <span className="login_footer">

              {/* navigating to register page in the application */}
              <Link to={"/register"}>Register..</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
