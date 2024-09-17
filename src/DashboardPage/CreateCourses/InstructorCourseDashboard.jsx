import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import CTAButton from "../../components/core/Homepage/CTAButton";
import { IoAddCircleOutline } from "react-icons/io5";

export const InstructorCourseDashboard = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col   gap-4">
      <div>
        {location.pathname === "/dashboard/courses/createCourses" ? (
          <Outlet />
        ) : (
          <div className="flex items-center justify-between flex-col gap-5 ">
            <div className="flex items-center justify-between w-full">
              <div>All the Content</div>

              <CTAButton
                active={true}
                linkto={"/dashboard/courses/createCourses"}
              >
                <IoAddCircleOutline className="text-xl" /> New
              </CTAButton>
            </div>

            <div className="text-white w-[1073px] border rounded-md h-[634px] flex flex-col">
              Courses Div
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
