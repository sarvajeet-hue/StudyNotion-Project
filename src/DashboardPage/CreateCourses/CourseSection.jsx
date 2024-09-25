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
      amount: "500",
      currency: "INR",
      receipt: "qwsaq1",
    };
    const response = await axios.post("http://localhost:4000/order", body);
    // Create order by calling the server endpoint
    const order = response?.data?.order;
    setOrder(response?.data?.order);

    // Open Razorpay Checkout
    const options = {
      key: "rzp_test_fQhR9svkWLn9Xb", // Replace with your Razorpay key_id
      amount: "5000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
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
        color: "#F37254",
      },
    };

    const paymentObject = new window.Razorpay(options);
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

                <div className="flex items-center justify-center gap-14">
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
