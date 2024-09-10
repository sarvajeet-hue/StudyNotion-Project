import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import CTAButton from "../../components/core/Homepage/CTAButton";
import { IoAddCircleOutline } from "react-icons/io5";

export const InstructorCourseDashboard = () => {
    const location = useLocation();
  return (
    <div>
      <div>
        {location.pathname === "/dashboard/courses/createCourses" ? (
          <Outlet />
        ) : (
          <div className="flex items-center justify-between ">
            <div>All the Content</div>

            <CTAButton
              active={true}
              linkto={"/dashboard/courses/createCourses"}
            >
              <IoAddCircleOutline className="text-xl" /> New
            </CTAButton>
          </div>
        )}
      </div>
    </div>
  );
};
