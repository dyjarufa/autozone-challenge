export const useYears = () => {
  return Array.from({ length: 2023 - 1995 + 1 }, (_, i) => 1995 + i);
};
