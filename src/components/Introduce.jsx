import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "animate.css";

export default class Introduce extends Component {
  render() {
    return (
      <div className="introduce">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="intro_pic" data-aos="fade-right">
                <img className="nameIs" src="./nameIs.png" alt="" />
              </div>
            </div>
            <div className="col-8">
              <div className="intro_text" data-aos="fade-left">
                <img className="intro_gap_line" src="Group 4.png" alt="" />
                <h1>
                  Name<span>.is()</span>
                </h1>
                <h3 className="intro_name">Duc Hoang Long Luu [Peter]</h3>
                <h3 className="intro_position">
                  Senior Bridge System Engineer - Business Analyst / Fresher
                  FrontEnd Developer 👨🏻‍💻{" "}
                </h3>
                <h4 className="intro_main_text">
                  I'm a young Business Analyst transitioning into FrontEnd
                  development. My experience in business analysis equips me with
                  a deep understanding of organizational needs, while my
                  burgeoning skills in frontend development make me a versatile
                  asset ready to bridge the gap between business and technology.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
