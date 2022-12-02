import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import weatherReducer from '../features/weather/weatherSlice';
import tasksReducer from '../components/tasks/tasksSlice';
import calendarReducer from '../features/calendar/calendarSlice';
import quotesReducer from '../features/quotes/quotesSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
  weather: weatherReducer,
  tasks: tasksReducer,
  calendar: calendarReducer,
  quote: quotesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)