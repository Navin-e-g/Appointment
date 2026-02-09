import React from "react";
import './css/login.css'
import { useNavigate } from "react-router-dom";
import bgimage from "../src/assets/login.jpg";
function Login() {
  const Signup = useNavigate('');
  return (
    <div className="login-container" style={{ backgroundImage: `url(${bgimage})` }}>
      <div className="container">
        <form>
            <div>Username
            <input type="text"/></div>
            <div>Password
            <input type="password"/></div>
        </form>
        <button className="login-button" onClick={() => Signup('/')}>Login</button>
        <p>Don't have an account? </p>
        <button className="register-button" onClick={() => Signup('/signup')}>Sign In</button>
      </div>
    </div>
  );
}

export default Login;