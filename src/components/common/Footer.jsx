import React from 'react'
import FooterLogo from "../../assets/Logo/Logo-Full-Light.png"
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import {FooterLink2} from "../../data/footer-links"
import FooterComponent from './FooterComponent';

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center py-[52px] px-[120px] gap-8  bg-richblack-800'>
        {/* for-content */}
        <div className='flex items-start gap-[52px] h-[100%] self-stretch'>

          {/* left-part */}
           <div className='flex items-start gap-5'>
              {/* company-part */}
              <div className='flex flex-col items-start gap-3'>
                <div>
                  <img src={FooterLogo} alt="" />
                </div>

                <div className='font-inter font-semibold leading-6 text-[16px] text-richblack-100'>Company</div>
                
                <div className='flex flex-col gap-3 text-richblack-100'>
                  <p>About</p>
                  <p>Careers</p>
                  <p>Affiliates</p>
                </div>
                
                <div className='flex gap-3 items-start text-richblack-400 justify-center pb-14'>
                      <CiFacebook className='[w-24px] h-[24px]'/>
                      <FaGoogle className='[w-24px] h-[24px]'/>
                      <CiTwitter className='[w-24px] h-[24px]'/>
                      <CiYoutube className='[w-24px] h-[24px]'/>
                </div>
              </div>

              {/* resourses part */}
              <div className='flex flex-col gap-9 items-start '>
                    <div className='flex flex-col items-start justify-center gap-3 text-richblack-400'>
                      <p className='text-richblack-100 font-inter font-semibold leading-6 text-[16px] mt-2'>Resources</p>
                      <p>Articles</p>
                      <p>Blog</p>
                      <p>Chart Sheet</p>
                      <p>Code challenges</p>
                      <p>Docs</p>
                      <p>Projects</p>
                      <p>Videos</p>
                      <p>Workspaces</p>
                    </div>
                    {/* support-part */}
                    <div className='flex flex-col items-start justify-center gap-3 text-richblack-400'>
                      <h1 className='text-richblack-100 font-inter font-semibold leading-6 text-[16px] mt-2'>Support</h1>
                      <p>Help Center</p>
                    </div>
              </div>

            {/* plans-community */}
         
             <div className='flex flex-col gap-9 items-start '>
            <div className='flex flex-col items-start justify-center gap-3 text-richblack-400'>
              <p className='text-richblack-100 font-inter font-semibold leading-6 text-[16px] mt-2'>Plans</p>
              <p>Paid memberships</p>
              <p>For students</p>
              <p>Business solutions </p>
            </div>

            <div className='flex flex-col items-start justify-center gap-3 text-richblack-400'>
            <p className='text-richblack-100 font-inter font-semibold leading-6 text-[16px] mt-2'>Community</p>
              <p>Forums </p>
              <p>Chapters</p>
              <p>Events</p>
            </div>
             </div>


           </div>

           {/* line-part */}
           <div className='w-[1px] h-[700px] bg-richblack-400'></div>

           {/* right-part */}
           <div  className='flex items-start gap-5'>
                <div  className='flex items-start gap-[52px] self-stretch'>
                  {
                    FooterLink2.map((link , index) => {
                      return (
                        <div key={index} className='mt-2 flex flex-col gap-2'>
                          <h1 className='font-inter font-semibold leading-6 text-[16px] text-richblack-100' >{link.title}</h1>
                          <FooterComponent link={link}/>
                          
                        </div>
                      )
                    })
                  }
                </div>
           </div>

        </div>

        {/* for-line */}
        <div className='w-[100%] h-[1px] bg-richblack-700'></div>

        {/* by-krishna */}
        <div className='flex items-start justify-center w-[100%] gap-3'>
            <div className='flex  gap-2 text-richblack-5 w-[70%] '>
                <p>Privacy Policy</p>
                <div className='w-[1px] h-[100%] bg-richblack-900'></div>

                <p>Cookie Policy</p>
                <div className='w-[1px] h-[100%] bg-richblack-900'></div>
                
                <p>Terms</p>
                <div className='w-[1px] h-[100%] bg-richblack-900'></div>
            </div>

            {/* by-section */}

            <div className='text-richblack-5 w-[30%]'>
            Made with <span className=' text-pink-400'>♥</span> Sarvajeet © 2023 Studynotion
            </div>

        </div>

    </div>
  )
}

export default Footer
