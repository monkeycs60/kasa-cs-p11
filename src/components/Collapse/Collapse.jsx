import React, { useState } from "react";
import chevronDown from "../../assets/chevron-down-solid.svg";
import chevronUp from "../../assets/chevron-up-solid.svg";
import "./Collapse.css";

const Dropdown = ({ title, text }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [chevron, setChevron] = useState(chevronDown);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setChevron(isCollapsed ? chevronUp : chevronDown);
  };

  return (
    <div
      onClick={toggleCollapse}
      onKeyDown={toggleCollapse}
      role="button"
      tabIndex={0}
      className="dropdown"
    >
      <div className="TitlePannel">
        <h3>{title}</h3>
        <img src={chevron} alt="Chevron" className="chevron" />
      </div>
      <div className="HiddenText">{!isCollapsed && <p>{text}</p>}</div>
    </div>
  );
};

export default Dropdown;
