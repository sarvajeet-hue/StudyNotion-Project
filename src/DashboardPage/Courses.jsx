import React from "react";
import CTAButton from "../components/core/Homepage/CTAButton";
import { Outlet, useLocation } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

const Courses = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      {location.pathname === "/dashboard/courses/createCourses" ? (
        <Outlet />
      ) : (
        <div className="flex items-center justify-between ">
          <div>All the Content</div>

          <CTAButton active={true} linkto={"/dashboard/courses/createCourses"}>
          <IoAddCircleOutline className="text-xl" /> New 
          </CTAButton>
        </div>
      )}
    </div>
  );
};

export default Courses;
