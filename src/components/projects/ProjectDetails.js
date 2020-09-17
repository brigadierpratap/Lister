import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

const ProjectDetails = (props) => {
  const { list, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (list) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title"> {list.title}</span>
            <p>{list.message}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>Posted by {list.authorFirstName}</div>
            <p>Sept 16</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="center grey-text">Loading List...</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const lists = state.firestore.data.lists;
  const list = lists ? lists[id] : null;
  return {
    list: list,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "lists" }])
)(ProjectDetails);
