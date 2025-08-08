import React from "react";
import Navbar from '../Components/Navbar'; 
import './css/home.css'; 
import { useNavigate } from "react-router-dom";
function Home() {
  const gotoLogin = useNavigate();
  return (
    <div className="home-container">
      <div className="home-header">
        <Navbar />  
        <button className="home-button" onClick={() => gotoLogin('/login')}>Login</button>
      </div>
    </div>
  );
}

export default Home;