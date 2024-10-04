import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useForm} from "react-hook-form";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { setToken } from '../../Slices/auth';
import { login } from '../../services/operations/apicalls';
import Tab from '../common/Tab';
import {ACCOUNT_TYPE} from '../../utils/constants'


const LoginForm = () => {

  
   
  const [accountType , setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
    const dispatch = useDispatch();
    const {register , handleSubmit} = useForm();


    const navigate = useNavigate();
    

    function onSubmitForm(data){
      data.accountType = accountType;
      dispatch(login(data , navigate))
    }

    const tabData = [
      {
        id: 1,
        tabName: "Student", 
        type: ACCOUNT_TYPE.STUDENT,
      },
      {
        id: 2,
        tabName: "Instructor",
        type: ACCOUNT_TYPE.INSTRUCTOR,
      },
    ]

  return (
    <>
        <Tab tabData={tabData} field={accountType} setField={setAccountType} />
    
    <form onSubmit={handleSubmit(onSubmitForm)} className='mt-5 flex flex-col gap-5'>
     
      <div className='flex flex-col gap-2 text-richblack-5'>
        <label className='flex items-center gap-1' htmlFor="email">Email Address<sub className='text-pink-400'>*</sub></label>
        <input
          type="email"
          placeholder='Enter your email'
          {...register("email")}
          className='flex p-3 items-center rounded-lg bg-richblack-800'



        />
      </div>



      <div className='flex flex-col gap-2 text-richblack-5'>
        <label className='flex items-center gap-1' htmlFor="password">Password <sub className='text-pink-400'>*</sub></label>
        <input
          type="password"
          placeholder='Enter your password'
          {...register("password")}
          className='flex p-3 items-center rounded-lg bg-richblack-800'



        />
      </div>

      <button className='flex p-3 justify-center items-center gap-2 rounded-lg bg-yellow-50 mt-4 '>Sign in</button>

    </form>
    
    </>
    
  )
}

export default LoginForm
