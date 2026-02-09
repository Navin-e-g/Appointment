import React from "react";
import './Css/homeContainer.css';
import { useNavigate } from "react-router-dom";
const HomeContainer = ({image,title,description,buttonText,setHovered}) => {
    const navigate = useNavigate();
    const goToAppointment = () => {
    navigate("/appointment");
  };
  return (   
    <div className="card"
      onMouseDownCapture={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
    >
      <img src={image} className="card-image" />

      <h2 className="card-title">{title}</h2>

      <p className="card-description">{description}</p>

      <button className="card-button" onClick={goToAppointment}>{buttonText}</button>
    </div>

  );
};

export default HomeContainer;