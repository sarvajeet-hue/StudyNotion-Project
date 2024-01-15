import axios from 'axios';
import React, { useState } from 'react'
import {useForm} from "react-hook-form";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { setToken } from '../../Slices/auth';




const LoginForm = () => {


    const [loading , setLoading] = useState(true)
    
    const dispatch = useDispatch();
    const {register , formState : {errors} , handleSubmit} = useForm();


    const navigate = useNavigate();
    

    async function onSubmitForm(data){
        console.log(data)
       toast.loading("Loading...")
        const response = await axios.post("http://localhost:4000/api/v1/auth/login" , data);
        toast.dismiss()
        
        toast.success("Logged in ")

        console.log("response-->",response.data)
        
        if(response){
          
          console.log(response.data)
          let token = response.data.token
          dispatch(setToken(token))
          navigate("/dashboard")
        
          
        }else{
          toast.error("please enter correct id and pass")
        }
    }

  return (
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
  )
}

export default LoginForm
