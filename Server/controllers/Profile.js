const Profile = require('../models/Profile')
const User = require('../models/User');


exports.updateProfile = async(req , res) => {
    try{
        const { gender= "" , dateOfBirth="" ,about="", contactNumber=""} = req.body;
        const userId = req.user.Id;
        if(!gender || !dateOfBirth || !about || !contactNumber){
            return res.status(400).json({
                success : false,
                message : "Missing Details"
            })
        }
        
        const userDetail = await User.findById(userId);
        const profileId = userDetail.additionalDetail;

        const profileDetails = await Profile.findById(profileId);

        profileDetails.dateOfBirth = dateOfBirth;
        profileDetails.about = about;
        profileDetails.gender = gender;
        profileDetails.contactNumber = contactNumber;

        await profileDetails.save();
        
       
        res.status(200).json({
            success :true,
            message : " Profile Updated Succesfully",
            profileDetails,
        })
    }catch(error){
        console.log(error)
        res.status(400).json({
            success : false,
            message : "issue Occur while creating profile"
        })
    }
}




// delete profile

exports.deleteProfile = async(req , res)=>{
    try{
       const userId = req.user.Id;
       const userDetail = await User.findById(userId)

       const profileId = userDetail.additionalDetail; 
        if(!profileId){
            return res.status(400).json({
                success : false,
                message: "incorrect profileId"
            })
        }
        const existedProfile = await Profile.findByIdAndDelete({_id : profileId});

        // deleting user
        await User.findByIdAndDelete({_id : userId}) 

        res.status(200).json({
            success : true,
            message : "deleted Successfully"
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            success : false,
            message : "issue occur while deleting profile"
        })
    }
}

//get all user details

exports.getAllUserDetails = async(req , res)=>{
    try{
        const userId = req.user.Id;
        const userDetail = await User.findById(userId).populate("additionalDetail").exec();

        res.status(200).json({
            success :true,
            message : "getting successfullt all user details",
            userDetail,
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            success : false , 
            message : "issue occurr while gettind all user details"
        })
    }
}