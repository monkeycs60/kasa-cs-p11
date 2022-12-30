import React from "react";
import data from "../../data/housing.json";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-grid">
      {data.map((item) => (
        <div key={item.id} className="card-item">
          <img src={item.cover} alt={item.title} />
          <div>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
