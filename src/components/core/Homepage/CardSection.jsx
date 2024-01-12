import React from 'react'
import { HiUsers } from "react-icons/hi2";
import { TbBinaryTree2 } from "react-icons/tb";
const CardSection = ({course , currentCard}) => {
  return (
      <div>
          <div className={`${currentCard === course.heading ? "text-richblack-800 bg-richblack-5" : "text-richblack-5 bg-richblack-800"} flex flex-col gap-2 pt-[32px] pb-14 px-6`} >
              <h1 className={`${currentCard === course.heading ? "text-richblack-800" : "text-richblack-5"} text-3xl font-semibold w-fit`}>{course.heading}</h1>
              <p>{course.description}</p>


          </div>
          <div className={`${currentCard === course.heading ? "text-richblack-800 bg-richblack-5" : "text-richblack-5 bg-richblack-800"} text-richblack-5 py-4 px-6 flex justify-between items-center`}>
              <p className={`${currentCard === course.heading ? " text-blue-500 bg-richblack-5" :  "text-richblack-5 bg-richblack-800"} flex items-center justify-center gap-2`}>
                <HiUsers/>
                {course.level}
                
              </p>
              <p className={`${currentCard === course.heading ? " text-blue-500 bg-richblack-5" :  "text-richblack-5 bg-richblack-800"} flex items-center justify-center gap-1`}> <TbBinaryTree2/>
                {`${course.lessionNumber} Lessons`}</p>
          </div>
      </div>
  )
}

export default CardSection
