const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

interface MakeResponse {
  Results: { MakeName: string }[];
}

interface ModelResponse {
  Results: { Model_Name: string }[];
}

export const fetchMakes = async (): Promise<string[]> => {
  const response = await fetch(`${BASE_URL}/GetMakesForVehicleType/car?format=json`);
  const data: MakeResponse = await response.json();
  return data.Results.map((item) => item.MakeName);
};

export const fetchModels = async (make: string): Promise<string[]> => {
  const response = await fetch(`${BASE_URL}/GetModelsForMake/${make}?format=json`);
  const data: ModelResponse = await response.json();
  return data.Results.map((item) => item.Model_Name);
};
