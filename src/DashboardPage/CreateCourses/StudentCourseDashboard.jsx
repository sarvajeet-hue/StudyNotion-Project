import React, { useEffect, useState } from "react";
import { getallcourses } from "../../services/operations/apicalls";
import { CourseSection } from "./CourseSection";

export const StudentCourseDashboard = () => {
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
    <div>
      <div className="text-white w-[1073px] h-[auto] flex flex-col p-6">
        <div className="flex items-center justify-between">
          <div>COURSES</div>
          <div className="flex items-center justify-center gap-8">
            <p>DURATION</p>
            <p>PRICE</p>
            <p>ACTIONS</p>
          </div>
        </div>
        <CourseSection courseDetails={courseDetails} />
      </div>
    </div>
  );
};
