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
        <div className="container">
          <Form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <Button className="btn pink lighten-1 z-depth-0">Login</Button>
              <div className="red-text center">
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
