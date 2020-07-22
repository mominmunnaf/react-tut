import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hellow';
import Welcome from './mycomponents/Welcome';

function App() {
  return (
    <div className="App">
      <Hello name="Munnaf" age="38"></Hello>
     

      <Welcome name="Class 1"></Welcome>
      <Welcome name="Class 2"></Welcome>
      <Welcome name="Class 3"></Welcome>

    </div>
  );
}

export default App;


