const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    courseName : {
        type : String, 
        required : true
    },
    courseDescription : {
        type : String,
        required : true,
    },
    instructor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        
    },
    WhatYouWillLearn : { 
        type : String,

    },
    courseContent : [
        {
            type : String,
            
        }
    ],

    ratingAndReviews : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "RatingAndReview",
        }
    ],
    Price : {
        type :String
    },
    thumNail : {
        type : String
    },
    category:{
        type :mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    tag : {
        type : String,
        
    },
    studentEnroll : [
       {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        
       }
    ]
})

module.exports = mongoose.model('Course' , CourseSchema)