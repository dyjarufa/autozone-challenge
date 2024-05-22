import React from 'react';
import VehicleSelector from './components/VehicleSelector';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Vehicle Selector</h1>
      <VehicleSelector />
    </div>
  );
};

export default App;
