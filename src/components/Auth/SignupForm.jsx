import React from 'react'
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'
import { useForm } from 'react-hook-form';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch , useSelector } from 'react-redux';
import { setUser } from '../../Slices/UserSlice';
import axios from 'axios';


const SignupForm = () => {

    const user = useSelector((state) => state.user);

    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const navigate = useNavigate();

  

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      function onSubmitForm(data){
        dispatch(setUser(data))
        console.log("User" , user)
        const email = data.email;
        console.log("email",email);

         const otp_response = axios.post("http://localhost:4000/api/v1/auth/otp" , {email})
        console.log("Otp_response",otp_response) 

        navigate("/verifymail")

      }

      

  return (
    <div>
    {/* Tab */}
    {/* <Tab tabData={tabData} field={accountType} setField={setAccountType} /> */}
    {/* Form */}
    <form onSubmit={handleSubmit(onSubmitForm)} className="flex w-full flex-col gap-y-4">

      
      <div className="flex gap-x-4">

      <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            As a<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="accountType"
           
            {...register("accountType")}
            placeholder="SignUp as a .."
            className="form-style w-full"
          />
        </label>

        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            First Name <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="firstname"
           
            {...register("firstname")}
            placeholder="Enter first name"
            className="form-style w-full"
          />
        </label>
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Last Name <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="lastname"
            
            {...register("lastname")}
            placeholder="Enter last name"
            className="form-style w-full"
          />
        </label>
      </div>
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          
          {...register("email")}
          placeholder="Enter email address"
          className="form-style w-full"
        />
      </label>
      <div className="flex gap-x-4">
        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Create Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            
            {...register("password")}
            placeholder="Enter Password"
            className="form-style w-full !pr-10"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Confirm Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showConfirmPassword ? "text" : "password"}
            name="confirmpassword"
            
            {...register("confirmpassword")}
            placeholder="Confirm Password"
            className="form-style w-full !pr-10"
          />
          <span
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Create Account
      </button>
    </form>
  </div>
  )
}

export default SignupForm
