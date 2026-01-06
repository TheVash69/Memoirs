import React, { useState } from 'react';
import '../styles/Letters.css';

function Letters() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Import all PDFs from Letters folder - add { as: 'url' } for PDFs
  const pdfs = import.meta.glob('../assets/letters/**/*.pdf', { eager: true, as: 'url' });
  
  const pdfList = Object.keys(pdfs).map(path => ({
    path: pdfs[path],  // No .default needed with { as: 'url' }
    name: path.split('/').pop().replace('.pdf', ''),
    folder: path.split('/').slice(-2, -1)[0]
  }));

  const openPdf = (pdf) => {
    setSelectedPdf(pdf);
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

  return (
    <div className="letters-container">
      <h1 className="letters-title">Letters Collection</h1>
      {pdfList.length === 0 ? (
        <p style={{ padding: '20px', textAlign: 'center' }}>No letters found. Add PDF files to assets/Letters/</p>
      ) : (
        <div className="letters-grid">
          {pdfList.map((pdf, index) => (
            <div key={index} className="letter-card" onClick={() => openPdf(pdf)}>
              <div className="letter-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div className="letter-seal"></div>
              </div>
              <h3>{pdf.name}</h3>
              <p className="letter-folder">{pdf.folder}</p>
            </div>
          ))}
        </div>
      )}

      {selectedPdf && (
        <div className="pdf-modal" onClick={closePdf}>
          <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-header">
              <h2>{selectedPdf.name}</h2>
              <span className="close" onClick={closePdf}>&times;</span>
            </div>
            <iframe 
              src={selectedPdf.path} 
              title={selectedPdf.name}
              className="pdf-viewer"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export { Letters };