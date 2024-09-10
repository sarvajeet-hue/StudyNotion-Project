import React from "react";

export const AddingCourseForm = () => {
  return (
    <div className="w-[665px] h-[1192px] flex flex-col gap-6 border rounded-lg p-4 bg-[#161D29]">
      <label className="flex flex-col gap-3">
        <p>Course Title <span className=" text-[#EF476F]">*</span></p> 
        <input className="bg-[#2C333F] p-3 rounded-lg"  type="text" placeholder="Enter Course Title" />
      </label>


      <label className="flex flex-col gap-3">
        <p>Course Short Description <span className=" text-[#EF476F]">*</span></p> 
        <textarea className="bg-[#2C333F] p-3 rounded-lg h-[127px]" type="text" placeholder="Enter Description" />
      </label>

      <label className="flex flex-col gap-3">
        <p>Price <span className=" text-[#EF476F]">*</span></p> 
        <input className="bg-[#2C333F] p-3 rounded-lg"  type="text" placeholder="Enter Price" />
      </label>


      <label className="flex flex-col gap-3">
        <p>Category <span className=" text-[#EF476F]">*</span></p> 
        <input className="bg-[#2C333F] p-3 rounded-lg"  type="text" placeholder="Choose a category" />
      </label>


      <label className="flex flex-col gap-3">
        <p>Tags <span className=" text-[#EF476F]">*</span></p> 
        <input className="bg-[#2C333F] p-3 rounded-lg"  type="text" placeholder="Choose a Tag" />
      </label>



      <label className="flex flex-col gap-3">
        <p>Course Thumnail <span className=" text-[#EF476F]">*</span></p> 
        <textarea className="bg-[#2C333F] p-3 rounded-lg h-[127px]" type="text" placeholder="Enter Description" />
      </label>


      <label className="flex flex-col gap-3">
        <p>Benifit of Courses <span className=" text-[#EF476F]">*</span></p> 
        <textarea className="bg-[#2C333F] p-3 rounded-lg h-[127px]" type="text" placeholder="Enter Benifits of courses" />
      </label>


      <label className="flex flex-col gap-3">
        <p>Requirement/Instruction <span className=" text-[#EF476F]">*</span></p> 
        <input className="bg-[#2C333F] p-3 rounded-lg"  type="text" placeholder="Requirement/Instruction" />
      </label>
    </div>
  );
};
