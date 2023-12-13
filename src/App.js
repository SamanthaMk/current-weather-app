import React from 'react';
import Weather from './Weather'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather />
        <footer>
          This project is coded by Siphosethu Samantha is{" "}
          <a
            href="https://github.com/SamanthaMk/current-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}


