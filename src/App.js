import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // function for logout
  const handleLogout = () => {
    window.localStorage.removeItem("myapptoken");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}
        />
        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
      </Routes>
    </div>
  );
}

export default App;
