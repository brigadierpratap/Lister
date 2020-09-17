import React, { Component } from "react";
import Notifications from "./Notifications";
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
          <div className="col s12 m6">
            <ListDisplay lists={lists} />{" "}
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "lists" }])
)(Dashboard);
