import React from "react";
import Navbar from "../components/Navbar"; // ✅ Import Navbar
import "../App.css"; // ✅ Updated Styles

const HomePage = () => {
  return (
    <>
      <Navbar /> {/* ✅ Navbar on Top */}

      
        {/* ✅ Hero Section */}
      

        {/* ✅ Video Background Card */}
        <div className="video-card">
          <video autoPlay loop muted playsInline className="background-video">
            <source src={process.env.PUBLIC_URL + "/cinema-bg.mp4"} type="video/mp4" />
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay">
            <h2>🎬 Experience Movies Like Never Before</h2>
            <p>Immerse yourself in stunning visuals and breathtaking sound.</p>
          </div>
        </div>

        {/* ✅ Features Section */}
        <section className="features">
          {/* 🎥 Milano Theater */}
          <div className="feature-card">
            <div className="image-card" style={{ backgroundImage:`url("/milano mul.jpg")`}}></div>

            <div className="feature-content">
              <h3>Milano Multiplex</h3>
              <p>Surat-Bardoli rd, Bardoli</p>
              <a href="https://www.google.com/maps/dir//Milano+Multiplex,+National+Highway+6,+Ten,+Bardoli,+Gujarat/@21.117349,73.0531992,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be06766af4d49f1:0xee7287ba615235f!2m2!1d73.094399!2d21.117354?entry=ttu" target="_blank" rel="noopener noreferrer">
                📍 View on Map
              </a>
            </div>
          </div>

          {/* 🎥 CineVerse Bardoli */}
          <div className="feature-card">
            <div className="image-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/cineverse.avif"})` }}></div>
            <div className="feature-content">
              <h3>CineVerse Cinema</h3>
              <p>Surat-Bardoli rd, Bardoli</p>
              <a href="https://www.google.com/maps/dir//CINEVERSE+CINEMA,+Surat+-+Bardoli+Rd,+Bardoli,+Gujarat+394601/@21.1180195,73.013499,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be067e02c1f7b49:0xe46fbb9fdea80fc8!2m2!1d73.0959007!2d21.1180394?entry=ttu" target="_blank" rel="noopener noreferrer">
                📍 View on Map
              </a>
            </div>
          </div>

          {/* 🎥 INOX VR Surat */}
          <div className="feature-card">
            <div className="image-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/inox.avif"})` }}></div>
            <div className="feature-content">
              <h3>INOX</h3>
              <p>Dumas Road, Surat</p>
              <a href="https://www.google.com/maps/dir//INOX+Leisure+Ltd.,+3rd+Floor,+VR+Mall,+Dumas+Rd,+Magdalla,+Rundh,+Gujarat+395007/@21.145765,72.6735627,11.97z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be0527ffdb1ef5f:0xa61b53697533a4be!2m2!1d72.7570907!2d21.145515?entry=ttu" target="_blank" rel="noopener noreferrer">
                📍 View on Map
              </a>
            </div>
          </div>
        </section>
  
    </>
  );
};

export default HomePage;
