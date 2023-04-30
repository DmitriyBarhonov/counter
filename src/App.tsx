import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RootCounter } from './myCounter/rootCounter';

// Максимум 5 когда 5 красный 
// ресет задизейблина если значение 0 

function App() {
  return (
    <>
      <RootCounter/>
    </>
  );
}

export default App;
