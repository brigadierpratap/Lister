import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ListSummary from "./ListSummary";

const ListDisplay = ({ lists, auth }) => {
  return (
    <div className="project-list section">
      {lists &&
        lists
          .filter((list) => list.authorId === auth.uid)
          .map((list) => {
            return (
              <Link to={"/list/" + list.id} key={list.id}>
                {" "}
                <div className="col col-sm-12 col-md-3">
                  <ListSummary list={list} />
                </div>
              </Link>
            );
          })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(ListDisplay);
