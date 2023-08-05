import React from 'react';
import CategoryItem from './CategoryItem'; // Pastikan path-nya sesuai

function Categories({ categories }) {
  return (
    <div className="categories">
      <h3>Categories</h3>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Categories;
