import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import ServiceBooking from "./components/ServiceBooking";  // Import Booking Component
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/book/:serviceName" element={<ServiceBooking />} />  {/* Booking Page Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
