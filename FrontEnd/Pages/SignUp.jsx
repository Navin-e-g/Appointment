import React from "react";
import { useState } from "react";
import { X } from 'react-feather';
import './css/sign.css';
import Navbar from "../Components/Navbar";
import bgimage from '../src/assets/signUp1.jpg';
const Signup = () => {
  const [showForm,setShowForm] = useState(false);
  const handleGetStarted = () => {
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
     <div className="signup-container" style={{ backgroundImage: `url(${bgimage})` }}>
      
      <div className="signup-header">
      </div>
      <div className="background-image">
        <div className="overlay" />
      </div>
      <div className="main-content">
        {/* Hero Content */}
        <div className={`hero-section ${showForm ? 'shrink' : ''}`}>
          <div className="hero-text">
            <h1>Welcome to the Future</h1>
            <p>
              Join thousands of innovators who are already transforming their ideas into reality. 
              Start your journey with us today and unlock unlimited possibilities.
            </p>
            {!showForm && (
              <button className="get-started-btn" onClick={handleGetStarted}>
                Get Started
              </button>
            )}
            <p className="signin-link">Already have an account? <a href="/login">Sign in</a></p>
          </div>
        </div>

        {/* Signup Form */}
        <div className={`form-panel ${showForm ? 'visible' : 'hidden'}`}>
          <div className="form-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="close-btn" onClick={handleCloseForm}>
              <X size={20} />
            </div>
            <h2>Create Your Account</h2>
            <p className="description">Join our community and start your journey today</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
              </div>

              <div className="checkbox-group">
                <input type="checkbox" id="terms" name="terms" required />
                <label htmlFor="terms">
                  I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className="submit-btn">Create Account</button>

              <div className="signin-link">
                Already have an account? <a href="#">Sign in</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {showForm && <div className="mobile-backdrop" onClick={handleCloseForm} />}
    </div>
  );
}

export default Signup;