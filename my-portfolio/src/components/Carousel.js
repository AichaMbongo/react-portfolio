// Carousel.js
import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide mt-5">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="back2.png" className="d-block w-100 img-fluid" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src="back1.png" className="d-block w-100 img-fluid" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img src="back3.png" className="d-block w-100 img-fluid" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;