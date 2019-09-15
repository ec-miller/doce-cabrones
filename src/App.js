import React from 'react';
import damon from './damon.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={damon} className="App-logo" alt="logo" />
        <p>
          future home of doce cabrones fantasy football league content
        </p>
        <a
          className="App-link"
          href="https://fantasy.espn.com/football/league?leagueId=1624597"
          target="_blank"
          rel="noopener noreferrer"
        >
          ESPN League Page
        </a>
      </header>
    </div>
  );
}

export default App;
