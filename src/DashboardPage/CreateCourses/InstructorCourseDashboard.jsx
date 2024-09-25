import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CTAButton from "../../components/core/Homepage/CTAButton";
import { IoAddCircleOutline } from "react-icons/io5";

import { getallcourses } from "../../services/operations/apicalls";
import { CourseSection } from "./CourseSection";


export const InstructorCourseDashboard = () => {
  const location = useLocation();
  const [courseDetails, setCourseDetails] = useState([]);
  console.log("courseDetails:", courseDetails);

  useEffect(() => {
    const fetchArrays = async () => {
      try {
        const allcoursesDetails = await getallcourses();
        setCourseDetails(allcoursesDetails);

        console.log("allcoursesDetails:", allcoursesDetails);
      } catch (error) {
        console.log("error:", error);
      }
    };

    fetchArrays();
  }, []);
  return (
    <div className="flex flex-col  gap-4">
      <div>
        {location.pathname === "/dashboard/courses/createCourses" ? (
          <Outlet />
        ) : (
          <div className="flex items-center justify-between flex-col gap-5">
            <div className="flex items-center justify-between w-full ">
              <div>All the Content</div>

              <CTAButton
                active={true}
                linkto={"/dashboard/courses/createCourses"}
              >
                <IoAddCircleOutline className="text-xl" /> New
              </CTAButton>
            </div>

            <div className="text-white w-[1073px] h-[auto] flex flex-col p-6">
              {/* <div className="grid grid-cols-3 gap-5">
                {courseDetails.map((data, index) => {
                  return (
                    <div
                      className="flex flex-col rounded-lg border h-full "
                      key={index}
                    >
                      <div>
                        <img
                          src={data.thumNail}
                          className="h-[200px] w-full object-fill"
                          alt=""
                        />
                      </div>

                      <div className="flex flex-col items-start gap-3 mt-4">
                        <p> Course Name : {data?.courseName}</p>
                        <p> course Category : {data?.category?.description}</p>
                        
                        <p> what you will learn : {data?.WhatYouWillLearn}</p>
                        <p>Instructor Name : {data?.instructor?.firstname}</p>

                        <p className="font-semibold">Price : <span className="text-caribbeangreen-200"> ₹{data?.Price}</span></p>
                      </div>
                    </div>
                  );
                })}
              </div> */}
              <div className="flex items-center justify-between">
                <div>COURSES</div>
                <div className="flex items-center justify-center gap-8">
                  <p>DURATION</p>
                  <p>PRICE</p>
                  <p>ACTIONS</p>
                </div>
              </div>

              <div className="flex flex-col items-center ">
               
                  <CourseSection courseDetails={courseDetails}/>
                </div>
              </div>
            </div>
          
        )}
      </div>
    </div>
  );
};
