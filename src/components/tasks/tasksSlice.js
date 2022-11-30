import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name:'tasks',
    initialState: {
        tasks: [
            {id:0, title:"Afwassen", category:"house", isDone: false, doToday: true, recurrence: {recInterval: "week",
            weekdays: [false,false,false,false,false,false,false]}},
            {id:1, title:"Was ophangen", category:"house", isDone: false, doToday: false, recurrence: {recInterval: "week",
            weekdays: [false,false,false,false,false,true,false]}},
            {id:2, title:"Codecademy", category:"study", isDone: false, doToday: false, recurrence: {recInterval: "week",
            weekdays: [false,true,true,true,true,true,false]}},
            {id:3, title:"Yoga", category:"sport", isDone: false, doToday: false, recurrence: {recInterval: "week",
                weekdays: [false,true,true,false,true,true,false]}},
            {id:4, title:"Canna's", text:"uit de tuin naar binnen halen", category:"house", isDone: false, doToday: false, recurrence: {recInterval: "week",
            weekdays: [false,false,false,false,false,true,false]}}
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
        },
        setDoTodayIsTrue: (state,action) => {
          const index = state.tasks.findIndex((task) => task.id === action.payload);
          state.tasks[index].doToday = true;
        },
        setDoTodayIsFalse: (state,action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload);
            state.tasks[index].doToday = false;
          }
    }
});

//SELECTORS
export const selectAllTasks = (state) => state.tasks.tasks;

export const selectTodayTasks = (state) =>{    
    //find out what day it is today:
    let currentDate = new Date();    
    let today = currentDate.getDay(); //returns a number from 0 to 6, indicating su-mo-tu-we-th-fr-sa-su

    //recurrence.weekdays is always an array with 7 boolean values, corresponding with the .getDay() method
    const tasks = state.tasks.tasks;
    let todayTasks = tasks.filter(task => task.recurrence.weekdays[today] === true);
    //console.log(`todayTasks: ${todayTasks}`); 
    return todayTasks;
}    

//EXPORTS
export const { addTask, removeTask, toggleTaskDone, toggleDoToday, setDoTodayIsTrue, setDoTodayIsFalse } = tasksSlice.actions;
export default tasksSlice.reducer;

