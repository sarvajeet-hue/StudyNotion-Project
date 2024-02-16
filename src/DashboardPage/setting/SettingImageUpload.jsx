import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setImage } from '../../Slices/auth';

const SettingImageUpload = () => {

    const {image} = useSelector((state) => state.auth)
    const [selectFile , setselectedFile] = useState(null);
    
    const dispatch = useDispatch();



    function selectHandler(event){
      const tempImg = event.target.files[0]
      const finalImg = URL.createObjectURL(tempImg)
       setselectedFile(finalImg)


    }
    console.log("SelectedFile-->",selectFile)

    function imageHandler(){
        dispatch(setImage(selectFile))
    }
    


  return (
    <div className='bg-richblack-700 w-full h-[400px]'>
        <div className='flex gap-[20px] '>
             <img className='w-[80px] h-[80px] rounded-full'
              src={selectFile ? selectFile : image} alt="" />
             

            
             <div className='flex flex-col gap-4'>
                <h1>Change Profile Picture</h1>
                <div className='flex gap-2 items-center'>
                    {/* <button

                     className='bg-yellow-5 rounded-md px-3 py-1 text-richblack-800 font-inter font-semibold'>Change</button> */}
                      <input onChange={selectHandler }  className='bg-yellow-5 leading-tight  focus:outline-none appearance-none rounded-md px-3 py-1 text-richblack-800 font-inter font-semibold' placeholder='Select' type="file"  />
                      <button  onClick={imageHandler} className='bg-richblack-500 rounded-md px-3 py-1 text-richblack-800 font-inter font-semibold' >Update</button>
                    <button className='bg-richblack-500 rounded-md px-3 py-1 text-richblack-800 font-inter font-semibold'>Remove</button>
                </div>
             </div>
        </div>
    </div>
  )
}

export default SettingImageUpload
