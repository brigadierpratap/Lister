import React from "react";

const ListSummary = ({ list }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{list.title}</span>
        <p> Posted by Pawan</p>
        <p className="grey-text"> Sept 16th</p>
      </div>
    </div>
  );
};

export default ListSummary;
