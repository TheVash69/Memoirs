import React, { useState, useEffect } from 'react';
import '../styles/Videos.css';

function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Import all videos from Pics folder
      const videos = import.meta.glob('../assets/pics/*.{mp4,webm,mov}', { eager: true });
      
      console.log('Videos imported:', videos); // Debug log
      
      const list = Object.keys(videos).map(path => ({
        path: videos[path].default,
        name: path.split('/').pop()
      }));
      
      setVideoList(list);
      
      if (list.length === 0) {
        console.warn('No videos found in ../assets/Pics/');
      }
    } catch (err) {
      console.error('Error loading videos:', err);
      setError(err.message);
    }
  }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  if (error) {
    return (
      <div className="videos-container">
        <h1 className="videos-title">Fav Videos!</h1>
        <p style={{ color: 'red', padding: '20px' }}>Error loading videos: {error}</p>
      </div>
    );
  }

  return (
    <div className="videos-container">
      <h1 className="videos-title">Fav Videos!</h1>
      {videoList.length === 0 ? (
        <p style={{ padding: '20px', textAlign: 'center' }}>No videos found. Add video files to assets/Pics/</p>
      ) : (
        <div className="videos-grid">
          {videoList.map((video, index) => (
            <div key={index} className="video-item" onClick={() => openModal(video)}>
              <video 
                src={video.path} 
                muted 
                onError={(e) => console.error('Video load error:', video.name, e)}
              />
              <div className="play-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedVideo && (
        <div className="video-modal" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <video 
              src={selectedVideo.path} 
              controls 
              autoPlay
              onError={(e) => console.error('Modal video load error:', selectedVideo.name, e)}
            />
            <p className="video-name">{selectedVideo.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export { Videos };