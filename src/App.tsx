// import React, { useState } from 'react'
import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Weather from './components/Weather';

const App: React.FC = () => {
  return <div className="App">
    Welcome Weather App
    <Weather />
  </div>;
};

export default App;
