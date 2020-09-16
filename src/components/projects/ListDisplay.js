import React from "react";
import { Link } from "react-router-dom";
import ListSummary from "./ListSummary";

const ListDisplay = ({ lists }) => {
  return (
    <div className="project-list section">
      {lists &&
        lists.map((list) => {
          return (
            <Link to={"/list/" + list.id}>
              {" "}
              <ListSummary list={list} key={list.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ListDisplay;
