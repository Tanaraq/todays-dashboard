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
        tasksDone: []
    },
    reducers: {
        addTask: (state,action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state,action) =>{
            console.log(action.payload);
            state.tasks.splice(action.payload, 1);//doesnt work: it assumes the id is the same as the index
        },
        toggleTaskDone: (state,action) =>{
            state.tasks[action.payload].isDone = !state.tasks[action.payload].isDone;   
        },
        toggleDoToday: (state,action) => {
            state.tasks[action.payload].doToday = !state.tasks[action.payload].doToday;
        }
    }
});

export const { addTask, removeTask, toggleTaskDone, toggleDoToday } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks.tasks;
export default tasksSlice.reducer;

/* om te spieken:
export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    entries: [
      { text: "Water plants", isDone: false },
      { text: "Making spaget", isDone: false },
      { text: "Climb a V10", isDone: false },
      { text: "Make some beats", isDone: false }
    ],
    doneEntries: []
  },
  reducers: {
    addJournalEntry: (state, action) => {
      state.entries.push({ text: action.payload, isDone: false });
    },
    removeEntry: (state, action) => {
      state.entries.splice(action.payload, 1);
    },
    toggleEntryDone: (state, action) => {
      state.entries[action.payload].isDone = !state.entries[action.payload]
        .isDone;
    }
  }
});

export const {
  addJournalEntry,
  removeEntry,
  toggleEntryDone
} = journalSlice.actions;

export default journalSlice.reducer;
*/