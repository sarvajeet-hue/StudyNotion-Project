import React from "react";
import { useSelector } from "react-redux";
import { PrimaryButton } from "../../components/core/Homepage/CTAButton";
import axios from "axios";
import { useState } from "react";

export const CourseSection = ({ courseDetails }) => {
  const { user } = useSelector((state) => state.user);
  const [paymentId , setPaymentId] = useState(null)

  const [paymentIndex , setPaymentIndex] = useState(null)
  
  async function paymentFunction(index) {
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    
    try {
      const course_id = courseDetails[index]?._id;
      const token = user.token;

      const PaymentOrderID = await axios.post(
        "http://localhost:4000/api/v1/payment",
        { course_id, token }
      );
      console.log("PaymentOrder:", PaymentOrderID);

      

      const options = {
        key: "rzp_test_9McW67FcYiQo8V", // Replace with your Razorpay key
        amount: PaymentOrderID?.data?.amount, // Amount in paise
        currency: PaymentOrderID?.data?.currency,
        name: "Your App Name",
        description: "Test Transaction",
        handler: async function (response) {
          console.log("Payment successful:", response?.razorpay_payment_id);
          setPaymentId(response?.razorpay_payment_id)
          setPaymentIndex(index)
          

          // You can add further logic here after a successful payment
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      
      };
      console.log(options)
    
      const rzp1 = new window.Razorpay(options);
    
   
    
      rzp1.open();

     
    } catch (error) {
      console.log("error:", error);
    }
    
    
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
                      <PrimaryButton
                        key={index}
                        active={true}
                        onClick={ () => paymentFunction(index)}
                      >
                        {
                            paymentIndex === index ? "Purchased" : "Buy"
                        }
                      </PrimaryButton>
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
