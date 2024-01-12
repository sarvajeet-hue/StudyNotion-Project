import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
        }
    },
    
})

export const {setUser , setUserOtp} = userSlice.actions;
export default userSlice.reducer;