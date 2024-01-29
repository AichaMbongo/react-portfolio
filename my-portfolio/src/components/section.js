// Section.js
import React from 'react';

const SectionLight = ({ id, title, imageSrc, description }) => {
  return (
    <section id={id} className="container mt-4 mb-4 col-md-12">
      <div className="card mb-4 rounded col-md-12 bg-light mb-4 shadow-lg">
        <div className="row g-0">
          <div className="col-md-4 rounded">
            <img src={imageSrc} className="img-fluid rounded" alt="..." />
          </div>
          
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionDark = ({ id, title, imageSrc1, imageSrc2, description }) => {
  return (
    <section id={id} className="container mt-4 mb-4 col-md-12 bg-dark">
      <div className="card mb-4 rounded col-md-12 bg-light mb-4 shadow-lg bg-dark text-white">
        <div className="row g-0">
          <div className="col-md-3 rounded">
            <img src={imageSrc1} className="img-fluid rounded" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title ">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
          <div className="col-md-3 rounded">
            <img src={imageSrc2} className="img-fluid rounded" alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
};
export { SectionLight, SectionDark };
