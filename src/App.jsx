// src/App.js
import React from 'react';
import Heart from './Heart';
import './App.css';

const App = () => {
  // Adjust the number of hearts as needed
  const heartsArray = new Array(2000).fill(0); 

  return (
    <div className="App">
      <div className="hearts-container">
        {heartsArray.map((_, index) => (
          <Heart key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
