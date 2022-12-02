import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
    name:'calendar',
    initialState: {
        birthdays: [
            { id:"1", name: "Mom", date:"1955-07-19"}, 
            { id:"2", name: "Dad", date:"1950-04-12"}]
    },
    reducers: {
        addDay: (state,action) => {
            console.log(action.payload);
            state.birthdays.push(action.payload);
        },
        removeDay: (state,action) =>{            
            console.log(action.payload);
            const index = state.birthdays.findIndex((day) => day.id === action.payload.id);
            console.log(index);
            state.birthdays.splice(index, 1);
        },
        editDay: (state,action) =>{
            const index = state.birthdays.findIndex((day) => day.id === action.payload.id);
            state.birthdays.splice(index, 1, action.payload);
        }
    }
});

export const { addDay, removeDay, editDay } = calendarSlice.actions;
export const selectBirthdays = (state) => state.calendar.birthdays;
export default calendarSlice.reducer;