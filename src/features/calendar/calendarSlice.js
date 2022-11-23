import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
    name:'calendar',
    initialState: {
        specialDays: []
    },
    reducers: {
        addDay: (state,action) => {
            state.push(action.payload);
        },
        removeDay: (state,action) =>{
            state.filter(day => day.id !== action.payload.id);
        }
    }
});

export const { addDay, removeDay } = calendarSlice.actions;
export const selectDays = (state) => state.calendar.specialDays;
export default calendarSlice.reducer;