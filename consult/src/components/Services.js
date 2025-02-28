import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const servicesList = [
  "Brake Service",
  "Wheel Alignment",
  "Engine Diagnostics",
  "Oil Change",
  "Battery Replacement",
  "Transmission Repair",
  "AC Repair",
  "Auto Glass Replacement",
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <Link to={`/book/${service.replace(/\s+/g, "-").toLowerCase()}`} key={index} className="service-box">
            {service}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
