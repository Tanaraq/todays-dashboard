import React from 'react';
import { Header } from '../features/header/Header';
import { Weather } from '../features/weather/Weather';
import { Navbar } from '../components/navbar/Navbar'

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className='header'>
          <Header />
          <Weather />
        </div>    
        <Navbar />  
        
      </header>  
      <main>
        
      </main>      
    </div>
  );
}

export default App;
