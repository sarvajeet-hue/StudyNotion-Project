const cloudinary = require("cloudinary").v2;

exports.imageUploadToCloudinary = async (file, folder, height, quality , res , req) => {
    try {
        const options = { folder }
        if (height) {
            options.height = height;
        }
        if (quality) {
            options.quality = quality
        }
        options.resource_type = "auto"
        return await cloudinary.uploader.upload(file.tempFilePath, options);
    
    }
    catch (error) {
        // res.status(500).json({
        //     success : false, 
        //     message : "Error Occured regarding image upload",
            
        // })
        console.log("error in cloudinary" , error)
    }
}
