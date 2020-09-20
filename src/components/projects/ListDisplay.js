import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ListSummary from "./ListSummary";

const ListDisplay = ({ lists, auth }) => {
  return (
    <div className="col">
      {lists &&
        lists
          .filter((list) => list.authorId === auth.uid)
          .map((list) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={"/list/" + list.id}
                key={list.id}
              >
                {" "}
                <div className="col-md-8 offset-md-2 mt-2">
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
