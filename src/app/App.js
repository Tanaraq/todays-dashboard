import React from 'react';
import { Counter } from '../features/counter/Counter';
import { Today } from '../features/today/Today';
import { Weather } from '../features/weather/Weather';
import { Projects } from '../features/projects/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Today />
        <Weather />
      </header>
      
        <Projects />
      <main>
        <div className='main segment'>
          <p>task</p>
          <p>task</p>
          <p>task</p>
        </div>
      </main>      
    </div>
  );
}

export default App;
