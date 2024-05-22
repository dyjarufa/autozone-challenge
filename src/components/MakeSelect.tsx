import React from 'react';

interface MakeSelectProps {
  makes: string[];
  selectedMake: string | null;
  onMakeChange: (make: string) => void;
}

const MakeSelect: React.FC<MakeSelectProps> = ({ makes, selectedMake, onMakeChange }) => (
  <div className="vehicle-selector-field">
    <label htmlFor="make-select" className="vehicle-selector-label">2 | Make</label>
    <select
      id="make-select"
      className="vehicle-selector-select"
      onChange={(e) => onMakeChange(e.target.value)}
      value={selectedMake || ''}
      disabled={!makes.length}
    >
      <option value="" disabled>Select make</option>
      {makes.map((mk) => (
        <option key={mk} value={mk}>
          {mk}
        </option>
      ))}
    </select>
  </div>
);

export default MakeSelect;