import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackButton from './ui/BackButton';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { date, time, seats } = location.state || {};
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const totalPrice = seats?.length * 12.50 || 0;
  const serviceFee = 1.99;
  const finalTotal = totalPrice + serviceFee;
  
  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Show success and redirect
      navigate('/', { 
        state: { 
          bookingSuccess: true,
          bookingDetails: {
            date,
            time,
            seats,
            totalPaid: finalTotal
          }
        }
      });
    }, 2000);
  };
  
  return (
    <div className="relative w-full max-w-md mx-auto h-screen bg-gradient-to-b from-purple-900 to-blue-900 overflow-y-auto overflow-x-hidden rounded-lg text-white pb-20">
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-4">
        <BackButton onClick={() => navigate(-1)} />
        <h2 className="text-xl font-semibold">Checkout</h2>
        <div className="w-10"></div> {/* Placeholder for layout balance */}
      </header>
      
      {/* Order Summary */}
      <div className="relative z-10 px-6 mt-4 mb-6">
        <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
        
        <div className="bg-blue-900/40 backdrop-blur-sm rounded-lg p-4 mb-4">
          <div className="flex justify-between mb-2">
            <span>Date:</span>
            <span className="font-medium">Thu, 20 April</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Time:</span>
            <span className="font-medium">{time}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Seats:</span>
            <span className="font-medium">{seats?.join(', ') || 'None'}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tickets:</span>
            <span className="font-medium">{seats?.length || 0} x $12.50</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span className="font-medium">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Service Fee:</span>
            <span className="font-medium">${serviceFee.toFixed(2)}</span>
          </div>
          <div className="h-px bg-white/20 my-2"></div>
          <div className="flex justify-between">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${finalTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      {/* Payment Methods */}
      <div className="relative z-10 px-6 mb-6">
        <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
        
        <div className="space-y-3">
          <div 
            className={`bg-blue-900/40 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 cursor-pointer border ${paymentMethod === 'card' ? 'border-purple-400' : 'border-transparent'}`}
            onClick={() => setPaymentMethod('card')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Credit Card</p>
              <p className="text-sm text-blue-200">Visa, Mastercard, Amex</p>
            </div>
            {paymentMethod === 'card' && (
              <div className="ml-auto">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          
          <div 
            className={`bg-blue-900/40 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 cursor-pointer border ${paymentMethod === 'paypal' ? 'border-purple-400' : 'border-transparent'}`}
            onClick={() => setPaymentMethod('paypal')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">PayPal</p>
              <p className="text-sm text-blue-200">Pay with your PayPal account</p>
            </div>
            {paymentMethod === 'paypal' && (
              <div className="ml-auto">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Checkout Button */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-blue-900/80 backdrop-blur-sm p-4 max-w-md mx-auto">
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white text-lg font-semibold relative"
          onClick={handleCheckout}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            `Pay $${finalTotal.toFixed(2)}`
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default Checkout;