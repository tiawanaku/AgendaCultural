// src/components/ImageButton.js
import React from 'react';

const ImageButton = ({ src, onClick }) => {
  return (
    <img
      src={src}
      alt="Button"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default ImageButton;
