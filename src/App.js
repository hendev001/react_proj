import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContainedButtons from './components/ui/Button'
import Header from './components/ui/Header'
import SimpleCard from './components/ui/SimpleCard';

function App() {
  return (
    <div className="App">
    
      <Header/>
      <h1>Welcome to Material UI</h1>
        <ContainedButtons/>
        <SimpleCard/>
        
    </div>
  );
}

export default App;
