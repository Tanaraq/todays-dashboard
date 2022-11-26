import React from 'react';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import { Header } from '../features/header/Header';
import { Weather } from '../features/weather/Weather';
import { Navbar } from '../components/navbar/Navbar';
import { Today } from '../components/today/Today';
import { Study } from '../features/study/Study';
import { Sport } from '../features/sport/Sport';
import { Household } from '../features/household/Household';
import { Calendar } from '../features/calendar/Calendar';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <div className='header'>          
          <Header />
          <Weather />
        </div>    
        <Navbar />          
      </header>  
      <main>
      <Routes>
        <Route path="today" element={<Today />} />
        <Route path="study" element={<Study />} />
        <Route path="sport" element={<Sport />} />
        <Route path="house" element={<Household />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
      </main>      
    </div>
    </Router>
  );
}

export default App;
