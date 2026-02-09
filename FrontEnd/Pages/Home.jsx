import React from "react";
import Navbar from '../Components/Navbar'; 
import './css/home.css'; 
import { useNavigate } from "react-router-dom";
import HomeContainer from '../Components/HomeContainer';
import SampleImage from '../src/assets/work.jpg';
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
        <div className="home-left">
          <HomeContainer
            image={SampleImage}
            title="Second Card"
            description="You can reuse this container as many times as needed."
            buttonText="Click Here"
            setHovered={setHovered}
            />
        </div>
        <div className="home-center">
          <HomeContainer
            image={SampleImage}
            title="Second Card"
            description="You can reuse this container as many times as needed."
            buttonText="Click Here"
            setHovered={setHovered}
          />
        </div>  
        <div className="home-right">  
          <HomeContainer
            image={SampleImage}
            title="Third Card"
            description="You can reuse this container as many times as needed."
            buttonText="Click Here"
            setHovered={setHovered}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;