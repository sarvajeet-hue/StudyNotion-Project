import { combineReducers } from "@reduxjs/toolkit";
import userSliceReducer from '../Slices/UserSlice';
import authSliceReducer from '../Slices/auth';
import profileReducer from '../Slices/profile'


export const rootReducer  = combineReducers({
    user : userSliceReducer,
    auth : authSliceReducer,
    profile : profileReducer,
})