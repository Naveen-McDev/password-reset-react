import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const VerifyEmail = () => {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState();

  const token = useLocation()
    .search.slice(0, useLocation().search.length)
    .split("=")
    .pop();
  console.log(token);
  if (!token) {
    return <h1 style={{textAlign: "center"}}>Token Not Present</h1>;
  }

  return (
    <div className="login_container">
      <div className="login_form-container">
        <h1 style={{textAlign: "center"}}>
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
