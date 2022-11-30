import React from 'react';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { Weather } from '../features/weather/Weather';
import { Navbar } from '../components/navbar/Navbar';
import { Today } from '../features/today/Today';
import { Study } from '../features/categories/Study';
import { Sport } from '../features/categories/Sport';
import { Household } from '../features/categories/Household';
import { Hobby } from '../features/categories/Hobby';
import { Calendar } from '../features/calendar/Calendar';
import { Quote } from '../features/quotes/Quote';

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
        <Route path="hobby" element={<Hobby />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="" element={<Today />} />
      </Routes>
      <Quote/>
      </main>      
    
    <footer>
      <p>copyrigth @ A.Kooistra, 2022</p>
  
      <span >
        <p>"Quotes via:</p>
        <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/>
        <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com">
        They Said So®"
        </a>
      </span>

      <span>
       <p>"KNMI Weergegevens via:</p><a href='http://weerlive.nl'>Weerlive.nl"</a>
      </span>
      
    </footer>
    </div>
    </Router>
  );
}

export default App;
