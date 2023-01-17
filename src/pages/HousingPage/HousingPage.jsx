import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/housing.json";
import "./HousingPage.css";
import emptyStar from "../../assets/empty-star.svg";
import fullStar from "../../assets/plain-star.svg";
import Collapse from "../../components/Collapse/Collapse";

const HousingPage = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);
  return (
    <div className="housing-page">
      <img src={item.cover} alt={item.title} />
      <div className="lower-card-text">
        <h1>{item.title}</h1>
        <p>{item.location}</p>
        <div className="tags-container">
          {item.tags.map((tag, index) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div className="tag" key={index}>
              <p>{tag}</p>
            </div>
          ))}
        </div>
        <div className="host-stars">
          <div className="host">
            <img src={item.host.picture} alt={item.host.name} />
            <p>{item.host.name}</p>
          </div>
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
          {/* <div className="stars">
            {item.rating > 0 && <img src={fullStar} alt="full star" />}
            {item.rating > 1 && <img src={fullStar} alt="full star" />}
            {item.rating > 2 && <img src={fullStar} alt="full star" />}
            {item.rating > 3 && <img src={fullStar} alt="full star" />}
            {item.rating > 4 && <img src={fullStar} alt="full star" />}
            {item.rating < 5 && <img src={emptyStar} alt="empty star" />}
            {item.rating < 4 && <img src={emptyStar} alt="empty star" />}
            {item.rating < 3 && <img src={emptyStar} alt="empty star" />}
            {item.rating < 2 && <img src={emptyStar} alt="empty star" />}
            {item.rating < 1 && <img src={emptyStar} alt="empty star" />}
          </div> */}
        </div>
        <div className="collapse-items">
          <Collapse title="Description" text={item.description} />
          <Collapse title="Équipements" text={
            <ul>
                {item.equipments.map((equipment, index) => (
                    // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<li key={index}>{equipment}</li>
                ))}
            </ul>
          } />
        </div>
      </div>
    </div>
  );
};

export default HousingPage;
