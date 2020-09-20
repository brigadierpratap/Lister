import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { Card, CardBody, CardFooter, CardText, CardTitle } from "reactstrap";
import { Loading } from "../dashboard/LoadingComponent";
import { delList, markDone, markUnDone } from "../../store/actions/listActions";

const ProjectDetails = (props) => {
  const { list, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (list) {
    if (list.isDone)
      return (
        <div className="container">
          <Card className="w-75 mx-auto bg-success text-light ">
            <CardBody className="card-body">
              <CardTitle className="text-center">
                {" "}
                <h4>
                  <b>{list.title}</b>
                </h4>
              </CardTitle>
              <CardText>{list.message}</CardText>
            </CardBody>
            <CardBody>
              <CardFooter>Posted by {list.authorFirstName}</CardFooter>
              <CardFooter>
                {moment(list.createdAt.toDate()).calendar()}
              </CardFooter>
            </CardBody>
          </Card>
          <div className="row mt-1 offset-2">
            <div
              className="btn btn-primary mr-2"
              onClick={(e) => {
                e.preventDefault();
                props.markUnDone(props.listId);
                props.history.push("/");
              }}
            >
              Mark UnDone
            </div>
            <div
              className=" btn btn-danger ml-2"
              onClick={(e) => {
                e.preventDefault();
                props.delList(props.listId);
                props.history.push("/");
              }}
            >
              Remove
            </div>
          </div>
        </div>
      );
    else {
      return (
        <div className="container mt-3  ">
          <Card className="w-75 mx-auto bg-info text-light ">
            <CardBody className="card-body">
              <CardTitle className="text-center">
                {" "}
                <h4>
                  <b>{list.title}</b>
                </h4>
              </CardTitle>
              <CardText>{list.message}</CardText>
            </CardBody>
            <CardBody>
              <CardFooter>Posted by {list.authorFirstName}</CardFooter>
              <CardFooter>
                {moment(list.createdAt.toDate()).calendar()}
              </CardFooter>
            </CardBody>
          </Card>
          <div className="row mt-1 offset-2">
            <div
              className="btn btn-primary mr-2"
              onClick={(e) => {
                e.preventDefault();
                props.markDone(props.listId);
                props.history.push("/");
              }}
            >
              Mark Done
            </div>
            <div
              className=" btn btn-danger ml-2"
              onClick={(e) => {
                e.preventDefault();
                props.delList(props.listId);
                props.history.push("/");
              }}
            >
              Remove
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const lists = state.firestore.data.lists;
  const list = lists ? lists[id] : null;
  return {
    list: list,
    auth: state.firebase.auth,
    listId: id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    delList: (listId) => dispatch(delList(listId)),
    markDone: (listId) => dispatch(markDone(listId)),
    markUnDone: (listId) => dispatch(markUnDone(listId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "lists" }])
)(ProjectDetails);
