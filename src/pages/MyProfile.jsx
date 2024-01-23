
import React from 'react'
import Sidebar from '../DashboardPage/Sidebar'
import { RiEditBoxLine } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



const MyProfile = () => {
    const {user} = useSelector((state) => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
  return (

    <div className='flex h-[calc(100vh-65px)]'>
        <Sidebar/> 
          <div className='flex py-6 pl-6 pr-[120px] w-[calc(100vw-222px)] gap-6 items-start'>
              <div className='flex items-start gap-2 text-richblack-300'>
                  <p >Home</p>
                  <p>/</p>
                  <p>Dashboard</p>
                  <p>/</p>
                  <p className='text-yellow-50'>My Profile</p>
              </div>


              
          </div>
    </div>
  )
}

export default MyProfile
