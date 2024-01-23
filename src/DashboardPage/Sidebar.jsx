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
    const [activeIndex , setactiveindex] = useState(null)

    return(
        <div className='flex flex-col overflow-y-hidden gap-[10px] border-richblack-700 bg-richblack-800 border-r-2 w-[222px] h-[100vh] py-[30px]'>
            <div className='flex flex-col items-start w-full justify-center  py-2 '>
               
               {
                sideBarData.map((data , index) => {
                    return (
                        <Link onClick={() => setactiveindex(index)} 
                        className={` w-full flex items-start ${activeIndex === index ? "bg-yellow-500 text-richblack-700" : "bg-richblack-800 text-richblack-5"}` }
                         /*to={data.text.replace(" " , "-")}*/ key={index}>
                            <div className={`flex px-3 gap-4  py-2 items-center justify-center`}>
                                <div>{data.icon}</div>
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