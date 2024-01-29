// ImageCard.js
import React from 'react';

const ImageCard = ({ imageSrc, title, description, link }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card p-1 bg-dark text-white shadow-lg">
        <img src={imageSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            {description} <br />
            {link && <a href={link} target="_blank">Click to View Project</a>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
