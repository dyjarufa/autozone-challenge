import React from 'react';
import { Make } from '../types';

interface MakeSelectProps {
  make: string | null;
  setMake: (make: string) => void;
  makes: Make[];
  loading: boolean;
}

const MakeSelect: React.FC<MakeSelectProps> = ({ make, setMake, makes, loading }) => {
  return (
    <select value={make ?? ''} onChange={(e) => setMake(e.target.value)} disabled={loading || makes.length === 0}>
      <option value="" disabled>Select Make</option>
      {makes.map((make) => (
        <option key={make.Make_ID} value={make.Make_Name}>
          {make.Make_Name}
        </option>
      ))}
    </select>
  );
};

export default MakeSelect;
