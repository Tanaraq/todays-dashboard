import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
    name:'calendar',
    initialState: {
        specialDays: [{ text: "Menno", date:"1977-09-12"}]
    },
    reducers: {
        addDay: (state,action) => {
            console.log(action.payload);
            state.specialDays.push(action.payload);
        },
        removeDay: (state,action) =>{
            state.specialDays.splice(action.payload.id, 1);
        }
    }
});

export const { addDay, removeDay } = calendarSlice.actions;
export const selectDays = (state) => state.calendar.specialDays;
export default calendarSlice.reducer;