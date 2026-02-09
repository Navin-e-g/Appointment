import React from "react";
import './Css/navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div><nav className="navbar">
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </nav></div>
      <div className="navbar-actions">
        <button className="login-button" onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
  );
}
export default Navbar;  