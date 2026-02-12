import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Css/Details.css";

function Details() {

  const location = useLocation();

  const { date, slot } = location.state || {};

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
Booking Confirmed!

Name: ${name}
Phone: ${phone}
Email: ${email}
Date: ${date}
Time: ${slot}
    `);
  };

  return (
    <div className="details-container">

      <h2>Fill Your Details</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Enter Phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p>
          📅 {date} | ⏰ {slot}
        </p>

        <button type="submit">
          Confirm Booking
        </button>

      </form>

    </div>
  );
}

export default Details;
