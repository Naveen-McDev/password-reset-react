import React from 'react'
import Navbar from '../../components/Navbar/Navbar';

const Home = ({isLoggedIn, handleLogout}) => {
  return (
    // Home page
    <div>
      {/* navbar component */}
      <Navbar isLoggedIn={isLoggedIn}  handleLogout={handleLogout}/>
      <h1 style={{textAlign : "center", marginTop: "200px", background: "wheat", padding: "50px"}}>This is Home page</h1>
    </div>
  )
}

export default Home;