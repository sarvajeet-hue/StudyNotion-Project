const { instance } = require('../config/razorpay');
const User = require('../models/User')
const Course = require('../models/Course')
const { courseEnrollmentEmail } = require('../mail/templates/CourseEnrollment');
const { mailSender } = require('../utils/mailsender');
const { default: mongoose } = require('mongoose');


require('dotenv').config();

//capture payment



exports.capturePayment = async (req, res) => {
    try {
        const userId = req.user.Id;
        const { course_id } = req.body;
        if (!course_id) {
            return res.status(400).json({
                success: false,
                message: "Invalid Details"
            })
        }
        let course;
        try {
            course = await Course.findById(course_id);
            if (!course) {
                return res.status(400).json({
                    success: false,
                    message: "Course Details are not valid"
                })
            }


            //check user already buy course or not

            const uid = new mongoose.Types.ObjectId(userId); //here user id in string format so for matching we convert into object id
            if (course.studentEnroll.includes(uid)) {
                return res.status(200).json(
                    {
                        success: false,
                        message: "User already Enrolled"
                    }
                )
            }


        } catch (error) {
            console.log(error)
            res.status(400).json({
                success: false,
                message: "issue occur while finding valid course"
            })
        }

        //create order
        try {
            const amount = course.Price;
            const currency = "INR";


            const options = {
                amount: amount * 100,
                receipt: Math.random(Date.now().toString),
                currency,
                notes: {
                    courseId: course_id,
                    userId,
                }
            }

            const paymentResponse = await instance.orders.create(options);
            console.log(paymentResponse);

            res.status(200).json({
                success: true,
                message: "Payment Created Successfully",
                courseName: course.courseName,
                courseDescription: course.courseDescription,
                amount: paymentResponse.amount,
                receipt,
                currency: paymentResponse.currency,
                notes,
                orderId: paymentResponse.id,
                thumnail: course.thumbNail
            })


        } catch (error) {
            console.log(error)
            res.status(400).json({
                success: false,
                message: "issue occuring while creating payments"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "issue occur while capture Payment Course"
        })
    }
}

//verify signature

exports.verifySignature = async (req, res) => {
    const webhookSecret = "12345678";
    const signature = req.headers["x-razorpay-signature"];

    const shasum = crypto.createHmac("Sha256", webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");


    if (signature === digest) {
        console.log("paymeny is authorised");

        try {
            const { userId, course_id } = req.body.payload.payment.entity.notes;



            const enrollCourse = await Course.findByIdAndUpdate({ _id: course_id }, { $push: { studentEnroll: userId } }, { new: true }).populate("studentEnroll").exec();
            if (!enrollCourse) {
                return res.status(500).json({
                    success: false,
                    message: "COurse not Found"
                })
            }
            console.log(enrollCourse);

            const enrolledUser = await User.findByIdAndUpdate({ _id: userId }, { $push: { courses: course_id } }, { new: true }).populate("courses").exec;

            if (!enrolledUser) {
                return res.status(500).json({
                    success: false,
                    message: "User not Found"
                })
            }
            console.log(enrolledUser);

            //mail send

            const emailResponse = await mailSender(
                enrolledUser.email,
                "Congratulation you are a part of this course",
                "this is course review"
            )
            console.log(emailResponse);

            res.status(200).json({
                success: true,
                message: "Course buyed Successfully",
                enrollCourse,

            })
        }
        catch (error) {
            console.log(error)
            res.status(400).json({
                success: false,
                message: "issue occure while updating in user model and course model "
            })
        }


    }
    else{
        return res.status(500).json({
            success : false,
            message : "Invalid Request"
        })
    }
}