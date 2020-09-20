import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, Input, Label } from "reactstrap";
import { createList } from "../../store/actions/listActions";

class CreateList extends Component {
  state = {
    title: "",
    message: "",
    isDone: false,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createList(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="signin" />;
    return (
      <div className="container shadow-lg mb-5 rounded">
        <Form onSubmit={this.handleSubmit} className="white mt-3">
          <h4 className="text-dark text-center">New List</h4>
          <div className="input-field col-md-6 offset-md-3">
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field col-md-6 offset-md-3">
            <Label htmlFor="message">Message</Label>
            <Input
              type="textarea"
              id="message"
              className="textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <Button className="btn offset-5 mt-2">Create List</Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createList: (list) => dispatch(createList(list)),
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
