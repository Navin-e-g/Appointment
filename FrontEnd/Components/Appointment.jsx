import React, { useState } from "react";
import "./Css/Appointment.css";
import { useNavigate } from "react-router-dom";

function Appointment() {

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const navigate = useNavigate();

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  const selectSlot = (slot) => {
    setSelectedSlot(slot);
  };

  // When clicking Book Now
  const handleBookNow = () => {
    navigate("/details", {
      state: {
        date: selectedDate,
        slot: selectedSlot
      }
    });
  };

  return (
    <div className="container">

      <h2>Appointment Booking</h2>

      {/* Date Picker */}
      <label>Select Date</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      {/* Slots */}
      <h3>Available Time Slots</h3>

      <div className="slots">
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className={`slot ${selectedSlot === slot ? "selected" : ""}`}
            onClick={() => selectSlot(slot)}
          >
            {slot}
          </div>
        ))}
      </div>

      {/* Book Now Button */}
      {selectedDate && selectedSlot && (
        <button
          className="book-btn"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      )}

    </div>
  );
}

export default Appointment;

