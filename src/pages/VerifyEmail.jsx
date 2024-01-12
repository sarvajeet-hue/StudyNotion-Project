import React from 'react'
import { useState ,useEffect } from 'react';
import OtpInput from 'react-otp-input';
import {BiArrowBack} from "react-icons/bi"
import { Link } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import { setUserOtp } from '../Slices/UserSlice';
import axios from 'axios';



const VerifyEmail = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
   
    
    const [otp, setOtp] = useState('');

     function onSubmit(e) {
      e.preventDefault();
  
      try {
        dispatch(setUserOtp(otp)); // Set OTP in Redux store
        console.log("ye h USer --> " , user)

        const {accountType , firstname , lastname , email , password , confirmpassword} = user.user;
        console.log(accountType)
        console.log(firstname)
        console.log(lastname)
        console.log(email)
        console.log(password)
        console.log(confirmpassword)

        sendDb(accountType  , firstname , lastname , email , password , confirmpassword ,otp);
        console.log(otp)
  
        
        
      } catch (error) {
        console.log("Error posting user details to the database", error);
      }
    };


    async function sendDb(accountType , firstname , lastname , email , password , confirmpassword , otp){
       try{
        const sendData = {
          accountType , firstname , lastname , email , password , confirmpassword , otp
        }
        console.log("this is otp --> " , otp )
        console.log(firstname);
        console.log("sendData-->" ,sendData)

        const createResponse = await axios.post("http://localhost:4000/api/v1/auth/signup", sendData);
  
        console.log("Db Response ", createResponse);
       }catch(error){
          console.log("this is the issue while posting data into db" , error)
       }
    }



    
    

    return (
        <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">
          
            <div className="max-w-[500px] p-4 lg:p-8">
              <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
                Verify Email
              </h1>
              <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
                A verification code has been sent to you. Enter the code below
              </p>
              <form onSubmit={onSubmit} >

                    <div className='flex gap-5 items-center justify-center'>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span>-</span>}
                            containerStyle={{
                                justifyContent: "space-between",
                                gap: "0 6px",
                              }}
                            renderInput={(props) => <input {...props}
                            
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                              }}
                            className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                            
                            />
                        }
                           
                        />
                        

                        
                    </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
                >
                  Verify Email
                </button>
              </form>
              <div className="mt-6 flex items-center justify-between">
                <Link to="/signup">
                  <p className="text-richblack-5 flex items-center gap-x-2">
                    <BiArrowBack /> Back To Signup
                  </p>
                </Link>
                <button
                  className="flex items-center text-blue-100 gap-x-2"
                  >
                  
                  Resend it
                </button>
              </div>
            </div>
          
        </div>
      );
}

export default VerifyEmail
