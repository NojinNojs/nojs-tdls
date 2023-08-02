import React from 'react';

const FilterOptions = ({ filters, selectedFilter, onFilterChange }) => {
  return (
    <div className="filter-options">
      <span>Filter by:</span>
      <select value={selectedFilter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All</option>
        {filters.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterOptions;
