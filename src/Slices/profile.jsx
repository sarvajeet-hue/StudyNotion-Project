import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile : null,
}

const profileSlice = createSlice({
    name : "Profile", 
    initialState,
    reducers : {
        setProfile : (state , action) => {
            state.profile = action.payload
        }
    }
})


export const {setProfile} = profileSlice.actions;
export default profileSlice.reducer;