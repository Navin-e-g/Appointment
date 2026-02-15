import React, { useState } from "react";
import "./css/partnerSetup.css";

function PartnerSetup() {

  const [formData, setFormData] = useState({
    businessName: "",
    location: "",
    openTime: "",
    closeTime: "",
    slotInterval: "30",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Partner Details:", formData);

    alert("Business profile created successfully!");

    // Later: send to backend
  };

  return (
    <div className="partner-container">

      <h2>Complete Your Business Profile</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          required
          onChange={handleChange}
        />

        <label>Opening Time</label>
        <input
          type="time"
          name="openTime"
          required
          onChange={handleChange}
        />

        <label>Closing Time</label>
        <input
          type="time"
          name="closeTime"
          required
          onChange={handleChange}
        />

        <label>Slot Interval (minutes)</label>
        <select
          name="slotInterval"
          onChange={handleChange}
        >
          <option value="15">15 min</option>
          <option value="30">30 min</option>
          <option value="45">45 min</option>
          <option value="60">60 min</option>
        </select>

        <textarea
          name="description"
          placeholder="Describe your services"
          onChange={handleChange}
        />

        <button type="submit">
          Save Profile
        </button>

      </form>

    </div>
  );
}

export default PartnerSetup;
