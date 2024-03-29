const Course = require('../models/Course');
const Category = require('../models/Category');
const User = require('../models/User');
const {imageUploadToCloudinary} = require('../utils/imageUploader')
require('dotenv').config();

//create courses handler
exports.createCourses = async(req , res) => {
    try{
        const {courseName , courseDescription  , WhatYouWillLearn , courseContent ,Price ,category } = req.body;
        const thumnail = req.files.thumnailImage;

        //validation

        if(!courseName || !courseDescription || !WhatYouWillLearn || !Price || !thumnail){
            return res.status(400).json({
                success :false,
                message : "Fill all the course details"
            })
        }

        //instructor id
        const userId = req.user.Id;
        const instructorDetails = await User.findById(userId);
        console.log("instructor details",instructorDetails)

        if(!instructorDetails){
            return res.status(400).json({
                success : false,
                message : "Instructor Details not Found"
            })
        }

        //check given tag is valid or not

        const categoryDetails = await Category.findById(category);
        if(!categoryDetails){
            return res.status(400).json({
                success :false,
                message : "Category not found"
            })
        }

        //upload image to 
        const thumnailImage = await imageUploadToCloudinary(thumnail , process.env.FOLDER_NAME)

        //create entry of new course 
        const newCourse = await Course.create({
            courseName , courseContent , courseDescription ,instructor : instructorDetails._id ,
            category : categoryDetails._id,
            WhatYouWillLearn,
            Price,
            thumbNail : thumnailImage.secure_url, 
        }).populate("courseContent").exec();

        //update on user model 
        await User.findByIdAndUpdate({_id : instructorDetails._id} , {$push : {courses : newCourse._id}} , {new :true})

        //update tag schema

        await Category.findByIdAndUpdate({_id : categoryDetails._id} , {$push : {course : newCourse._id}})

        res.status(200).json({
            success : true,
            message : "Course Created SuccessFully",
            data : newCourse,
        })


    }catch(error){
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Issue error regarding creating the courses"
        })
    }
}

// getall courses handler

exports.getAllCourses = async(req , res) => {
    try{
        const allCourseDetails = await Course.find({},{courseName :true  , category : true , courseContent : true ,Price :true , thumnail:true , instructor :true ,
        ratingAndReviews :true}).populate("instructor").populate("courseContent").exec();
        if(!allCourseDetails){
            return res.status(400).json({
                success : false,
                message : "Course not found"
            })
        }
        res.status(200).json({
            success : true,
            message : "Courses found successfully",
            allCourseDetails,
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Issue error regarding creating the courses"
        })
    }
}


//getCourse Details

exports.getCourseDetails = async(req , res) => {
    try{
        const {courseId} = req.body;
        const courseDetails = await Course.findById({_id : courseId}).populate({
            path : "instructor",
            path : "additionalDetail"
        }).populate("courseContent").populate("ratingAndReviews").populate("category").populate("studentEnroll").exec();

        if(!courseDetails){
            return res.status(400).json({
                success :false, 
                message  : "COurse details not found"
            })
        }

        res.status(200).json({
            success : true,
            message : "Course Details Found Successfully",
            courseDetails,
        })
    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            success :false, 
            message  : "issue are occure while fetching course details"
        })
    }   
}

