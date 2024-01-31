import { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdLibraryBooks } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { setUser } from '../Slices/UserSlice';
import toast from 'react-hot-toast';
const sideBarData = [
    {
        icon : <CgProfile/>,
        text : "My Profile",
        location : "my-profile"
    } , 
    {
        icon : <MdLibraryBooks />, 
        text : "Enrolled Courses",
        location : "enrolled-courses"
    },
    
    {
        icon : <CiBookmark />, 
        text : "Purchase History",
        location : "purchase-history"
    },

    {
        icon : <FaGraduationCap />, 
        text : "Courses",
        location : "courses"
    },

]





const Sidebar = () => {
    const [activeIndex , setactiveindex] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [settingBar , setSettingBar] = useState("")

    console.log(location.pathname)
    

    function logoutHandler(){
        localStorage.removeItem('User');
        dispatch(setUser(null))
        toast.success("Logout Successfully")
        navigate('/login')
    }

    useEffect(() => {
        setactiveindex(0)
    } , [])

    return(
        <div className='flex flex-col overflow-y-hidden gap-[10px] border-richblack-700 bg-richblack-800 border-r-2 w-[222px] h-calc(100vh-70px) py-[30px]'>
            <div className='flex flex-col items-start w-full justify-center  py-2 '>
               
               {
                sideBarData.map((data , index) => {
                
                    return (
                        
                        <Link onClick={() => setactiveindex(index)} 
                        key={index}
                        to={`/dashboard/${data.location}`}
                        
                        className={` w-full flex items-start 
                         ${activeIndex === index ? "bg-yellow-500 text-richblack-700" : "bg-richblack-800 text-richblack-5"}` }
                         >
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


            <div className='w-full h-1 bg-richblack-700'>
                  
            </div>


            <div className='flex flex-col items-start w-full justify-center  py-2  text-richblack-5'>
                <Link onClick={() => setSettingBar("Setting")} className={`flex px-3 gap-4  py-2 items-center justify-center 
                 ${settingBar === "Setting" ? "bg-yellow-500 text-richblack-700 " : "bg-richblack-800 text-richblack-5"} `} >
                    <CiSettings />
                    <p>Setting</p>
                </Link>
                <div onClick={logoutHandler} className={`flex px-3 gap-4  py-2 items-center justify-center cursor-pointer`} >
                    <IoIosLogOut />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;