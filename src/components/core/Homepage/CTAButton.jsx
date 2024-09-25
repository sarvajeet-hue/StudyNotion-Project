import React from "react";
import {  useNavigate } from "react-router-dom";

const CTAButton = ({ children, active, linkto , onClick}) => {
  const navigate = useNavigate()
  return (
    <button onClick={onClick}>
     
        <div
          className={`flex items-center px-[24px] gap-[8px] py-[12px] border rounded-lg shadow-md leading-6 font-medium
            ${
              active
                ? "bg-yellow-50 text-richblack-900"
                : "bg-richblack-900 text-richblack-5"
            } hover:scale-95 transition-all duration-200`}
        >
          {children}
        </div>
      
    </button>
  );
};

export default CTAButton;
