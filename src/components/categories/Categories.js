import React from 'react';
import CategoryItem from './CategoryItem';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Work', color: '#FF5733' },
    { id: 2, name: 'Personal', color: '#33FF57' },
    { id: 3, name: 'Health', color: '#5733FF' },
    // ...Tambahkan kategori lain jika diperlukan
  ];

  return (
    <div className="categories">
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
