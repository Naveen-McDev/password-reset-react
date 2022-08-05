import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const VerifyEmail = () => {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState();

  // picking the token from the url using useLocation method from react-router-dom
  const token = useLocation()
    .search.slice(0, useLocation().search.length)
    .split("=")
    .pop();
  
    // if token is not present
  if (!token) {
    return <h1 style={{textAlign: "center"}}>Token Not Present</h1>;
  }

  return (
    <div className="login_container">
      <div className="login_form-container">
        <h1 style={{textAlign: "center"}}>

          {/* show message */}
            {
                verified && !error ? "You are Verified" :
                error ? error :
                "Verifying Please Wait...."
            }
        </h1>
      </div>
    </div>
  );
};

export default VerifyEmail;
