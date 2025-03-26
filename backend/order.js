require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Create Razorpay Payment Link (For UPI & Credit/Debit Card)
app.post("/create-razorpay-payment-link", async (req, res) => {
  try {
    const { amount, phone, email } = req.body;
    if (!amount || (!phone && !email)) {
      return res.status(400).json({ success: false, error: "Invalid details provided" });
    }

    const paymentLinkOptions = {
      amount: amount * 100, // Convert ₹ to paise (₹100 = 10000 paise)
      currency: "INR",
      accept_partial: false,
      description: "Ticket Booking Payment",
      customer: { name: "Customer", email, contact: phone },
      notify: { sms: true, email: true }, // Sends link via SMS & Email
      reminder_enable: true,
      callback_url: "http://localhost:3000/payment-success", // Change in production
      callback_method: "get",
    };

    const response = await razorpay.paymentLink.create(paymentLinkOptions);
    return res.json({ success: true, paymentLink: response.short_url });
  } catch (error) {
    console.error("Razorpay Error:", error);
    res.status(500).json({ success: false, error: "Failed to create payment link" });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
