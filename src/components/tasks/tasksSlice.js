import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name:'tasks',
    initialState: {
        tasks: [
            {id:1, title:"Studeren", category:"study", isDone: false, doToday: false, recurrence: {recInterval: "weekly",
            weekdays: [false,true,true,true,true,true,false]}},
            {id:2, title:"DuoLingo", category:"study", isDone: false, doToday: false, recurrence: {recInterval: "weekly",
            weekdays: [true,true,true,true,true,true,true]}},
            {id:3, title:"Yoga", category:"sport", isDone: false, doToday: false, recurrence: {recInterval: "weekly",
            weekdays: [false,true,true,false,true,true,false]}},
            {id:4, title:"Hardlopen", category:"sport", isDone: false, doToday: false, recurrence: {recInterval: "weekly",
            weekdays: [false,false,false,true,false,false,true]}},
            {id:5, title:"Planten water geven", category:"house", isDone: false, doToday: false, recurrence: {recInterval: "weekly",
            weekdays: [false,true,false,false,true,false,false]}},
            {id:6, title:"Was-dag", category:"house", isDone: false, doToday: false, recurrence: {recInterval: "weekly",
            weekdays: [false,false,false,false,false,true,false]}},
            {id:7, title:"Bed verschonen", category:"house", isDone: false, doToday: false, recurrence: {recInterval: "monthly_2",
            weekdays: [false,false,false,false,true,false,false]}},
            {id:8, title:"Container aan straat", category:"house", isDone: false, doToday: false, recurrence: {recInterval: "monthly_1",
            weekdays: [false,false,false,false,true,false,false]}},
            {id:9, title:"call Mom", category:"hobby", isDone: false, doToday: false, recurrence: {recInterval: "monthly_2",
            weekdays: [true,false,false,false,false,false,false]}}
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
    let tasks = state.tasks.tasks; //recurrence.weekdays is always an array with 7 boolean values, corresponding with the .getDay() method

    let todayTasks= [];
    // if recInterval = weekly :
    const weeklyTasks = tasks.filter(task => task.recurrence.recInterval === "weekly");
    weeklyTasks.map((task) => {
        if (task.recurrence.weekdays[today] === true){
            todayTasks.push(task);
        }
    })
    // if recInterval = monthly_1 :
    const monthly_1_Tasks = tasks.filter(task => task.recurrence.recInterval === "monthly_1");
    monthly_1_Tasks.map((task) => {
        if (task.recurrence.weekdays[today] === true && currentDate.getDate() < 8 ){
            todayTasks.push(task);
        }
    })
    // if recInterval = monthly_2 :
    const monthly_2_Tasks = tasks.filter(task => task.recurrence.recInterval === "monthly_2");
    monthly_2_Tasks.map((task) => {
        if (task.recurrence.weekdays[today] === true && currentDate.getDate() > 7 && currentDate.getDate() <15 ){
            todayTasks.push(task);
        }
    })
    // if recInterval = monthly_3 :
    const monthly_3_Tasks = tasks.filter(task => task.recurrence.recInterval === "monthly_3");
    monthly_3_Tasks.map((task) => {
        if (task.recurrence.weekdays[today] === true && currentDate.getDate() > 14 && currentDate.getDate() < 22 ){
            todayTasks.push(task);
        }
    })
    // if recInterval = monthly_4 :
    const monthly_4_Tasks = tasks.filter(task => task.recurrence.recInterval === "monthly_4");
    monthly_4_Tasks.map((task) => {
        if (task.recurrence.weekdays[today] === true && currentDate.getDate() > 21 && currentDate.getDate() < 29){
            todayTasks.push(task);
        }
    })
    // if the date is the 29th, 30th or 31st: you're just plain lucky. Enjoy a break, you're recurring tasks will return in a few days!
    return todayTasks;
}    

//EXPORTS
export const { addTask, removeTask, toggleTaskDone, toggleDoToday, setDoTodayIsTrue, setDoTodayIsFalse } = tasksSlice.actions;
export default tasksSlice.reducer;

