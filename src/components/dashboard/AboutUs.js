import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div className="container mb-5 pb-4">
        <div className="row justify-content-center bg-secondary">
          <h1
            style={{
              textDecoration: "underline",
              fontFamily: "cursive",
            }}
          >
            About Us
          </h1>
        </div>
        <div className="row border bg-secondary text-light">
          <div
            className="col-md-6 col-sm-12 mt-3 text-center"
            style={{ height: "600px" }}
          >
            <img
              src="/image/Pawan.jpg"
              className="rounded-circle h-50"
              alt="Pawan"
            ></img>
            <h1 style={{ fontFamily: "cursive" }}>Pawan Singh</h1>
            <br />
            <p>
              I am an Undegrad Student, currently enrolled in 4 year B.Tech
              course in Electronics and Communication Engineering, at National
              Institute of Technology Patna.
              <br />I am a Javaphile and a linux enthusiast.
              <br />
              My modus operendi is "<i>Observe and Absorb!</i>"
              <br />
              Find my Portfolio{" "}
              <a
                href="https://www.pawannitp.tech"
                style={{
                  fontStyle: "italic",

                  color: "yellow",
                }}
              >
                here
              </a>
              .
            </p>
          </div>
          <div
            className="col-md-6 col-sm-12 mt-3 text-center"
            style={{ height: "600px" }}
          >
            <img
              src="/image/Pallavi.jpeg"
              alt="Pallavi"
              className="rounded-circle h-50"
            ></img>
            <h1 style={{ fontFamily: "cursive" }}>Pallavi Singh</h1>
            <br />
            <p>
              I am an Undegrad Student, currently enrolled in 4 year B.Tech
              course in Computer Science and Engineering, at United College of
              Engineering and Reasearch Prayagraj Uttar Pradesh.
              <br />I have deep interest in Web development, front-end(in
              particular).
              <br />
              My motto is "<i>Semper Sursum!</i>"
              <br />
              Find my Resume{" "}
              <a
                href="https://drive.google.com/file/d/1qdhfhh6AyZhagl766YJX9M-L7L8UPViX/view?usp=sharing"
                style={{
                  fontStyle: "italic",

                  color: "yellow",
                }}
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
