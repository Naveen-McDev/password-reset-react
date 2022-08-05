import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./register.css";

// register page

const Register = () => {

  // formik
  const formik = useFormik({

    //initial form value
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    //on form submission
    onSubmit: async (values) => {
      try {
        
        // data posted to db using axios
        const data = await axios.post("/api/auth/register", values);

        // success message is show in the alert
        alert(data.data.message);
        
      } catch (error) {

        //error message is shown in the alert
        alert(error.response.data.message)
      }
    },
  });

  return (
    <>
      <div className="register_container">
        <div className="register_form-container">
          {/* title */}
          <h1>Hello...</h1>

          {/* form */}
          <form onSubmit={formik.handleSubmit} className="register_form">

            {/* name input */}
            <input
              id="name"
              name="name"
              type="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="register_input"
              placeholder="Name"
            />

{/* email input */}
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="register_input"
              placeholder="Email"
            />

{/* password input */}
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="register_input"
              placeholder="Password"
            />
{/* register button */}
            <button className="register_btn" type="submit">
              Register
            </button>
          </form>

          <p>
            Already a member?
            <span className="register_footer">

              {/* navigation to login page in the application */}
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
