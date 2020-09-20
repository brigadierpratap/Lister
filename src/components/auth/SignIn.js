import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, Input, Label } from "reactstrap";
import { signIn } from "../../store/actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    else
      return (
        <div className="container col-sm-12 mt-5 col-md-6 offset-md-3  bg-white">
          <Form
            onSubmit={this.handleSubmit}
            className="bg-white col-sm-12  mt-0 mx-0"
          >
            <h5 className="text-grey text-center ">
              {" "}
              <u>Sign In</u>
            </h5>
            <div className="input-field col-md-6 offset-md-3">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                onChange={this.handleChange}
                placeholder="someone@example.com"
              />
            </div>
            <div className="input-field col-md-6 offset-md-3">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                onChange={this.handleChange}
                placeholder="Password"
              />
            </div>
            <div className="mt-2 offset-5">
              <Button className="btn btn-rounded lighten-1  z-depth-0">
                Login
              </Button>
              <div className="text-danger center">
                {authError ? authError : ""}
              </div>
            </div>
          </Form>
        </div>
      );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authErr,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
