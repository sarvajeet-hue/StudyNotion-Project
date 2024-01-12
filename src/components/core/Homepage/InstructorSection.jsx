import React from 'react'
import instructor_image from '../../../assets/Images/Instructor.png'
import HighlightText from './HighlightText'
import CTAButton from './CTAButton'
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
    return (
        <div className='py-[90px] px-[120px]  ' >
            <div className=' flex justify-center items-center gap-[98px] '>
                    <div className='w-[100%] '>
                        <img  src={instructor_image}  alt="" />
                    </div>

                    <div className='flex flex-col items-start gap-3 flex-shrink-0 w-[30%]'>
                        <h1 className='text-richblack-5 text-4xl font-semibold'>
                            Become an <HighlightText text={"Instructor"} />
                        </h1>
                        <p className='font-inter text-xs text-richblack-300 font-medium'>
                            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                        </p>

                        <div className='pt-[52px]'>
                        <CTAButton className="flex gap-1 items-center" active={true} linkto={"/signup"}>
                                Start Teaching Today
                                <FaArrowRight/>
                                
                            
                            </CTAButton>
                        </div>
                    </div>


            </div>
         </div>
    )
}

export default InstructorSection
