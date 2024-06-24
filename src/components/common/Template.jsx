
import React from 'react'
import SignupForm from '../Auth/SignupForm'
import frameImg from '../../assets/Images/frame.png'
import LoginForm from '../Auth/LoginForm'

const Template = ({ title, description1, description2, image, formType }) => {
 
  
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)] place-items-center">
     

     <div className="flex items-center justify-center gap-[260px]">

        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
            {title}
          </h1>
          <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
            <span className="text-richblack-100">{description1}</span>{" "}
            <span className="font-edu-sa font-bold italic text-blue-100">
              {description2}
            </span>
          </p>
          {formType === "signup" ? <SignupForm /> : <LoginForm />}
          
        </div>


        <div className="relative mx-auto max-w-[560px] md:mx-0">
          <img
            src={frameImg}
            alt="Pattern"
            width={558}
            height={504}
            loading="lazy"
          />
          <img
            src={image}
            alt="Students"
            width={558}
            height={504}
            loading="lazy"
            className="absolute -top-4 right-4 z-10"
          />
        </div>
      </div>

  </div>
  )
}

export default Template
