import * as React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* logo */}
        <h2>Auth_Mern</h2>
      </div>
      <ul className="app__navbar-links">
        {/* navbar content toggle */}
        {isLoggedIn
          ? // if logged in
            ["logout"].map((item) => (
              //nav links
              <li className="app__flex p-text" key={`link-${item}`}>
                <Link to={"/login"} onClick={() => handleLogout()}>
                  {item}
                </Link>
              </li>
            ))
          : //if logged out
            ["login", "register"].map((item) => (
              //nav links
              <li className="app__flex p-text" key={`link-${item}`}>
                <Link to={`/${item}`}>{item}</Link>
              </li>
            ))}
      </ul>
    </nav>
  );
};

export default Navbar;
