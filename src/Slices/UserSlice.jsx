import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    token : "",
    user : {

        otp : "",
        
        
    }
}

const userSlice = createSlice({
    name : "User",
    initialState : initialState,
    reducers : {
        setUser : (state , action) => {
            state.user = action.payload;
            
        },

        setUserOtp : (state , action) => {
            state.user.otp = action.payload;
        },
        setToken : (state , action) => {
            state.token = action.payload;
        }
    },
    
})

export const {setUser , setUserOtp , setToken} = userSlice.actions;
export default userSlice.reducer;