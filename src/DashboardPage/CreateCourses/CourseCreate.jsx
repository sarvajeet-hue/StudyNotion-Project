import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const CourseCreate = () => {
    const navigate = useNavigate();
    return (
        <div  className="flex flex-col  ">
            <div onClick={() => navigate('/dashboard/my-profile')} className="flex items-center cursor-pointer gap-3 border pr-[120px] py-[24px] text-richblack-300 pl-[24px]">
               <span><FaChevronLeft /></span> Back to Dashboard
            </div>
        </div>
    )
}