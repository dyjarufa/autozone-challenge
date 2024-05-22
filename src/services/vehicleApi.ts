import axios from 'axios';
import { Make, Model } from '../types';

const API_BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export const fetchMakes = async (year: number): Promise<Make[]> => {
  const response = await axios.get(`${API_BASE_URL}/GetMakesForVehicleType/car?format=json&modelYear=${year}`);
  return response.data.Results;
};

export const fetchModels = async (make: string): Promise<Model[]> => {
  const response = await axios.get(`${API_BASE_URL}/GetModelsForMakeYear/make/${make}/modelyear/2021?format=json`);
  console.log(response)
  return response.data.Results;
};
