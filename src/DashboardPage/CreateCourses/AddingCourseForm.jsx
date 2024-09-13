import React, { useState } from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";
import CTAButton from "../../components/core/Homepage/CTAButton";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaComment } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AddingCourseForm = () => {

  const {user} = useSelector((state) => state.user)
  const {register , handleSubmit , setValue} = useForm();
  const navigate = useNavigate();
  console.log("user token", user.token)

  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
    setValue("file" , incommingFiles)
  };
  

  async function onSubmitForm(data , event){
    event.preventDefault()
    console.log("Form data" , data)
    const formData = new FormData();

    // Append text fields
    formData.append("courseName", data.courseName);
    formData.append("courseDescription", data.courseDescription);
    formData.append("WhatYouWillLearn", data.Benifits);
    formData.append("courseContent", data.Instruction);
    formData.append("Price", data.Price);
    formData.append("category", data.Category);
    formData.append("token" , user.token)
  
    // Append the thumbnail image (assuming data.file contains the image)
    if (data.file && data.file.length > 0) {
      formData.append("thumbnailImage", data.file[0]); // Only send the first file
    }

    const response = await axios.post("http://localhost:4000/api/v1/course/createcourse" , formData )
    console.log("response:" , response)
    toast.success("Course Added Successfully")
    navigate("/dashboard/courses")


    
  }

  return (
    <div className=" w-[665px] h-auto border rounded-lg p-4 bg-[#161D29]">
      <form onSubmit={handleSubmit(onSubmitForm)} className="flex items-start flex-col gap-4">
        <div className="flex flex-col gap-6 w-full">
          <label  className="flex flex-col gap-3">
            
             <p> Course Title <span className="text-[#EF476F]">*</span></p>
            
            <input
            
              className="bg-[#2C333F] p-3 rounded-lg"
              type="text"
              placeholder="Enter Course Title"
              {...register("courseName")}
            />
           
          </label>
          
  
          <label className="flex flex-col gap-3">
            <p>
              Course Short Description <span className="text-[#EF476F]">*</span>
            </p>
            <textarea
              className="bg-[#2C333F] p-3 rounded-lg h-[127px]"
              type="text"
              placeholder="Enter Description"
              {...register("courseDescription")}
            />
          </label>
  
          <label className="flex flex-col gap-3">
            <p>
              Price <span className="text-[#EF476F]">*</span>
            </p>
            <input
              className="bg-[#2C333F] p-3 rounded-lg"
              type="number"
              placeholder="Enter Price"
              {...register("Price")}
            />
          </label>
  
          <label className="flex flex-col gap-3">
            <p>
              Category <span className="text-[#EF476F]">*</span>
            </p>
            <input
              className="bg-[#2C333F] p-3 rounded-lg"
              type="text"
              placeholder="Choose a category"
              {...register("Category")}
            />
          </label>
  
          <label className="flex flex-col gap-3">
            <p>
              Tags <span className="text-[#EF476F]">*</span>
            </p>
            <input
              className="bg-[#2C333F] p-3 rounded-lg"
              type="text"
              placeholder="Choose a Tag"
              {...register("Tags")}
            />
          </label>
  
          <label className="flex flex-col gap-3">
            <p>
              Course Thumbnail <span className="text-[#EF476F]">*</span>
            </p>
            <Dropzone  onChange={updateFiles} value={files}>
              {files.map((file) => (
                <FileMosaic {...file} preview />
              ))}
            </Dropzone>

      
          </label>
  
          <label className="flex flex-col gap-3">
            <p>
              Benefit of Courses <span className="text-[#EF476F]">*</span>
            </p>
            <textarea
              className="bg-[#2C333F] p-3 rounded-lg h-[127px]"
              type="text"
              placeholder="Enter Benefits of Courses"
              {...register("Benifits")} 
            />
          </label>
  
          <label className="flex flex-col gap-3">
            <p>
              Requirement/Instruction <span className="text-[#EF476F]">*</span>
            </p>
            <input
              className="bg-[#2C333F] p-3 rounded-lg"
              type="text"
              placeholder="Requirement/Instruction"
              {...register("Instruction")} 
            />
          </label>
        </div>
        
        <CTAButton type="submit" active={true}>Add</CTAButton>  
      </form>
    </div>
  );
};
