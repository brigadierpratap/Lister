import React from "react";
import moment from "moment";
import { Card, CardBody, CardFooter, CardText, CardTitle } from "reactstrap";

const ListSummary = ({ list }) => {
  if (list.isDone)
    return (
      <Card className="card bg-success project-summary " id="contextMenuId">
        <CardBody className="card-body text-light">
          <CardTitle className="card-title">{list.title}</CardTitle>
          <CardText>
            By {list.authorFirstName} {list.authorLastName}
          </CardText>
          <CardFooter className="text-secondary">
            {"--"}
            {moment(list.createdAt.toDate()).calendar()}
          </CardFooter>
        </CardBody>
      </Card>
    );
  else {
    return (
      <Card className="card bg-info project-summary" id="contextMenuId">
        <CardBody className="card-body text-light">
          <CardTitle className="card-title">{list.title}</CardTitle>
          <CardText>
            By {list.authorFirstName} {list.authorLastName}
          </CardText>
          <CardFooter className="text-secondary">
            {"--"}
            {moment(list.createdAt.toDate()).calendar()}
          </CardFooter>
        </CardBody>
      </Card>
    );
  }
};

export default ListSummary;
