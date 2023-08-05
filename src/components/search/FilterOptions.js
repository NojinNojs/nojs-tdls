import React from 'react';

function FilterOptions({ options }) {
  return (
    <div className="filter-options">
      <h3>Filter Options</h3>
      <ul>
        {options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterOptions;
// a