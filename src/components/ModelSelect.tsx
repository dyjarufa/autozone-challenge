import React from 'react';

interface ModelSelectProps {
  models: string[];
  onModelChange: (model: string) => void;
}

const ModelSelect: React.FC<ModelSelectProps> = ({ models, onModelChange }) => (
  <div className="vehicle-selector-field">
    <label htmlFor="model-select" className="vehicle-selector-label">3 | Model</label>
    <select
      id="model-select"
      className="vehicle-selector-select"
      onChange={(e) => onModelChange(e.target.value)}
      defaultValue=""
      disabled={!models.length}
    >
      <option value="" disabled>Select model</option>
      {models.map((md) => (
        <option key={md} value={md}>
          {md}
        </option>
      ))}
    </select>
  </div>
);

export default ModelSelect;