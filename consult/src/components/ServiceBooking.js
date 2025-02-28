import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ServiceBooking.css";

const availableSlots = {
  "brake-service": ["10:00 AM", "12:00 PM", "3:00 PM"],
  "wheel-alignment": ["11:00 AM", "2:00 PM"],
  "engine-diagnostics": ["9:00 AM", "1:00 PM", "4:00 PM"],
  "oil-change": ["8:00 AM", "11:00 AM"],
  "battery-replacement": ["10:30 AM", "1:30 PM"],
  "transmission-repair": ["9:30 AM", "2:30 PM"],
  "ac-repair": ["12:30 PM", "4:30 PM"],
  "auto-glass-replacement": ["10:45 AM", "3:15 PM"],
};

const ServiceBooking = () => {
  const { serviceName } = useParams();
  const formattedService = serviceName.replace(/-/g, " ");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [message, setMessage] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    
    // Get available slots for the selected service
    const slots = availableSlots[serviceName] || [];

    if (slots.includes(selectedSlot)) {
      setMessage(`✅ Booking confirmed for ${formattedService} at ${selectedSlot}`);
    } else {
      setMessage(`❌ Slot not available. Please choose a different time.`);
    }
  };
    return (
        <section className="service-booking">
          <div className="booking-container">
            <h2>Book {formattedService}</h2>
            <form onSubmit={handleBooking}>
              <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </label>
              <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </label>
              <label>
                Select Time Slot:
                <select value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)} required>
                  <option value="">Select a slot</option>
                  {(availableSlots[serviceName] || []).map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </select>
              </label>
              <button type="submit">Confirm Booking</button>
            </form>
            {message && <p className="booking-message">{message}</p>}
          </div>
        </section>
      );
};

export default ServiceBooking;
