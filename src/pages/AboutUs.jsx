import React from 'react'
import HighlightText from '../components/core/Homepage/HighlightText'
import about1 from '../assets/Images/aboutus1.webp'
import about2 from '../assets/Images/aboutus2.webp'
import about3 from '../assets/Images/aboutus3.webp'
import thirdPart_image from '../assets/Images/FoundingStory.png'
import LearningGrid from '../components/core/About/LearningGrid'
import ReviewSection from '../components/core/Homepage/ReviewSection'
import Footer from '../components/common/Footer'
import ContactFormSection from '../components/core/About/ContactFormSection'


const Data = [{
    title : "5K",
    value : "Active Students"
},
{
    title : "10+",
    value : "Mentors"
},
{
    title : "200+",
    value : "Courses"
},

{
    title : "50+",
    value : "Awards"
},
]

const AboutUs = () => {
  return (
    <div  >
        {/* first-part */}

        <div className='flex flex-col gap-[52px] items-center pt-[80px] px-[120px] bg-richblack-700'>
            
            
            {/* aboutus */}
            
            <div className='flex flex-col gap-[38px] items-center' >
                <p className='py-2 px-[18px] rounded-[100px] text-richblack-200 text-[45px] font-bold'>About Us</p>

                <div className='flex flex-col gap-4 items-center px-[52px]' >
                    <p className='text-richblack-5 text-4xl font-semibold font-inter text-center'>Driving Innovation in Online Education for a <HighlightText text={"Brighter Future"}/></p>
                    <p className='text-richblack-300 text-center font-inter font-medium leading-6 text-[16px] w-[750px] '>
                    Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a 
                    brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                    </p>
                </div>

            </div>


            {/* photo-section */}

            <div className='flex items-start gap-4 -mb-[130px]'>
                <img src={about1} className='w-[384px] h-[311px]' alt="" />
                <img src={about2} className='w-[384px] h-[311px]' alt="" />
                <img src={about3} className='w-[384px] h-[311px]' alt="" />
            </div>


             
        
        
        </div>

         {/* second-part */}

        <div className='flex items-center justify-center px-[120px] py-[90px] mt-[90px]'>
            <p className='text-richblack-300 text-4xl font-inter font-semibold leading-[52px] text-center'>We are passionate about revolutionizing the way we learn. Our innovative platform <span className='text-blue-500'>combines technology</span>,
            <span className='text-yellow-400'> expertise</span>, and community to create an unparalleled educational experience.</p>
        </div>



        {/* third-part */}

        <div className='flex items-center justify-center gap-[98px] px-[120px] py-[90px]'>
              <div className='flex flex-col items-start gap-6 w-[50%]'>
                  <h1 className='text-4xl font-inter font-semibold text-pink-400'>Our Founding Story </h1>
                  <p className='text-richblack-300 leading-5 text-[16px]  font-inter'>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the
                      need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>
                  <p className='text-richblack-300 leading-5 text-[16px] mt-[16px] font-inter'>
                      As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge
                      these gaps and empower individuals from all walks of life to unlock their full potential.
                  </p>
              </div>

              <div className='p-[32px] flex items-center justify-center w-[50%]'>
                  <img src={thirdPart_image} className='w-[450px] h-[268px]' alt="" />
              </div>

          </div>



         {/* fourth-part */}

        <div className='flex items-center justify-center gap-[98px] px-[120px] py-[90px]'>
              <div className='flex flex-col items-start gap-6 w-[50%]'>
                  <h1 className='text-4xl font-inter font-semibold text-yellow-400'>Our Vision </h1>
                  <p className='text-richblack-300 leading-5 text-[16px]  font-inter'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines 
                  cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                  
              </div>

              <div className='flex flex-col items-start gap-6 w-[50%]'>
                  <h1 className='text-4xl font-inter font-semibold text-blue-400'>Our Mission </h1>
                  <p className='text-richblack-300 leading-5 text-[16px]  font-inter'>our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, 
                  and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                  
              </div>

        </div>



        {/* fifth-part */}

        <div className='flex px-[120px] py-[90px] bg-richblack-700'>
            <div className='flex items-center gap-3 w-full'>
                {
                    Data.map((data ,index) => {
                        return <div key={index} className='flex flex-col items-center justify-center gap-3 w-[293px]'>
                            <p className='text-4xl text-richblack-5 font-inter font-semibold leading-5'>{data.title}</p>
                            <p className='text-[16px] font-medium text-richblack-300 leading-6'>{data.value}</p>
                        </div>
                    })
                }
            </div>
        </div>



        {/* sixth-part */}
        

        <LearningGrid/> 

        

        <ReviewSection/>
        
        <ContactFormSection/>

        <Footer/>
       


    </div>
  )
}

export default AboutUs
