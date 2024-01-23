import react, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { MdLibraryBooks } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const sideBarData = [
    {
        icon : <CgProfile/>,
        text : "My Profile"
    } , 
    {
        icon : <MdLibraryBooks />, 
        text : "Enrolled Courses"
    },
    
    {
        icon : <CiBookmark />, 
        text : "Purchase History"
    },

    {
        icon : <FaGraduationCap />, 
        text : "Courses"
    },

]


const Sidebar = () => {
    const [currentSideBar , setCurrentSideBar] = useState(false)

    return(
        <div className='flex flex-col overflow-y-hidden gap-[10px] border-richblack-700 bg-richblack-800 border-r-2 w-[222px] h-[100vh] py-[30px]'>
            <div className='flex flex-col items-start w-full '>
               
               {
                sideBarData.map((data , index) => {
                    return (
                        <Link  to={data.text.replace(" " , "-")} key={index}>
                            <div onClick={() => setCurrentSideBar(true)} className={`flex w-full gap-4 px-3 py-2 items-center justify-center 
                            ${currentSideBar ? " bg-yellow-700" : "bg-richblack-700"}
                            `}>
                                {data.icon}
                                <p>
                                    {data.text}
                                </p>
                            </div>

                        </Link>

                    )
                })
               }
               


            </div>
        </div>
    )
}

export default Sidebar;