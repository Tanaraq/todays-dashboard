import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather/weatherSlice';
import tasksReducer from '../components/tasks/tasksSlice';
import navbarReducer from '../components/navbar/navbarSlice';
import calendarReducer from '../features/calendar/calendarSlice';
import quotesReducer from '../features/quotes/quotesSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    tasks: tasksReducer,
    navbar: navbarReducer,
    calendar: calendarReducer,
    quote: quotesReducer
  },
});
