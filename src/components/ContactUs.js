import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css"; // Ensure styling is consistent with About Us
import Navbar from "../components/Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  // Use public folder image via its src path
  const contactImage = "/contact.png";

  return (
    <>
    <Navbar/>
    <div className="about-container">
      <div className="about-content">
        {/* Left Section: Image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={contactImage} alt="Contact Us" />
        </motion.div>

        {/* Right Section: Contact Form */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </div>
            <motion.button 
              whileTap={{ scale: 0.98 }} 
              type="submit" 
              className="contact-button"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
