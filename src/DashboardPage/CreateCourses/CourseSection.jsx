import React from "react";
import { useSelector } from "react-redux";
import CTAButton from "../../components/core/Homepage/CTAButton";
import axios from "axios";
import { useState } from "react";

export const CourseSection = ({ courseDetails }) => {
  const { user } = useSelector((state) => state.user);
  const [order, setOrder] = useState(null);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  async function paymentFunction() {
    
    const body = {
      amount: "50000",
      currency: "INR",
      receipt: "qwsaq1",
    };
    const response = await axios.post("http://localhost:4000/order", body);
    // Create order by calling the server endpoint
    const order = response?.data?.order;
    setOrder(response?.data?.order);

    // Open Razorpay Checkout
    const options = {
      key: process.env.RAZORPAY_KEY, // Replace with your Razorpay key_id
      amount: "50000", // Amount in paise
      currency: "INR",
      name: "Sarvajeet Singh",
      description: "Test Transaction",
      order_id: order.id, // This is the order_id created in the backend
      callback_url: "http://localhost:3000/payment-success", // Your success URL
      prefill: {
        name: "Sarvajeet Singh",
        email: "krishnasingh296855925@gmail.com",
        contact: "9999999999",
      },
      theme: {
        color: "blue",
      },
      method: {
        card: true,
        netbanking: true,
        wallet: true,
        upi: true, // Enables UPI option
        qr: true,  // Enables QR code payment option
      }
    };

    const paymentObject = new window.Razorpay(options);
    console.log("paymentObject:", paymentObject)
    paymentObject.open();
  }

  return (
    <div className="w-full">
      <div className="w-full">
        {courseDetails.map((data, index) => {
          return (
            <div key={index} className="flex items-center flex-col w-full">
              <div className="flex items-center justify-between w-full">
                <img
                  src={data.thumNail}
                  className="h-[100px] w-[200px]"
                  alt=""
                />

                <div className="flex items-center justify-center gap-10">
                  <p>20h 10m</p>
                  <p>{data.Price}</p>
                  <div>
                    {user.accountType === "Instructor" ? (
                      <div>
                        <p>Edit</p>
                        <p>Delete</p>
                      </div>
                    ) : (
                      <CTAButton onClick={paymentFunction} active={true}>
                        Buy
                      </CTAButton>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
