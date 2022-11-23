import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import weatherReducer from '../features/weather/weatherSlice';
import tasksReducer from '../components/tasks/tasksSlice';
import navbarReducer from '../components/navbar/navbarSlice';
import calendarReducer from '../features/calendar/calendarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    weather: weatherReducer,
    tasks: tasksReducer,
    navbar: navbarReducer,
    calendar: calendarReducer
  },
});
