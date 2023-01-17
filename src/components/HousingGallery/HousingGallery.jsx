import React, { useState } from "react";

const HousingGallery = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex(
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="housing-gallery">
      <img src={pictures[currentIndex]} alt="Housing" className="gallery-image" width="300" height="200"/>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default HousingGallery;
