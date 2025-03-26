import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Navbar Styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🎬 MovieMagic</Link>
      </div>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/movies" onClick={() => setMenuOpen(false)}>Movies</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
