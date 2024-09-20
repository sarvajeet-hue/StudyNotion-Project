import React, { useEffect , useState } from "react";
import { getallcourses } from "../../services/operations/apicalls";



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
        <div className="grid grid-cols-3 gap-5">
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

                  <p className="font-semibold">
                    Price :{" "}
                    <span className="text-caribbeangreen-200">
                      {" "}
                      ₹{data?.Price}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
