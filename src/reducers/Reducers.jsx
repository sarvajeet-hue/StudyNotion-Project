import { combineReducers } from "@reduxjs/toolkit";
import userSliceReducer from '../Slices/UserSlice';
import authSliceReducer from '../Slices/auth';
import profileReducer from '../Slices/profile'
import purchasedHistory from "../Slices/purchasedHistory";


export const rootReducer  = combineReducers({
    user : userSliceReducer,
    auth : authSliceReducer,
    profile : profileReducer,
    purchased_History : purchasedHistory
})