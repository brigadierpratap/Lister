import React from "react";
import moment from "moment";

const ListSummary = ({ list }) => {
  return (
    <div className="card z-depth-0 project-summary" id="contextMenuId">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{list.title}</span>
        <p>
          By {list.authorFirstName} {list.authorLastName}
        </p>
        <p className="grey-text">
          {" "}
          {moment(list.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ListSummary;
