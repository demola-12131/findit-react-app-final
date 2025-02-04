import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";

const HomePage = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">FindIt</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h2>Find your missing items quickly!</h2>
        <p>Our service helps you locate lost and found items in no time.</p>
      </header>

      {/* About Us Section */}
      <section className="about">
        <h3>About Us</h3>
        <div className="about-boxes">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <div className="about-text">
          <p>Locate Lost Items</p>
          <p>Report Found Items</p>
          <p>Connect with People</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step">
            <h4>Looking for something?</h4>
            <ul>
              <li>Report an Item</li>
              <li>Search with Filters</li>
              <li>Compare Pictures</li>
              <li>Receive Alerts</li>
            </ul>
          </div>
          <div className="step">
            <h4>Found something?</h4>
            <ul>
              <li>File a Found Report</li>
              <li>Share with Others</li>
              <li>Confirm Details</li>
              <li>Return Safely</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call-to-Action Buttons */}
      <section className="cta">
        <button className="btn">Click Here!</button>
        <p>Looking for something?</p>
        <p>Found something? Let us know!</p>
        <button className="btn">Click Here!</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <h4>FindIt</h4>
        <p>CORE - Lost & Found Service</p>
        <div className="social-links">
          <span>Instagram</span>
          <span>Facebook</span>
        </div>
        <p>+123 456 7890</p>
        <p>info@findit.com</p>
        <p className="copyright">Copyright (c) 2025. All rights reserved.</p>
      </footer>
    </div>
  );
};

const AboutPage = () => (
  <div className="page">
    <h2>About Us</h2>
  </div>
);
const ServicesPage = () => (
  <div className="page">
    <h2>Our Services</h2>
  </div>
);
const ContactPage = () => (
  <div className="page">
    <h2>Contact Us</h2>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
