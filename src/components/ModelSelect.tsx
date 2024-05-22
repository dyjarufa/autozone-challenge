import React from 'react';
import { Model } from '../types';

interface ModelSelectProps {
  model: string | null;
  setModel: (model: string) => void;
  models: Model[];
  loading: boolean;
}

const ModelSelect: React.FC<ModelSelectProps> = ({ model, setModel, models, loading }) => {
  return (
    <select value={model ?? ''} onChange={(e) => setModel(e.target.value)} disabled={loading || models.length === 0}>
      <option value="" disabled>Select Model</option>
      {models.map((model) => (
        <option key={model.Model_ID} value={model.Model_Name}>
          {model.Model_Name}
        </option>
      ))}
    </select>
  );
};

export default ModelSelect;
