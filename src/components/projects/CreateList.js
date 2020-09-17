import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, Input, Label } from "reactstrap";
import { createList } from "../../store/actions/listActions";

class CreateList extends Component {
  state = {
    title: "",
    message: "",
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
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="signin" />;
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">New List</h5>
          <div className="input-field">
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <Label htmlFor="message">Message</Label>
            <Input
              type="textarea"
              id="message"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <Button className="btn pink lighten-1 z-depth-0">Create</Button>
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
