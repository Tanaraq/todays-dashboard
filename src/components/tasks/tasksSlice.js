import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name:'tasks',
    initialState: {
        tasks: ["do the dishes","laundry","water plants"]
    },
    reducers: {
        addTask: (state,action) => {
            state.push(action.payload);
        },
        removeTask: (state,action) =>{
            state.filter(project => project.id !== action.payload.id);
        }
    }
});

export const { addTask, removeTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks.tasks;
export default tasksSlice.reducer;
