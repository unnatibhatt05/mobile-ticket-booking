import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css"; // ✅ Ensure updated CSS is applied

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { seats } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentLink, setPaymentLink] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const ticketPrice = 250;
  const serviceFee = 30;
  const totalPrice = (seats?.length || 0) * ticketPrice;
  const finalTotal = totalPrice + serviceFee;

  // ✅ Simulate Payment Link Generation
  const handlePayment = async () => {
    console.log("⚡ Simulating payment link generation...");

    if (!phoneNumber && !email) {
      setErrorMessage("⚠️ Please enter a phone number or email!");
      return;
    }
    if (paymentMethod === "upi" && !upiId) {
      setErrorMessage("⚠️ Please enter your UPI ID!");
      return;
    }

    setIsProcessing(true);
    setErrorMessage("");

    // Simulate delay before showing the "Make Payment" button
    setTimeout(() => {
      setPaymentLink("https://fake-payment-link.com");
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <motion.div
        className="checkout-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="checkout-text">
          <h2>Checkout</h2>
          <h3>Order Summary</h3>
          <div className="summary-box">
            <p><strong>Seats:</strong> {seats?.join(", ") || "None"}</p>
            <p><strong>Tickets:</strong> {seats?.length || 0} x ₹{ticketPrice.toFixed(2)}</p>
            <p><strong>Subtotal:</strong> ₹{totalPrice.toFixed(2)}</p>
            <p><strong>Service Fee:</strong> ₹{serviceFee.toFixed(2)}</p>
            <hr />
            <p><strong>Total:</strong> ₹{finalTotal.toFixed(2)}</p>
          </div>

          <h3>Choose Payment Method</h3>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="input-box">
            <option value="upi">UPI</option>
            <option value="card">Credit/Debit Card</option>
          </select>

          {paymentMethod === "upi" && (
            <input
              type="text"
              placeholder="Enter your UPI ID (e.g., yourupi@upi)"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="input-box"
            />
          )}

          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input-box"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-box"
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="button-container">
  <motion.button
    whileTap={{ scale: 0.98 }}
    className="checkout-button"
    onClick={handlePayment}
    disabled={isProcessing}
  >
    {isProcessing ? "⏳ Processing..." : `Generate Payment Link`}
  </motion.button>

  {/* ✅ Always show "Make Payment" button after clicking Generate Payment Link */}
  {paymentLink && (
    <a href={paymentLink} target="_blank" rel="noopener noreferrer">
      <motion.button whileTap={{ scale: 0.98 }} className="checkout-button">
        Make Payment 💳
      </motion.button>
    </a>
  )}
</div>

        </div>
      </motion.div>
    </div>
  );
};

export default Checkout;
