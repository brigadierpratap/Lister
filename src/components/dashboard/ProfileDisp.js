import React, { Component } from "react";
import { connect } from "react-redux";

class ProfileDisp extends Component {
  render() {
    return (
      <div className="constainer profileDisplay">
        <center className="container border mt-1 shadow-lg p-3 mb-5 rounded">
          <div className="bgImage"></div>
          <div className="row bgText">
            <div className="col-sm-12 col-md-6">
              <img
                src="/image/avatar.png"
                alt="Avatar"
                className="rounded-circle ml-auto bg-secondary w-50 "
              ></img>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="row mt-2">
                <h1>Profile Info</h1>
              </div>
              <div className="row profDisp">
                <h3 className="col-md-3 col-sm-1">First Name:</h3>
                <h3 className="col-md-3 col-sm-1 text-secondary">
                  {this.props.profile.firstName}
                </h3>
              </div>
              <div className="row">
                <h3 className="col-md-3 col-sm-1">Last Name:</h3>
                <h3 className="col-md-3 col-sm-1 text-secondary">
                  {this.props.profile.lastName}
                </h3>
              </div>
              <div className="row">
                <h3 className="col-md-3 col-sm-1">Email Id:</h3>
                <h3 className="col-md-3 col-sm-1 text-secondary">
                  {this.props.auth.email}
                </h3>
              </div>
              <div className="row">
                <h3 className="col-md-2 col-sm-1">Uid :</h3>
                <h3 className="col-md-3 col-sm-2 text-secondary">
                  {this.props.auth.uid}
                </h3>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(ProfileDisp);
