import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, Input, Label } from "reactstrap";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authErr } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    else
      return (
        <div className="container">
          <Form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
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
              <Label htmlFor="firstName">John</Label>
              <Input type="text" id="firstName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <Label htmlFor="lastName">Doe</Label>
              <Input type="text" id="lastName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <Button className="btn pink lighten-1 z-depth-0">SignUp</Button>
            </div>
            <div className="red-text center">
              {authErr ? <p>{authErr}</p> : null}
            </div>
          </Form>
        </div>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authErr: state.auth.authErr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
