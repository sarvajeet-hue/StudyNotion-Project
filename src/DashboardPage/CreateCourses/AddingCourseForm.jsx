import React, { useState } from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";
import CTAButton from "../../components/core/Homepage/CTAButton";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export const AddingCourseForm = () => {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };

  const {register , formState :{errors} , handleSubmit} = useForm()
  const dispatch = useDispatch();
  function addingCourseToDatabase(data) {
    
    console.log("form Data :", data)
    console.log("Errors:", errors)
  }

  return (
    <div className="w-[665px] h-auto border rounded-lg p-4 bg-[#161D29]">
      <form onSubmit={handleSubmit(addingCourseToDatabase)} className="flex items-start flex-col gap-4">
        <div className="flex flex-col gap-6 w-full">
          <label className="flex flex-col gap-3">
            <p>
              Course Title <span className="text-[#EF476F]">*</span>
            </p>
            <input
              className="bg-[#2C333F] p-3 rounded-lg"
              type="text"
              placeholder="Enter Course Title"
              {...register("courseTitle")}  
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
              {...register("courseShortDescription")}  
            />
          </label>
  
          <label className="flex flex-col gap-3">
            <p>
              Price <span className="text-[#EF476F]">*</span>
            </p>
            <input
              className="bg-[#2C333F] p-3 rounded-lg"
              type="text"
              placeholder="Enter Price"
              {...register("price")} 
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
              {...register("category")}  
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
              {...register("tags")}  
            />
          </label>
  
          <label className="flex flex-col gap-3">
            <p>
              Course Thumbnail <span className="text-[#EF476F]">*</span>
            </p>
            <Dropzone {...register("courseThumbnail")} onChange={updateFiles} value={files}>
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
              {...register("benefitOfCourses")}  
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
              {...register("requirementOrInstruction")}  
            />
          </label>
        </div>

       
        <CTAButton type="submit"active={true}>Add</CTAButton>  
      </form>
    </div>
  );
};
