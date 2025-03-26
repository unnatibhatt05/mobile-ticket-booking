import React from "react";
import { motion } from "framer-motion";
import "../App.css"; // Ensure consistent styling
import Navbar from "../components/Navbar"; // Import Navbar

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container">
      <div className="about-content">
        {/* Left Section: Text */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>About Movie Magic</h2>
          <p>
            Welcome to <b>Movie Magic</b>, where cinema comes to life! We are
            passionate about bringing the best movie experiences, from timeless
            classics to the latest blockbusters.
          </p>
          <h3>🌟 Our Vision</h3>
          <p>
            At <b>Movie Magic</b>, we aim to create an immersive and
            unforgettable cinematic journey for every movie lover.
          </p>
          <h3>🎬 Why Choose Us?</h3>
          <ul>
            <li>🌟 A vast collection of movies</li>
            <li>🎟️ Seamless ticket booking experience</li>
            <li>🍿 Exclusive discounts & offers</li>
          </ul>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/image.png`}
            alt="Magic Movie Experience"
          />
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
