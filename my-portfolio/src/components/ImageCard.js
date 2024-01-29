// ImageCard.js
// Import React
import React, { useState } from 'react';

// Define the component
const ImageCard = ({ imageSrc, title, description, link }) => {
  // State to manage visibility
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle visibility
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card p-1 bg-dark text-white shadow-lg">
        <img src={imageSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            {description}
            <br />
            <a href={link} target="_blank">
              View project
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
