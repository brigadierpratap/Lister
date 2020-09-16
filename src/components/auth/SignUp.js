import React, { Component } from "react";
import { Button, Form, Input, Label } from "reactstrap";

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
    console.log(this.state);
  };
  render() {
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
            <Input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <Label htmlFor="firstname">John</Label>
            <Input type="text" id="firstname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <Label htmlFor="lastname">Doe</Label>
            <Input type="text" id="lastname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <Button className="btn pink lighten-1 z-depth-0">SignUp</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignUp;
