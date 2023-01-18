import React, { useState } from "react";
import ChevronLeft from "../../assets/chevron-left.svg";
import ChevronRight from "../../assets/chevron-right.svg";
import "./HousingGallery.css";

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
      <img
        src={pictures[currentIndex]}
        alt="Housing"
        className="gallery-image"
      />
      <button id="previous-button" onClick={handlePreviousClick}>
        <img src={ChevronLeft} alt="Previous" />
      </button>
      <button id="next-button" onClick={handleNextClick}>
        <img src={ChevronRight} alt="Next" />
      </button>
    </div>
  );
};

export default HousingGallery;
