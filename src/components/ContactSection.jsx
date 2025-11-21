// src/components/ContactSection.jsx
import React, { useState } from "react";

// Social icons (assume these files live in the same folder as this component)
import fbIcon from "./fb.png";
import igIcon from "./social.png";
import twIcon from "./Ig.png";
import liIcon from "./whatsapp.png";
import logo from "./logo.jpg";

import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with real submission logic if needed
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  // <-- Use the uploaded path you previously provided here.
  const uploadedLogoUrl = "./logo.jpg";

  return (
    <>
      <section id="contact" className="section contact-section">
        <div className="contact-inner">
          <div className="section-header">
            <h2 className="section-title">Contact me</h2>
            <p className="section-sub">Cultivating connections. Reach out and connect with me.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="grid">
              <div className="left-col">
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="input-underline" />
                </div>

                <div className="input-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <div className="input-underline" />
                </div>
              </div>

              <div className="right-col">
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="input-underline" />
                </div>

                <div className="input-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Service of Interest</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Branding">Branding</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Design">App Design</option>
                  </select>
                  <div className="input-underline" />
                </div>
              </div>
            </div>

            <div className="input-group textarea">
              <textarea
                name="message"
                placeholder="Project Details"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div className="input-underline" />
            </div>

            <div className="send-row">
              <button type="submit" className="btn send-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="logo-wrap">
                <img src={logo} alt="WhatsApp" className="footer-logo" />
             
            </div>

            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="social-row" aria-hidden="false">
              <a href="#" className="soc" aria-label="Facebook">
                <img src={fbIcon} alt="Facebook" className="soc-img" />
              </a>
              <a href="#" className="soc" aria-label="Instagram">
                <img src={igIcon} alt="Instagram" className="soc-img" />
              </a>
              <a href="#" className="soc" aria-label="Twitter">
                <img src={twIcon} alt="Twitter" className="soc-img" />
              </a>
              <a href="#" className="soc" aria-label="WhatsApp">
                <img src={liIcon} alt="WhatsApp" className="soc-img" />
              </a>
            </div>

            <div className="footer-contact">
              <a className="contact-link" href="mailto:nkibongkingsley@gmail.com">
                <svg className="contact-icon" width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M1 2H23V16H1V2Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 2L12 10L23 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>nkibongkingsley@gmail.com</span>
              </a>

              <a className="contact-link" href="tel:+2347068270023">
                <svg className="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22 16.92V21A1 1 0 0 1 21 22C9.954 22 2 14.046 2 3A1 1 0 0 1 3 2H7.09A1 1 0 0 1 8.06 2.44L10.6 5.36A1 1 0 0 1 10.34 7.05L9.27 9.93A16.01 16.01 0 0 0 14.07 14.73L16.95 13.66A1 1 0 0 1 18.64 13.4L21.56 15.94A1 1 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>07068270023</span>
              </a>
            </div>

            <div className="contact-underline" />
          </div>

          <div className="footer-bottom">
            <div className="divider" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
