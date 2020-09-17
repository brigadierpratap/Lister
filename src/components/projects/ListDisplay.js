import React from "react";
import { Link } from "react-router-dom";
import ListSummary from "./ListSummary";

const ListDisplay = ({ lists }) => {
  return (
    <div className="project-list section">
      {lists &&
        lists.map((list) => {
          return (
            <Link to={"/list/" + list.id} key={list.id}>
              {" "}
              <ListSummary list={list} />
            </Link>
          );
        })}
    </div>
  );
};

export default ListDisplay;
