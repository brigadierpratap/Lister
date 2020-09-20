import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input, Label } from "reactstrap";
import { resetPassword, uploadDp } from "../../store/actions/authActions";

class ProfileDisp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: null,
    };
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(files) {
    this.setState({
      files: files,
    });
  }
  handleUpload(e) {
    console.log(this.state.files[0].name, this.props.auth.uid);
    this.props.uploadDp(this.state.files[0], this.props.auth.uid);
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="container">
        <div
          className="row p-2 mt-5 border"
          style={{ boxShadow: "-moz-initial", backgroundBlendMode: "hue" }}
        >
          <div className="col-sm-12 col-md-6 text-center " id="profileD">
            <img
              id="dpImg"
              src={
                this.props.profile.dpUrl
                  ? this.props.profile.dpUrl
                  : "/image/avatar.png"
              }
              alt="Avatar"
              className="rounded-circle bg-secondary w-50"
              onClick={() => {}}
            />
          </div>
          <div className="col-sm-12 col-md-6 ">
            <div className="row ml-auto">
              <div
                className="col-md-8 offset-md-4"
                style={{ fontSize: "3rem" }}
              >
                {" "}
                Profile Info
              </div>
            </div>
            <div className="row">
              <div className="col-6" style={{ fontSize: "1.5rem" }}>
                {""}
                First Name :
              </div>
              <div className="col-6" style={{ fontSize: "1.5rem" }}>
                {this.props.profile.firstName}
              </div>
            </div>
            <div className="row">
              <div className="col-6" style={{ fontSize: "1.5rem" }}>
                {""}
                Last Name :
              </div>
              <div className="col-6" style={{ fontSize: "1.5rem" }}>
                {this.props.profile.lastName}
              </div>
            </div>
            <div className="row">
              <div className="col-6" style={{ fontSize: "1.5rem" }}>
                {""}
                Email Id :
              </div>
              <div
                className="col-6"
                style={{
                  fontSize: "1.5rem",
                }}
              >
                {this.props.auth.email}
              </div>
            </div>
            <div className="row">
              <div className="col-6" style={{ fontSize: "1.5rem" }}>
                <Button
                  className="btn btn-danger"
                  onClick={() => this.props.reset(this.props.auth.email)}
                >
                  Reset {"  "}Password
                </Button>
              </div>
              <div className="col-6" style={{ fontSize: "1.5rem" }}>
                <Button className="btn btn-info" onClick={this.handleUpload}>
                  {" "}
                  Upload Picture
                </Button>

                <Input
                  type="file"
                  id="dp"
                  onChange={(e) => {
                    this.handleChange(e.target.files);
                  }}
                ></Input>
              </div>
            </div>
          </div>
        </div>
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
const mapsDispatchToProps = (dispatch) => {
  return {
    reset: (email) => dispatch(resetPassword(email)),
    uploadDp: (file, uid) => dispatch(uploadDp(file, uid)),
  };
};
export default connect(mapStateToProps, mapsDispatchToProps)(ProfileDisp);
