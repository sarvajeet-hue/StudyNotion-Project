const Category = require('../models/Category');
const Tags = require('../models/Category');
const Course = require('../models/Course');


exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        //validation
        if (!name || !description) {
            return res.status(400).json({
                success: false,
                message: "Please fill all details in tag creation"
            })
        }

        const CategoryDetails = await Category.create({ name, description });
        console.log(CategoryDetails);
        res.status(200).json({
            success: true,
            message: "Categories Created Successfully in Db",
            CategoryDetails: CategoryDetails

        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "error in creating categories"
        })
    }
}

//getAllcategorys

exports.showAllCategories = async (req, res) => {
    try {
        const allCategories = await Category.find({}, { name: true, description: true });
        res.status(200).json({
            success: true,
            allCategories,
            message: " this are all the categories present in db"
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "error in getting all categories"
        })
    }
}

//category page details

exports.categoryPageDetails = async (req, res) => {
    try {
        const { category_id } = req.body;

        const categoryDetails = await Category.findById({ _id: category_id }).populate("course").exec();
        if (!categoryDetails) {
            return res.status(404).json({
                success: false,
                message: "category Not found in category page"
            })
        }
        //get different category details

        const differntCategoryDetails = await Category.find({ _id: { $ne: category_id } }).populate("course").exec();

        // get top courses
        const allCourses = await Course.find({}).sort((a , b)=> b.studentEnroll.length - a.studentEnroll.length);


        const numberOfTopCourses = 10;
        const topCourses = allCourses.slice(0 , numberOfTopCourses);

        res.status(200).json({
            success: true,
            message: "Category Page Details are Found",
            data: {
                categoryDetails,
                differntCategoryDetails,
                topCourses
            }
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
           message : error.message,
        })
    }
}