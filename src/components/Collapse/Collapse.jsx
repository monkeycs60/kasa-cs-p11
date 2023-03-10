import React, { useState } from "react";
import chevronDown from "../../assets/chevron-white-down.svg";
import chevronUp from "../../assets/chevron-white-up.svg";
import "./Collapse.css";

const Collapse = ({ title, text, type }) => {
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
      {!isCollapsed && (
        <div className="HiddenText">
          {type === "text" ? (
            <p className="writing-txt">{text}</p>
          ) : (
            <ul className="list-text">
              {text.map((item, index) => (
                // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
