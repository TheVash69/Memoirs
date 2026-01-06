import React, { useState } from 'react';
import '../styles/Gallery.css';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Import all images from Pics folder
  const images = import.meta.glob('../assets/pics/*.{jpg,jpeg,png,webp}', { eager: true });
  
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
    <div className="gallery-container">
      <h1 className="gallery-title">Favourite Pics!</h1>
      <div className="gallery-grid">
        {imageList.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(image)}>
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

export { Gallery };