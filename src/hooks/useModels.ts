import { useState, useEffect } from 'react';
import { fetchModels } from '../services/vehicleApi';

export const useModels = (make: string | null) => {
  const [models, setModels] = useState<string[]>([]);

  useEffect(() => {
    if (make) {
      fetchModels(make)
        .then((data) => setModels(data))
        .catch((error) => console.error('Error fetching models:', error));
    }
  }, [make]);

  return models;
};
