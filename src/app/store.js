import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather/weatherSlice';
import tasksReducer from '../components/tasks/tasksSlice';
import calendarReducer from '../features/calendar/calendarSlice';
import quotesReducer from '../features/quotes/quotesSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    tasks: tasksReducer,
    calendar: calendarReducer,
    quote: quotesReducer
  },
});
