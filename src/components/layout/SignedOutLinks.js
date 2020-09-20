import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <NavItem>
        <NavLink className="nav-link" to="/signup">
          <i className="fa fa-sign-in fa-lg"></i> Signup
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/signin">
          <i className="fa fa-sign-in fa-lg"></i> Login
        </NavLink>
      </NavItem>
    </React.Fragment>
  );
};
export default SignedOutLinks;
