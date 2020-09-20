import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <React.Fragment>
      <NavItem>
        <NavLink className="nav-link" to="/">
          <span className="fa fa-home fa-lg"></span> Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/create">
          <span className="fa fa-plus-square fa-lg"></span> New List
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/" onClick={props.signOut}>
          <span
            className="fa fa-sign-out fa-lg
          "
          ></span>{" "}
          Log Out
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className="nav-link btn-info text-light text-center  color-white rounded "
          to="/profile"
        >
          {props.profile.initials}
        </NavLink>
      </NavItem>
    </React.Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
