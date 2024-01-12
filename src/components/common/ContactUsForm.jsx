import React from 'react'
import CTAButton from '../core/Homepage/CTAButton'

import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactUsForm = () => {

    async function onSubmit(data){
        try{
            console.log(data)

            const response = await axios.post("http://localhost:4000/api/v1/contactus" , data)
            console.log( "response-->",response);

        }catch(error){
            console.log(error)
        }
    }




    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className=' p-9 flex flex-col gap-9'
    >

        <div className='flex flex-col items-start gap-5'>
            
            {/* name-section */}

            <div className=' flex items-start gap-5'>
                {/* first-name */}
                  <div className='flex flex-col gap-2 '>
                      <label className=' font-inter text-[16px] font-semibold text-richblack-5'> First Name</label>
                      <input
                          type="text"
                          placeholder='Enter first Name'
                          name='firstname'
                          {...register("firstname")}
                          className='flex p-3 items-center gap-3 text-richblack-200 font-inter text-[16px] leading-4 rounded-lg bg-richblack-800'
                      />
                  </div>

                  {/* lastt-name */}
                  <div className='flex flex-col gap-2 '>
                      <label className=' font-inter text-[16px] font-semibold text-richblack-5'> Last Name</label>
                      <input
                          type="text"
                          name='lastname'
                          {...register("lastname")}
                          placeholder='Enter Last Name'
                          className='flex p-3 items-center gap-3 text-richblack-200 font-inter text-[16px] leading-4 rounded-lg bg-richblack-800'
                      />
                  </div>


            </div>

            {/* email-section */}

            <div className=' flex items-start gap-5 w-full'>
                {/* Email */}
                  <div className='flex flex-col gap-2 w-full'>
                      <label className=' font-inter text-[16px] font-semibold text-richblack-5'>Email Address</label>
                      <input
                          type="email"
                          name='email'
                          {...register("email")}
                          placeholder='Enter your Email'
                          className='flex p-3 w-full items-center gap-3 text-richblack-200 font-inter text-[16px] leading-4 rounded-lg bg-richblack-800'
                      />
                  </div>

                  


            </div>


            {/* message-section */}


            <label className='text-richblack-5 font-inter text-[16px] font-semibold' htmlFor="message">Message</label>
            <textarea
            className='flex p-3 items-start gap-3 rounded-lg w-full text-richblack-200 bg-richblack-800'
            id="message"
            placeholder='Enter a message' 
            name="message"
            {
                ...register("message")
            } 
            
            cols="30" rows="5">

            </textarea>


            {/* button section */}

            <CTAButton active={true} linkto={null}>
                Send Message
            </CTAButton>



        </div>


    </form>
  )
}

export default ContactUsForm
