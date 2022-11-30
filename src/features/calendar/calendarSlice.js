import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
    name:'calendar',
    initialState: {
        specialDays: [{ id:"1", text: "Menno", date:"1977-09-12"}]
    },
    reducers: {
        addDay: (state,action) => {
            console.log(action.payload);
            state.specialDays.push(action.payload);
        },
        removeDay: (state,action) =>{            
            const index = state.specialDays.findIndex((day) => day.id === action.payload);
            state.specialDays.splice(index, 1);
        },
        editDay: (state,action) =>{
            console.log(action.payload)
            const index = state.specialDays.findIndex((day) => day.id === action.payload.id);
            state.specialDays.splice(index, 1, action.payload);
        }
    }
});

export const { addDay, removeDay, editDay } = calendarSlice.actions;
export const selectDays = (state) => state.calendar.specialDays;
export default calendarSlice.reducer;