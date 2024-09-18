import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CTAButton from "../../components/core/Homepage/CTAButton";
import { IoAddCircleOutline } from "react-icons/io5";

import { getallcourses } from "../../services/operations/apicalls";

export const InstructorCourseDashboard = () => {
  const location = useLocation();
  const [courseDetails , setCourseDetails] = useState([])
  console.log("courseDetails:", courseDetails)

  useEffect(() => {
    const fetchArrays = async () => {
      try {
        const allcoursesDetails = await getallcourses();
        setCourseDetails(allcoursesDetails)
        
         console.log("allcoursesDetails:", allcoursesDetails);
      } catch (error) {console.log("error:", error)}
    };

    fetchArrays()
  }, []);
  return (
    <div className="flex flex-col   gap-4">
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

            <div className="text-white w-[1073px] border rounded-md h-[634px] flex flex-col p-6">
              <div className="grid grid-cols-3 gap-3">
                {courseDetails.map((data , index) => {
                  return <div className="flex flex-col items-center justify-center gap-4 border rounded-lg"  key={index}>
                      <p> {data?.courseName}</p>
                      <p>Price :{data?.Price}</p>
                      <p>Instructor Name : {data?.instructor?.firstname}</p>
                    </div>
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
