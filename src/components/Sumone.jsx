import React, { useState } from 'react';
import '../styles/Sumone.css';

function Sumone() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Import all images from Sumone folder
  const images = import.meta.glob('../assets/sumone/*.{jpg,jpeg,png,webp}', { eager: true });
  
  const imageList = Object.keys(images).map(path => ({
    path: images[path].default,
    name: path.split('/').pop()
  }));

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="sumone-container">
      <h1 className="sumone-title">Cute questions in Sumone</h1>
      <div className="sumone-scroll">
        {imageList.map((image, index) => (
          <div key={index} className="sumone-item" onClick={() => openModal(image)}>
            <img src={image.path} alt={image.name} loading="lazy" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage.path} alt={selectedImage.name} />
            <p className="image-name">{selectedImage.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export { Sumone };