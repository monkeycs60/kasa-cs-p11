import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/housing.json";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-grid">
      {data.map((item) => (
        <Link to={`/housing/${item.id}`} key={item.id}>
        <div key={item.id} className="card-item">
          <img src={item.cover} alt={item.title} />
          <div>
            <p>{item.title}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
