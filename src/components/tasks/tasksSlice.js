import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name:'tasks',
    initialState: {
        tasks: [
            {id:0, title:"Afwassen", category:"house", isDone: false, doToday: true},
            {id:1, title:"Was ophangen", category:"house", isDone: false, doToday: true},
            {id:2, title:"Codecademy", category:"study", isDone: false, doToday: true},
            {id:3, title:"Yoga", category:"sport", isDone: false, doToday: true},
            {id:4, title:"Canna's", text:"uit de tuin naar binnen halen", category:"house", isDone: false, doToday: true}
        ],
    },
    reducers: {
        addTask: (state,action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state,action) =>{
            const index = state.tasks.findIndex((task) => task.id === action.payload);
            state.tasks.splice(index, 1);
        },
        toggleTaskDone: (state,action) =>{
            const index = state.tasks.findIndex((task) => task.id === action.payload);
            state.tasks[index].isDone = !state.tasks[index].isDone;
        },
        toggleDoToday: (state,action) => {
          const index = state.tasks.findIndex((task) => task.id === action.payload);
            state.tasks[index].doToday = !state.tasks[index].doToday;
        }
    }
});

export const { addTask, removeTask, toggleTaskDone, toggleDoToday } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks.tasks;
export default tasksSlice.reducer;

