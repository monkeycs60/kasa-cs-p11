import React from "react";

const TagsContainer = ({ tags }) => {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div className="tag" key={index}>
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
};

export default TagsContainer;
