import React from 'react';

interface YearSelectProps {
  years: number[];
  selectedYear: number | null;
  onYearChange: (year: number) => void;
}
const YearSelect: React.FC<YearSelectProps> = ({ years, selectedYear, onYearChange }) => (
  <div className="vehicle-selector-field">
    <label htmlFor="year-select" className="vehicle-selector-label">1 | Year</label>
    <select
      id="year-select"
      className="vehicle-selector-select"
      onChange={(e) => onYearChange(Number(e.target.value))}
      value={selectedYear || ''}
    >
      <option value="" disabled>Select year</option>
      {years.map((yr) => (
        <option key={yr} value={yr}>
          {yr}
        </option>
      ))}
    </select>
  </div>
);

export default YearSelect;