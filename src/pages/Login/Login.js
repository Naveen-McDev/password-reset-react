import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const data = await axios.post("/auth/login", values);
        alert(data.data.message);
        window.localStorage.setItem("myapptoken", data.data.token);
        navigate("/");
        setIsLoggedIn(true);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });

  return (
    <>
      <div className="login_container">
        <div className="login_form-container">
          <h1>Welcome Back</h1>
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

            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="login_input"
              placeholder="Password"
            />

            <button className="login_btn" type="submit">
              Login
            </button>
          </form>
          <div>
            <Link to={"/forgotpassword"} className="login_forgotPassword">
              {" "}
              Forgot Password?{" "}
            </Link>
          </div>
          <p>
            New Here?
            <span className="login_footer">
              <Link to={"/register"}>Register..</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
