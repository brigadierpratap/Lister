import React, { Component } from "react";
import ListDisplay from "../projects/ListDisplay";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    lists: state.firestore.ordered.lists,
    auth: state.firebase.auth,
  };
};

class Dashboard extends Component {
  render() {
    const { lists, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col">
            <ListDisplay lists={lists} />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "lists", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
