import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-box">Brake Service</div>
        <div className="service-box">Wheel Alignment</div>
        <div className="service-box">Engine Diagnostics</div>
        <div className="service-box">Oil Change</div>
        <div className="service-box">Battery Replacement</div>
        <div className="service-box">Transmission Repair</div>
        <div className="service-box">AC Repair</div>
        <div className="service-box">Auto Glass Replacement</div>
      </div>
    </section>
  );
};

export default Services;
