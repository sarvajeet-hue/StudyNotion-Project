import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setImage } from '../../Slices/auth';
import { FaUpload } from "react-icons/fa";
import axios from 'axios';


const SettingImageUpload = () => {

    const {image} = useSelector((state) => state.auth)
    const [selectFile , setselectedFile] = useState(null);

    const [profilePicture , setProfilePicture] = useState(image)
    
    const dispatch = useDispatch();
    const {user} = useSelector((state) =>state.user)
    
    console.log("user.token" , user.token)





    async function selectHandler(event){
      const tempImg = event.target.files[0]

      const formData = new FormData();
      formData.append("token" , user.token)
      formData.append("file", tempImg)



      console.log("formdata", formData)
      

      try{
        const response = await axios.post("http://localhost:4000/api/v1/auth/updateProfile" , formData)
        console.log(
          "profile update response :", response
        )

        setProfilePicture(response?.data?.imgData?.image)
       
        
      }
      catch(error){
        console.log("error in updating profile :", error)
      }
      


    }
    console.log("SelectedFile-->",selectFile)

    function imageHandler(){
      dispatch(setImage(profilePicture))
    }
    


  return (
    <div className='bg-richblack-700 w-full h-[400px]'>
        <div className='flex gap-[20px] p-[20px] '>
             <img className='w-[80px] h-[80px] rounded-full'
              src={profilePicture} alt="" />
             

            
             <div className='flex flex-col gap-4'>
                <h1>Change Profile Picture</h1>
                <div className='flex gap-2 items-center'>
                    {/* <button

                     className='bg-yellow-5 rounded-md px-3 py-1 text-richblack-800 font-inter font-semibold'>Change</button> */}
                      {/* <input onChange={selectHandler }  className='bg-yellow-5 leading-tight  focus:outline-none appearance-none rounded-md px-3 py-1 text-richblack-800 font-inter font-semibold' placeholder='Select' type="file"  /> */}
                     <div className='bg-yellow-5 leading-tight focus:outline-none appearance-none rounded-full flex items-center justify-center h-[40px] w-[40px] px-3 py-1 text-richblack-800'>
                      <input type="file" id='ImageFile' onChange={selectHandler} className='appearance-none hidden'  />
                      <label htmlFor="ImageFile" className='rounded-lg flex items-center justify-center' >
                      <FaUpload/>
                      </label>
                     </div>
                      <button  onClick={imageHandler} className='bg-richblack-500 rounded-md px-3 py-1 text-richblack-800 font-inter font-semibold' >Update</button>
                    <button className='bg-richblack-500 rounded-md px-3 py-1 text-richblack-800 font-inter font-semibold'>Remove</button>
                </div>
             </div>
        </div>
    </div>
  )
}

export default SettingImageUpload
