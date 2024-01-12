const RatingAndReview = require('../models/RatingAndReview');
const User = require('../models/User')
const Course = require('../models/Course');
const { default: mongoose } = require('mongoose');


exports.createRatingAndReview = async (req, res) => {
    try {
        const { review, rating, course_id } = req.body;
        const userId = req.user.Id;
        //user are enrolled or not
        const courseDetails = await Course.findById({ _id: course_id })
        if (!courseDetails.studentEnroll.includes(userId)) {
            return res.status(400).json({
                success: false,
                message: "user did'nt buy this course"
            })
        }


        const alreadyReviewed = await RatingAndReview.findOne({ user: userId, course: course_id })
        if (alreadyReviewed) {
            return res.status(400).json({
                success: false,
                message: "user already reviewed this course"
            })
        }

        if (!review || !rating) {
            return res.status(400).json({
                success: false,
                message: "Fill all the details like rating and reviews"
            })
        }



        //creating rating in db
        const ratingAndReviewsDetails = await RatingAndReview.create({ review, rating, user: userId, course: course_id }).populate("user");
        //updating the rating in course db
        const updateCourseRatings = await Course.findByIdAndUpdate({ _id: course_id }, { $push: { ratingAndReviews: ratingAndReviewsDetails._id } }, { new: true })


        console.log(ratingAndReviewsDetails);
        res.status(200).json({
            success: true,
            message: "Rating and Review created SUccessfully",
            ratingAndReviewsDetails,
        })




    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "issue occure while creating rating and review",

        })
    }
}



//get average Rating
exports.getAverageRating = async (req, res) => {
    try {
        const { course_id } = req.body;


        const result = await RatingAndReview.aggregate([
            {
                $match: {
                    course: new mongoose.Types.ObjectId(course_id)
                },
            },
            {
                $group: {
                    _id: null,
                    averageRating: { $avg: "$rating" }
                }
            }

        ])

        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                averageRating: result[0].averageRating,
            })
        }

        return res.status(200).json({
            success: true,
            message: "average rating is 0 now rating is given till now",
            averageRating: 0,
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "issue occure while getting average Rating",

        })
    }
}


//get all rating and reviews

exports.getAllRatingAndReviews = async (req , res) => {
    try {
        const allRatingReviews =  await RatingAndReview.find({})
                                                .sort({rating : "desc"}).populate({
                                                    path : "user",
                                                    select : "firstName lastName email image"
                                                }).populate({
                                                    path : "course",
                                                    select : "courseName"
                                                }).exec();
        console.log(allRatingReviews);
        res.status(200).json({
            success : true, 
            message : "all rating and reviews are found",
            allRatingReviews,
        })
    }catch(error){
        console.log(error)
        return res.status(400).json({
            success: false,
            message: error.message,

        })
    }
}