import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEventSeat } from "react-icons/md";
import "../App.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const rows = 5; // Number of seat rows
const cols = 8; // Seats per row
const reservedSeats = ["2B", "3D", "4F", "5A", "1H"];

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const toggleSeat = (seat) => {
    if (reservedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleProceedToCheckout = () => {
    if (selectedSeats.length > 0) {
      navigate(`/checkout`, { state: { seats: selectedSeats } });
    }
  };

  return (
    
      <motion.div 
        className="seat-selection-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="outer-card">
          <h2 className="seat-title">Select Your Seats</h2>

          {/* ✅ Adjusted Black Box */}
          <motion.div 
            className="inner-seat-card"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="screen"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              🎬 Screen
            </motion.div>

            {/* ✅ Seat Grid - Adjusted Size */}
            <div className="seats-grid">
              {Array.from({ length: rows }).map((_, rowIndex) => (
                <div key={rowIndex} className="seat-row">
                  {Array.from({ length: cols }).map((_, colIndex) => {
                    const seatNumber = `${rowIndex + 1}${String.fromCharCode(65 + colIndex)}`;
                    const isReserved = reservedSeats.includes(seatNumber);
                    const isSelected = selectedSeats.includes(seatNumber);

                    return (
                      <motion.div
                        key={seatNumber}
                        className={`seat ${isReserved ? "reserved" : isSelected ? "selected" : "available"}`}
                        onClick={() => toggleSeat(seatNumber)}
                        whileTap={{ scale: 0.9 }}
                      >
                        <MdEventSeat className="seat-icon" />
                        <span className="seat-number">{seatNumber}</span>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ✅ Seat Legend */}
          <div className="legend">
            <div className="legend-item">
              <MdEventSeat className="seat-icon available-icon" /> <span>Available</span>
            </div>
            <div className="legend-item">
              <MdEventSeat className="seat-icon selected-icon" /> <span>Selected</span>
            </div>
            <div className="legend-item">
              <MdEventSeat className="seat-icon reserved-icon" /> <span>Reserved</span>
            </div>
          </div>

          {/* ✅ Selected Seats Info */}
          <motion.div className="selected-seats">
            <h3>Selected Seats: {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</h3>
          </motion.div>

          {/* ✅ Proceed Button */}
          
        </div>
        {/* ✅ Proceed to Checkout Button */}
<motion.div className="checkout_container">
  <motion.button
    className="proceed-button"
    onClick={handleProceedToCheckout}
    disabled={selectedSeats.length === 0}
    whileTap={{ scale: 0.98 }}
    animate={{ opacity: selectedSeats.length > 0 ? 1 : 0.5 }}
  >
    Proceed to Checkout
  </motion.button>


</motion.div>

      </motion.div>
      
    
  );
};

export default SeatSelection;
