import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Get in Touch with Us</h2>
        <p>Have questions or need assistance? We're here to help! Reach out to us, and our team will get back to you as soon as possible.</p>

        <p><strong>📍 Address:</strong> 31-B, Paari Nagar, Palayapalayam(Behind Sakthi Mahal), Erode - 638011</p>
        <p><strong>📞 Phone:</strong> +91 9578749449</p>
        <p><strong>✉️ Email:</strong> support@yourbusiness.com</p>

        {submitted ? (
          <p className="success-message">Thank you! Our team will respond shortly.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Full Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Phone Number:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />

            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required />

            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
