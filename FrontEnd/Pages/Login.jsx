import React from "react";
import './css/login.css'
function Login() {
  return (
    <div className="login-container">
      <div className="container">
        <form>
            <div>Username
            <input type="text"/></div>
            <div>Password
            <input type="password"/></div>
        </form>
      </div>
    </div>
  );
}

export default Login;