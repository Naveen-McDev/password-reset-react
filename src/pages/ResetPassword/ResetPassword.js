import { useFormik } from "formik";
import axios from "axios";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
    
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      newpassword: "",
      confirmnewpassword: "",
    },
    onSubmit: async (values) => {
     

      try {
        const data = await axios.post("/auth/resetpassword", values, {
          headers: {
            Authorization : window.localStorage.getItem("myapptoken")
          }});
        console.log(data.data);
        navigate('/login')
      } catch (error) {
        console.log(error.response.data);
      }
    },
  });
  const token = useLocation().search.slice(0, useLocation().search.length).split("=").pop();
  console.log(token)
  if(!token) {
    return <h1>Token Not Present</h1>
  }
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
          <input
            id="newpassword"
            name="newpassword"
            type="newpassword"
            onChange={formik.handleChange}
            value={formik.values.newpassword}
            className="login_input"
            placeholder="New password"
          />
          <input
            id="confirmnewpassword"
            name="confirmnewpassword"
            type="confirmnewpassword"
            onChange={formik.handleChange}
            value={formik.values.confirmnewpassword}
            className="login_input"
            placeholder="Confirm Newpassword"
          />

          <button className="login_btn" type="submit">
            Reset
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

export default ResetPassword;
