import * as React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2>Auth_Mern</h2>
      </div>
      <ul className="app__navbar-links">
        {isLoggedIn
          ? ["logout"].map((item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <Link to={'/login'} onClick={()=>handleLogout()}>{item}</Link>
              </li>
            ))
          : ["login", "register"].map((item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <Link to={`/${item}`}>{item}</Link>
              </li>
            ))}
      </ul>
    </nav>
  );
};

export default Navbar;
