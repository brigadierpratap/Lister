import React, { Component } from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

class Navbarn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand href="/" className="mr-auto">
              {" "}
              <img
                src="/image/logo.png"
                href="/"
                alt="Lister"
                style={{
                  height: "50px",
                  width: "90px",
                  transform: "1.2",
                  maxBlockSize: "40px",
                }}
              ></img>
            </NavbarBrand>
            <Collapse navbar isOpen={this.state.isOpen} className=" ">
              <Nav navbar className="ml-auto">
                {isLoaded(this.props.auth) && this.props.auth.uid ? (
                  <SignedInLinks profile={this.props.profile} />
                ) : (
                  <SignedOutLinks />
                )}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbarn);
