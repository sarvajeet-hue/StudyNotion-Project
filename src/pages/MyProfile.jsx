
import React from 'react'
import Sidebar from '../DashboardPage/Sidebar'
import { RiEditBoxLine } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FaEdit } from "react-icons/fa";



const MyProfile = () => {
  const { user } = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { image } = useSelector((state) => state.auth)



  return (

    <div className='flex h-[calc(100vh-65px)]'>
      <Sidebar />
      <div className='flex flex-col py-6 pl-6 pr-[120px] w-[calc(100vw-222px)] gap-6 items-start'>
        <div className='flex items-start gap-2 text-richblack-300'>
          <p >Home</p>
          <p>/</p>
          <p>Dashboard</p>
          <p>/</p>
          <p className='text-yellow-50'>My Profile</p>
        </div>

        <h1 className='text-richblack-5 text-4xl font-bold'>My Profile</h1>

        {/* image-part */}
        <div className='flex flex-col items-start  gap-5 max-w-[750px] ml-6 bg-richblack-800'>
          {/* profile-div */}
          <div className='flex p-6 justify-center mx-auto gap-5 items-center'>
            <div className='flex  items-center gap-6'>
              <img src={image} className='w-[78px] h-[78px] rounded-full' alt="" />
              {/* name-section */}
              <div className='flex gap-1 w-[60%] flex-col '>
                <p className=' flex gap-2 font-bold text-3xl text-richblack-5'>{user.firstname}
                  <p>{user.lastname}</p>
                </p>

                <div className='text-lg font-semibold text-richblack-300 font-inter'>
                  {user.email}
                </div>

              </div>




              <button className='flex justify-center items-center gap-2 bg-yellow-5 rounded-lg px-5 py-2 font-semibold'>



                <FaEdit />

                Edit


              </button>






            </div>
          </div>


         
        </div>

         {/* firstname lastname sec */}
         <div className='flex flex-col p-6 bg-richblack-800  items-start justify-center'>
            <div className='flex justify-between gap-5 items-center w-[750px]'>
              <p className='text-richblack-5 flex items-start w-[80%] font-semibold font-inter text-2xl gap-5'>Personal Detail</p>
              <button className='flex justify-center items-center gap-2 bg-yellow-5 rounded-lg px-5 py-2 font-semibold'>
                <FaEdit />
                Edit
              </button>

            </div>
          </div>



      </div>




    </div>
  )
}

export default MyProfile
