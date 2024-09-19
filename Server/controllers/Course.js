const Course = require("../models/Course");
const Category = require("../models/Category");
const User = require("../models/User");
const { imageUploadToCloudinary } = require("../utils/imageUploader");

require("dotenv").config();

//create courses handler

// exports.createCourses = async(req , res) => {
//     try{
//         const {courseName , courseDescription  , WhatYouWillLearn , courseContent ,Price ,category } = req.body;
//         if(!courseName || !courseDescription || !WhatYouWillLearn || !Price ){
//             return res.status(400).json({
//                 success :false,
//                 message : "Fill all the course details"
//             })
//         }

//         const courseCreate = await Course.create({courseName , courseDescription , WhatYouWillLearn , courseContent , Price , category});

//         res.status(200).json({
//             message : "course create Successfully",
//             data : courseCreate
//         })
//     }catch(error){
//         console.log("error" , error)
//         res.status(500).json({
//             message : "course not create Successfully",

//         })
//     }
// }

exports.createCourses = async (req, res) => {
  try {
    const {
      courseName,
      courseDescription,
      WhatYouWillLearn,
      courseContent,
      Price,
      category,
      
    } = req.body;
    console.log("req.files:" , req.files)
    console.log("WhatYouWillLearn", WhatYouWillLearn);
    console.log("courseContent", courseContent);
    console.log("category", category);
    const thumnail = req.files.thumbnail;
    console.log("thumbnail:", thumnail)

    //validation

    if (!courseName || !courseDescription || !WhatYouWillLearn || !Price) {
      return res.status(400).json({
        success: false,
        message: "Fill all the course details",
      });
    }
    console.log("runs here");
    //instructor id
    const userId = req.user.Id;
    console.log("UserID", userId);
    const instructorDetails = await User.findById(userId);
    console.log("instructor details", instructorDetails);

    if (!instructorDetails) {
      return res.status(400).json({
        success: false,
        message: "Instructor Details not Found",
      });
    }

    //check given tag is valid or not

    const categoryDetails = await Category.findOne({name :category});
    console.log("categoryDetails:", categoryDetails);
    if (!categoryDetails) {
      return res.status(400).json({
        success: false,
        message: "Category not found",
      });
    }

    console.log("thumnail in backend:", thumnail)

    // upload image to
    const thumnailImage = await imageUploadToCloudinary(thumnail , process.env.FOLDER_NAME)
    console.log("thumbnailImage" , thumnailImage)

    //create entry of new course
    const newCourse = await Course.create({
      courseName,
      courseContent,
      courseDescription,
      instructor: instructorDetails._id,
      category: categoryDetails._id,
      WhatYouWillLearn,
      Price,
      thumNail : thumnailImage.secure_url,
    })

    // Populate courseContent
    const populatedCourse = await Course.findById(newCourse._id).populate("courseContent");

    
      
    console.log("Now code runs here" , populatedCourse)
    //update on user model
    await User.findByIdAndUpdate(
      { _id: instructorDetails._id },
      { $push: { courses: newCourse._id } },
      { new: true }
    );

    //update tag schema

    await Category.findByIdAndUpdate(
      { _id: categoryDetails._id },
      { $push: { course: newCourse._id } }, 
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Course Created SuccessFully",
      data: newCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Issue error regarding creating the courses",
    });
  }
};

// getall courses handler

exports.getAllCourses = async (req, res) => {
  try {
    const allCourseDetails = await Course.find(
      {},
      {
        courseName: true,
        category: true,
        courseContent: true,
        Price: true,
        thumNail: true,
        instructor: true,
        ratingAndReviews: true,
        WhatYouWillLearn :  true
      }
    ) .populate("category")
      .populate("instructor")
      .populate("courseContent")
      .exec();
    if (!allCourseDetails) {
      return res.status(400).json({
        success: false,
        message: "Course not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Courses found successfully",
      allCourseDetails,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Issue error regarding creating the courses",
    });
  }
};

//getCourse Details

exports.getCourseDetails = async (req, res) => {
  try {
    const { courseId } = req.body;
    const courseDetails = await Course.findById({ _id: courseId })
      .populate({
        path: "instructor",
        path: "additionalDetail",
      })
      .populate("courseContent")
      .populate("ratingAndReviews")
      .populate("category")
      .populate("studentEnroll")
      .exec();

    if (!courseDetails) {
      return res.status(400).json({
        success: false,
        message: "COurse details not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course Details Found Successfully",
      courseDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "issue are occure while fetching course details",
    });
  }
};
