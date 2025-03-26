import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NetBankingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, seats } = location.state || {};

  const handleConfirmPayment = () => {
    alert("✅ Net Banking Payment Successful!");
    navigate("/", {
      state: {
        bookingSuccess: true,
        bookingDetails: {
          seats,
          totalPaid: amount,
        },
      },
    });
  };

  return (
    <div className="netbanking-container">
      <h2>Net Banking Payment</h2>
      <p>Amount: ₹{amount}</p>
      <p>Choose your bank:</p>
      <select>
        <option>State Bank of India</option>
        <option>HDFC Bank</option>
        <option>ICICI Bank</option>
        <option>Axis Bank</option>
      </select>
      <button onClick={handleConfirmPayment}>Confirm Payment</button>
    </div>
  );
};

export default NetBankingConfirmation;
