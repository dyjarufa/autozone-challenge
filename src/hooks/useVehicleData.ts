import { useState, useEffect, useCallback } from 'react';
import { Make, Model } from '../types';
import { fetchMakes, fetchModels } from '../services/vehicleApi';

export const useVehicleData = () => {
  const [year, setYear] = useState<number | null>(null);
  const [make, setMake] = useState<string | null>(null);
  const [makes, setMakes] = useState<Make[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [loadingMakes, setLoadingMakes] = useState<boolean>(false);
  const [loadingModels, setLoadingModels] = useState<boolean>(false);

  const loadMakesAndModels = useCallback(async () => {
    if (year) {
      setLoadingMakes(true);
      const fetchedMakes = await fetchMakes(year);
      setMakes(fetchedMakes);
      setLoadingMakes(false);
    } else {
      setMakes([]);
    }

    if (make) {
      setLoadingModels(true);
      const fetchedModels = await fetchModels(make);
      setModels(fetchedModels);
      setLoadingModels(false);
    } else {
      setModels([]);
    }
  }, [year, make]);

  useEffect(() => {
    loadMakesAndModels();
  }, [loadMakesAndModels]);

  return {
    year,
    setYear,
    make,
    setMake,
    makes,
    models,
    loadingMakes,
    loadingModels,
  };
};
