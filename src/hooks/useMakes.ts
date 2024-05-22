import { useState, useEffect } from 'react';
import { fetchMakes } from '../services/vehicleApi';

export const useMakes = (year: number | null) => {
  const [makes, setMakes] = useState<string[]>([]);

  useEffect(() => {
    if (year) {
      fetchMakes()
        .then((data) => setMakes(data))
        .catch((error) => console.error('Error fetching makes:', error));
    }
  }, [year]);

  return makes;
};
