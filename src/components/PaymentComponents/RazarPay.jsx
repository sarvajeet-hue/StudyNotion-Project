import React from 'react'

export const RazarPay = () => {

    async function payNow() {
        const amount = document.getElementById('amount').value;
  
        // Create order by calling the server endpoint
        const response = await fetch('/create-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ amount, currency: 'INR', receipt: 'receipt#1', notes: {} })
        });
  
        const order = await response.json();
  
        // Open Razorpay Checkout
        const options = {
          key: 'YOUR_KEY_ID', // Replace with your Razorpay key_id
          amount: '500', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: 'INR',
          name: 'Acme Corp',
          description: 'Test Transaction',
          order_id: 'order_IluGWxBm9U8zJ8', // This is the order_id created in the backend
          callback_url: 'http://localhost:3000/payment-success', // Your success URL
          prefill: {
            name: 'Sarvajeet Singh',
            email: 'krishnasingh296855925@gmail.com',
            contact: '9999999999'
          },
          theme: {
            color: '#F37254'
          },
        };
  
        const rzp = new Razorpay(options);
        rzp.open();
      }
  return (
    <div>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
  
    
  
    </div>
  )
}
