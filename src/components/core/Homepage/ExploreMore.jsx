import React, { useState } from 'react'
import HighlightText from './HighlightText'
import { HomePageExplore } from '../../../data/homepage-explore'
import CardSection from './CardSection'

const tabName = [
    "Free", "New to coding" , "Most popular" , "Skills paths" , "Career paths", 
]



const ExploreMore = () => {

    const [currentTab , setCurrentTab] = useState(tabName[0]);
    const [currentCourses , setCurrentCourses] = useState(HomePageExplore[0].courses);
    const [currentCard , setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);
    


    function tabHandler(value){
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value)
        setCurrentCourses(result[0].courses)

        
        setCurrentCard(result[0].courses[0].heading)
       
       
        

    }
    return (
        <div className='py-[90px] px-[120px] -mb-[180px]'>
            <div className='flex flex-col gap-9'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 className='text-richblack-5 font-semibold text-4xl text-center w-[100%] gap-2 flex justify-center'>Unlock the  <HighlightText text={" Power of Code"} /></h1>
                    <p className='text-richblack-300 text-center font-medium leading-6'>Learn to Build Anything You Can Imagine</p>
                </div>

                {/* tab section */}

                <div className=  {`text-richblack-5 flex items-center justify-center gap-4 `} >
                    {
                        tabName.map((tab , index) => {
                            return (
                                <div key={index} onClick={() => tabHandler(tab)} className={`flex gap-4  justify-center items-center 
                                ${currentTab===tab ? "text-richblack-5 bg-richblack-700 rounded-md" : "text-richblack-300 bg-richblack-5"}
                                 bg-richblack-800 rounded-md px-2 py-1 cursor-pointer`} >
                                    {tab}
                                    
                                </div>
                            )
                        })
                    }

                   
                </div>

                {/* card section */}
                <div  className='flex justify-center items-center pt-[32px] px-[52px] gap-9'>
                    {
                        currentCourses.map((course , index) => {
                            return <CardSection currentCard = {currentCard} key={index} course={course}/>
                        })
                    }               
                </div>
                 


                    
            </div>

        </div>
    )
}

export default ExploreMore
