import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/housing.json";
import "./HousingPage.css";
import emptyStar from "../../assets/empty-star.svg";
import fullStar from "../../assets/plain-star.svg";
import Collapse from "../../components/Collapse/Collapse";
import HousingGallery from "../../components/HousingGallery/HousingGallery";
import Rating from "../../components/Rating/Rating";
import TagsContainer from "../../components/TagsContainer/TagsContainer";

const HousingPage = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);
  return (
    <div className="housing-page">
      <HousingGallery pictures={item.pictures} />
      <div className="lower-card-text">
        <h2>{item.title}</h2>
        <p>{item.location}</p>
        <TagsContainer tags={item.tags} />
        <div className="host-stars">
          <div className="host">
            <img src={item.host.picture} alt={item.host.name} />
            <p>{item.host.name}</p>
          </div>
          <Rating item={item} fullStar={fullStar} emptyStar={emptyStar} />
        </div>
        <div className="collapse-items">
          <Collapse title="Description" text={item.description} type="text" />
          <Collapse title="Équipements" text={item.equipments} type="list" />
        </div>
      </div>
    </div>
  );
};

export default HousingPage;
