import React from "react";
import Navbar from '../Components/Navbar'; 
import HomeCarousel from '../Components/Carousel';
import './css/home.css'; 
import { useNavigate } from "react-router-dom";
import bgimage from '../src/assets/Home1.jpg';
import { useState } from "react";
function Home() {
  const gotoLogin = useNavigate();
  const [hovered,setHovered] = useState(false);
  const goToAppointment = () => {
    navigate("/appointment");
  };
  return (
    <div className={`home-container ${hovered ? "blur-bg" : ""}`} style={{ backgroundImage: `url(${bgimage})` }}>
      <div className="home-header">
        <Navbar />  
      </div>
      <div className="homecont">
        <HomeCarousel setHovered={setHovered} />
      </div>
    </div>
  );
}

export default Home;