import React from "react";

function Footers(props) {
  return (
    <div
      className="footer text-light d-block d-sm-none"
      style={{ marginTop: "2rem" }}
    >
      <div className="row justify-content-center">
        <div className="col-auto align-self-center">
          <div className="text-center">
            <a
              className="btn btn-social-icon btn-github text-light "
              href="https://github.com/brigadierpratap/"
            >
              <i className="fa fa-github fa-lg"></i>
            </a>
            <a
              className="btn btn-social-icon btn-facebook text-light "
              href="http://www.facebook.com/pawanskillz"
            >
              <i className="fa fa-facebook fa-lg"></i>
            </a>
            <a
              className="btn btn-social-icon btn-linkedin text-light "
              href="https://www.linkedin.com/in/pawan-singh-4b3b8618b/"
            >
              <i className="fa fa-linkedin fa-lg"></i>
            </a>
            <a
              className="btn btn-social-icon btn-twitter text-light "
              href="http://twitter.com/Singh__Pallavi"
            >
              <i className="fa fa-twitter fa-lg"></i>
            </a>

            <a
              className="btn btn-social-icon text-light "
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
  );
}
export default Footers;
