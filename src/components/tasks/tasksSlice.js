import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name:'tasks',
    initialState: {
        tasks: [
            {title:"Afwassen", isDone: false, doToday: true},
            {title:"Was ophangen", isDone: false, doToday: true},
            {title:"Canna's", text:"uit de tuin naar binnen halen", isDone: false, doToday: true}
        ],
        tasksDone: []
    },
    reducers: {
        addTask: (state,action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state,action) =>{
            state.tasks.splice(action.payload, 1);
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