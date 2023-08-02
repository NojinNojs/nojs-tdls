import React from 'react';

const CategoryItem = ({ category }) => {
  const { name, color } = category;

  return (
    <li className="category-item" style={{ backgroundColor: color }}>
      {name}
    </li>
  );
};

export default CategoryItem;
