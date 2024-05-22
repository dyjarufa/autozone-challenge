import React from 'react';

interface YearSelectProps {
  year: number | null;
  setYear: (year: number) => void;
}

const YearSelect: React.FC<YearSelectProps> = ({ year, setYear }) => {
  const years = Array.from({ length: 2023 - 1995 + 1 }, (_, i) => 1995 + i);

  return (
    <select value={year ?? ''} onChange={(e) => setYear(Number(e.target.value))}>
      <option value="" disabled>Select Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearSelect;
