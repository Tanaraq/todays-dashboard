import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const currentDaySlice = createSlice({
    name: 'currentDay',
    initialState: { 
        
    },
    reducer: { }
}) 

export const selectCurrentDay = (state) => state.currentDay.currentDay;

export default currentDaySlice.reducer;



