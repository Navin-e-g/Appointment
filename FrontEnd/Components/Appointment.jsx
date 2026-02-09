import React, { useState } from "react";
import "./Css/Appointment.css";

function Appointment() {

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  const selectSlot = (slot) => {
    setSelectedSlot(slot);
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

      {/* Result */}
      {selectedDate && selectedSlot && (
        <div className="result">
          Appointment Booked on <br />
          {selectedDate} at {selectedSlot}
        </div>
      )}

    </div>
  );
}

export default Appointment;
