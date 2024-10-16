import React from 'react'
import Template from '../components/common/Template'
import SignUp_Image from "../assets/Images/signup.webp"

const Signup = () => {
  return (
    <div className='flex justify-center items-center pb-[90px] px-[120px] '>
      <Template 
        title={"Join the millions learning to code with StudyNotion for free"}
        description1={"Build skills for today, tomorrow, and beyond."}
        description2={"Education to future-proof your career."}
        image={SignUp_Image}
        formType={"signup"}
      />
        
        <button className='text-white'>Google</button>
    </div>
  )
}

export default Signup
