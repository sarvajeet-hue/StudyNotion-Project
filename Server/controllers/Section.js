const Section = require('../models/Section');
const Course = require('../models/Course');


exports.createSection = async(req , res) => {
    try{
        const {sectionName , courseId} = req.body;
        if(!sectionName || !courseId){
            return res.status(400).json({
                success :false,
                message : "please fill all section name"
            })
        }
        const existedSection = await Section.findOne({sectionName})
        if(existedSection){
            return res.status(400).json({
                success :false,
                message : "already this section name is present please try different name "
            })
        }
        const sectionDetails = await Section.create({sectionName : sectionName})
        
        await Course.findByIdAndUpdate(courseId , {$push : {courseContent : sectionDetails}} , {new:true})


        res.status(200).json({
            success :true,
            message : "section created successfully",
            sectionDetails : sectionDetails
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            success :false,
            message : "error occur while creating section"
        })
    }
}

//update section

exports.updateSection = async(req, res) => {
    try{
        const {sectionName , sectionId} = req.body;
        if(!sectionName || !sectionId){
            return res.status(400).json({
                success : false,
                message : "please fill all the details"
            })
        }

        const existedSectionId = await Section.findById(sectionId);
        if(!existedSectionId) {
            return res.status(400).json({
                success : false,
                message : "there is no section present at this id"
            })
        }
        const updatedDetails = await Section.findByIdAndUpdate(sectionId , {sectionName : sectionName} , {new : true})
        res.status(200).json({
            success :true, 
            updatedDetails, 
            message : "section updated successfully"
        })

    }catch(error){
        console.log(error)
        return res.status(400).json({
            success : false,
            message : "there is an issuse present while updatind the section"
        })
    }
}

//delete section

exports.deleteSection = async(req , res) => {
    try{
        const {  sectionId} = req.params;
        if( !sectionId){
            return res.status(400).json({
                success : false,
                message : "please fill all the details"
            })
        }

        const existedSectionId = await Section.findById(sectionId);
        if(!existedSectionId) {
            return res.status(400).json({
                success : false,
                message : "there is no section present at this id"
            })
        }
        const updatedDetails = await Section.findByIdAndDelete(sectionId)
        res.status(200).json({
            success :true, 
            updatedDetails, 
            message : "section Deleted successfully"
        })

    }catch(error){
        console.log(error)
        return res.status(400).json({
            success : false,
            message : "there is an issuse present while deleting the section"
        })
    }
}