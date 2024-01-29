// Carousel.js
import React from 'react';

const Carousel = ({ images }) => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide mt-5">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={index === 0 ? 'active' : ''} aria-current={index === 0 ? 'true' : undefined} aria-label={`Slide ${index + 1}`}></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`}>
            <img src={image.src} className="d-block w-100 img-fluid" alt={image.alt} />
            <div className="carousel-caption d-none d-md-block">
              {/* Add any caption content here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
