import React, { useState } from 'react';
import MakeSelect from './MakeSelect';
import ModelSelect from './ModelSelect';
import { useYears } from '../hooks/useYears';
import { useModels } from '../hooks/useModels';
import YearSelect from './YearSelect';
import { useMakes } from '../hooks/useMakes';

import '../styles/VehicleSelector.css'


const VehicleSelector: React.FC = () => {
  const [year, setYear] = useState<number | null>(null);
  const [make, setMake] = useState<string | null>(null);
  const years = useYears();
  const makes = useMakes(year);
  const models = useModels(make);

  return (
    <div className="vehicle-selector-container">
      <div>
        <div className="vehicle-selector-header">SET YOUR VEHICLE</div>
        <div className="vehicle-selector-subheader">Get an exact fit for your vehicle.</div>
      </div>
      <div className="vehicle-selector-inner">
        <YearSelect years={years} selectedYear={year} onYearChange={setYear} />
        <MakeSelect makes={makes} selectedMake={make} onMakeChange={setMake} />
        <ModelSelect models={models} onModelChange={(model) => console.log(model)} />
      </div>
    </div>
  );
};

export default VehicleSelector;
