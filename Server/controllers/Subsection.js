const Section = require("../models/Section");
const { imageUploadToCloudinary } = require("../utils/imageUploader");

const SubSection = requrie('../models/SubSection');
require('dotenv').config();


exports.createSubSection = async(req , res) => {
    try{
        const {title, timeDuration , description , sectionId } = req.body;
        const videoFile = req.files.videoFile;

        //validation
        if(!title || !timeDuration || !description || !videoFile){
            return res.status(400).json({
                success :false,
                message : "please fill all the details for creating subSections"  
            })
        }

       const videofileUploadResponse = await imageUploadToCloudinary(videoFile , process.env.FOLDER_NAME)
 
        const newSubSection = await SubSection.create({title , timeDuration , description , videoUrl : videofileUploadResponse.secure_url})
        await Section.findByIdAndUpdate({_id : sectionId} , {$push: {subSection : newSubSection._id}} , {new :true}).populate("subSection").exec();
        res.status(200).json({
            success :true,
            message : "subsection createdSuccessfully",
            newSubSection,
        })

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message : "issue occur while creating SUbsection"
        })
    }
}

//update subsection

//delete subsection