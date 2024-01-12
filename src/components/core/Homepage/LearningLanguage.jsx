import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.png'
import compare_with_others from '../../../assets/Images/Compare_with_others.png'
import plan_with_lessons from '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from './CTAButton'

const LearningLanguage = () => {
    return (
        <div className=' bg-pure-greys-5 py-[90px] px-[120px]' >
            <div className='w-11/12 mx-auto flex flex-col justify-center items-center max-w-maxContent gap-[52px]'>
                <div className='flex flex-col items-center gap-3 self-stretch px-[220px] w-[100%]'>
                    <div className='font-inter text-4xl font-semibold text-center w-[100%] '>
                        Your swiss knife for <HighlightText text={"learning any language"} />

                    </div>
                    <div className='font-inter font-semibold text-[16px] leading-6 text-center text-richblack-700'>
                        Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
                    </div>
                </div>


                {/* image div */}
                <div className='flex items-center justify-center  '>
                    <img src={know_your_progress} className='w-[300px] object-contain -mr-20' alt="" />
                    <img src={compare_with_others}  className='w-[300px] object-contain' alt="" />
                    <img src={plan_with_lessons}  className='w-[300px] object-contain -ml-20' alt="" />
                </div>

                <div>
                    <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
                </div>
            </div>
        </div>
    )
}

export default LearningLanguage
