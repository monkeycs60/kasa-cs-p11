import React from "react";

const Rating = ({ item, fullStar, emptyStar }) => {
  return (
    <div className="stars">
      {Array(5)
        .fill()
        .map((_, i) => (
          <img
            src={i < item.rating ? fullStar : emptyStar}
            alt={`star-${i}`}
            // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={i}
          />
        ))}
    </div>
  );
};

export default Rating;
