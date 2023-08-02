import React from 'react';

const Detail = ({ item }) => {
  return (
    <div className="detail">
      <h3>Detail</h3>
      {item ? (
        <div className="detail-content">
          <p><strong>Title:</strong> {item.title}</p>
          <p><strong>Date:</strong> {item.date}</p>
          <p><strong>Description:</strong> {item.description}</p>
          <p><strong>Category:</strong> {item.category}</p>
          {/* ...Tambahkan detail lain sesuai kebutuhan */}
        </div>
      ) : (
        <p>Select an item to view details.</p>
      )}
    </div>
  );
};

export default Detail;
