import React, { useState } from 'react';
import '../styles/HairGrowth.css';

function HairGrowth() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Import all images from hairgrowth folder
  const images = import.meta.glob('../assets/hairgrowth/*.{jpg,jpeg,png,webp}', { eager: true });
  
  const imageList = Object.keys(images).map(path => ({
    path: images[path].default,
    name: path.split('/').pop(),
    date: path.split('/').pop().split('.')[0] // Extract date from filename
  })).sort((a, b) => a.name.localeCompare(b.name)); // Sort by filename for chronological order

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="hairgrowth-container">
      <h1 className="hairgrowth-title">Hair Growth Journey 💇‍♀️</h1>
      
      {imageList.length === 0 ? (
        <p style={{ padding: '20px', textAlign: 'center', color: '#fff' }}>
          No images found. Add images to assets/hairgrowth/
        </p>
      ) : (
        <div className="timeline-wrapper">
          <div className="timeline-scroll">
            {imageList.map((image, index) => (
              <React.Fragment key={index}>
                <div className="timeline-item" onClick={() => openModal(image)}>
                  <div className="timeline-image-container">
                    <img src={image.path} alt={image.date} loading="lazy" />
                    <div className="timeline-overlay">
                      <span className="view-text">View</span>
                    </div>
                  </div>
                  <div className="timeline-date">{image.date}</div>
                </div>
                
                {index < imageList.length - 1 && (
                  <div className="timeline-arrow">
                    <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#ffa07a', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 0 25 L 70 25 L 65 20 M 70 25 L 65 30" 
                        stroke="url(#arrowGradient)" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="85" cy="25" r="3" fill="url(#arrowGradient)">
                        <animate 
                          attributeName="opacity" 
                          values="0.3;1;0.3" 
                          dur="2s" 
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage.path} alt={selectedImage.date} />
            <p className="image-name">{selectedImage.date}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export { HairGrowth };