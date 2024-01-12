import React from 'react'

import { SlBadge } from "react-icons/sl";
import { FaGraduationCap } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import { IoCode } from "react-icons/io5";
import CTAButton from './CTAButton';
import HighlightText from './HighlightText';


const timeline = [
    {   
        index : 1,
        title : "Leadership",
        para : "Fully committed to the success company",
        icon : {SlBadge},
    },
    {   
        index : 2,
        title : "Responsibility",
        para : "Students will always be our top priority",
        icon : {FaGraduationCap},
    },
    {   
        index : 3,
        title : "Flexibility",
        para : "The ability to switch is an important skills",
        icon : {IoDiamondSharp},
    },
    {   
        index : 4,
        title : "Solve the problem",
        para : "Code your way to a solution",
        icon : {IoCode},
    }
]


const TimelineSection = () => {
    return (
        

        <div className=' bg-pure-greys-5 flex items-center justify-center py-[90px] px-[120px] relative'>
            <div className='w-11/12 mx-auto flex flex-col  items-center'>
                {/*get skills section*/}
                <div className=' flex gap-3 w-[100%]'>
                    <div className=' font-semibold text-2xl text-richblack-900 leading-6 w-[45%]'>
                        Get the skills you need for a <HighlightText text={"job that is in demand."} />
                    </div>
                    <div className='flex flex-col w-[45%] '>
                        <div className=' text-richblack-700 font-medium leading-6'>
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </div>
                        <div className='flex items-start mt-[36px]'>

                            <CTAButton active={true} linkto={"/signup"}>
                                Learn More
                            </CTAButton>
                        </div>
                    </div>
                </div>

                {/*Leadership section*/}

                <div className='flex gap-[76px] mt-[52px]  items-center self-stretch'>
                    <div className='w-[386px] flex flex-col gap-8 justify-center items-start'>
                        {/*badge part start here*/}
                        <div>
                            <div className='flex py-4 px-3 gap-6'>
                                <div className='flex justify-center items-center w-[52px] h-[52px] gap-1 p-1 rounded-full bg-richblack-5'>
                                    <SlBadge className='w-[24px] h-[24px] text-blue-200 rounded-md' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className=' font-inter text-richblack-800 font-semibold leading-[22px] text-xl'>Leadership</div>
                                    <div className=' font-inter text-richblack-700 font-normal leading-6'>Fully committed to the success company</div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex py-4 px-3 gap-6'>
                                <div className='flex justify-center items-center w-[52px] h-[52px] gap-1 p-1 rounded-full bg-richblack-5'>
                                    <FaGraduationCap className='w-[24px] h-[24px]  text-pink-200 rounded-md' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className=' font-inter text-richblack-800 font-semibold leading-[22px] text-xl'>Responsibility</div>
                                    <div className=' font-inter text-richblack-700 font-normal leading-6'>Students will always be our top priority</div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex py-4 px-3 gap-6'>
                                <div className='flex justify-center items-center w-[52px] h-[52px] gap-1 p-1 rounded-full bg-richblack-5'>
                                    <IoDiamondSharp className='w-[24px] h-[24px] bg-caribbeangreen-200 text-white rounded-md' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className=' font-inter text-richblack-800 font-semibold leading-[22px] text-xl'>Flexibility</div>
                                    <div className=' font-inter text-richblack-700 font-normal leading-6'>The ability to switch is an important skills</div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex py-4 px-3 gap-6'>
                                <div className='flex justify-center items-center w-[52px] h-[52px] gap-1 p-1 rounded-full bg-richblack-5'>
                                    <IoCode className='w-[24px] h-[24px] bg-yellow-100 text-white rounded-md' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className=' font-inter text-richblack-800 font-semibold leading-[22px] text-xl'>Solve the problem</div>
                                    <div className=' font-inter text-richblack-700 font-normal leading-6'>Code your way to a solution</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*badge part end here*/}
                    {/*photo part start here*/}
                    <div className='w-[60%]  '>
                        {/* <img  className=' h-[545px] object-cover w-[100%] ' src={TimelineImage} alt=""   /> */}
                        <div className='timeline_image h-[524px] object-cover'>

                        </div>
                    </div>
                </div>
            </div>

            {/* absolute positon section */}

            <div className='flex p-[42px] items-start gap-[52px] absolute right-[222px] bottom-[26px] bg-caribbeangreen-700'>
                <div className='flex gap-6 items-center'>
                    <div className='text-[36px] font-inter font-bold text-white'>10</div>
                    <div className='font-inter text-sm font-medium text-caribbeangreen-300'>
                        YEARS EXPERIENCES
                    </div>
                </div>
                <div className=' w-[1px] h-11 bg-caribbeangreen-500'></div>
                <div className='flex gap-6 items-center'>
                    <div className='text-[36px] font-inter font-bold text-white'>250</div>
                    <div className='font-inter text-sm font-medium text-caribbeangreen-300'>
                        TYPES OF
                        COURSES
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimelineSection
