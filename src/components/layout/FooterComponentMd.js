import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer text-light d-none d-sm-block">
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  to="/aboutus"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5 ">
            <h5 className="justify-content-center">Our Address</h5>
            <address>
              Pallavi Singh, 11/12,
              <br />
              Cotton Mill Colony, Naini
              <br />
              Prayagraj, UP, India
              <br />
              <i className="fa fa-phone fa-lg"></i>
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                href="tel:8565956745"
              >
                : +91 8565956745
              </a>
              <br />
              <i className="fa fa-envelope fa-lg"></i> :{"  "}
              <a
                href="mailto:pgs909294@gmail.com"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontStyle: "italic",
                }}
              >
                pgs909294@gmail.com
              </a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-github text-light btn-lg"
                href="https://github.com/brigadierpratap/"
              >
                <i className="fa fa-github fa-lg"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook text-light btn-lg"
                href="http://www.facebook.com/pawanskillz"
              >
                <i className="fa fa-facebook fa-lg"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin text-light btn-lg"
                href="https://www.linkedin.com/in/pawan-singh-4b3b8618b/"
              >
                <i className="fa fa-linkedin fa-lg"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter text-light btn-lg"
                href="http://twitter.com/Singh__Pallavi"
              >
                <i className="fa fa-twitter fa-lg"></i>
              </a>

              <a
                className="btn btn-social-icon text-light btn-lg"
                href="mailto:pgs909294@gmail.com"
              >
                <i className="fa fa-envelope-o fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2020 Lister Co.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
