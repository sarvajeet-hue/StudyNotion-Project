import React from "react";
import CTAButton from "../components/core/Homepage/CTAButton";
import { Outlet, useLocation } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { InstructorCourseDashboard } from "./CreateCourses/InstructorCourseDashboard";
import { StudentCourseDashboard } from "./CreateCourses/StudentCourseDashboard";

const Courses = () => {
  const location = useLocation();
  const {user} = useSelector((state) => state.user)
  console.log(location.pathname);
  return (
    <div>
      {
        user.accountType === "Instructor" ? <InstructorCourseDashboard/> : <StudentCourseDashboard/>
      }
    </div>
  );
};

export default Courses;
