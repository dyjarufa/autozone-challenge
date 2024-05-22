import './App.css'
import React, { useState } from 'react';
import YearSelect from './components/YearSelect';
import MakeSelect from './components/MakeSelect';
import ModelSelect from './components/ModelSelect';
import { useVehicleData } from './hooks/useVehicleData';

const App: React.FC = () => {
  const {
    year,
    setYear,
    make,
    setMake,
    makes,
    models,
    loadingMakes,
    loadingModels,
  } = useVehicleData();
  const [model, setModel] = useState<string | null>(null);

  return (
    <div>
      <h1>Vehicle Selector</h1>
      <YearSelect year={year} setYear={setYear} />
      <MakeSelect make={make} setMake={setMake} makes={makes} loading={loadingMakes} />
      <ModelSelect model={model} setModel={setModel} models={models} loading={loadingModels} />
    </div>
  );
};

export default App;

