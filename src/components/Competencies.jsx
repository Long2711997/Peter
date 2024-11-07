import React, { Component } from 'react'

export default class Competencies extends Component {
  render() {
    return (
      <div className="competencies">
        <div className="container">
          <div className="row conpetencies_title" data-aos="fade-down-right">
            {/* <img className="competencies_gap_line" src="./Group 5.png" alt="" /> */}
            <h1>
              Key_Competencies
              <span>
                (<span className="string">string</span> BA,{" "}
                <span className="string">string</span> FE)
              </span>
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <ul>
                <li data-aos="fade-down-right">[Business Analysis] </li>
                <li className="key_white" data-aos="fade-down-right">
                  [Project Management]
                </li>
                <li data-aos="fade-down-right">[Test Case Creation]</li>
                <li className="key_white" data-aos="fade-up-right">
                  [Test Execution]
                </li>
                <li data-aos="fade-up-right">[Customer Service]</li>
                <li className="key_white" data-aos="fade-up-right">
                  [Research And Report]
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <ul>
                <li className="key_white" data-aos="fade-down">
                  [Response Method Consultation]{" "}
                </li>
                <li data-aos="fade-down">[Project Coordination]</li>
                <li className="key_white" data-aos="fade-down">
                  [Design Document]
                </li>
                <li data-aos="fade-up">[Negotiation]</li>
                <li className="key_white" data-aos="fade-up">
                  [Japanese]
                </li>
                <li data-aos="fade-up">[English]</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <ul>
                <li className="key_white" data-aos="fade-down-left">
                  [HTML / CSS / JS / SCSS / SASS / ReactJs]{" "}
                </li>
                <li data-aos="fade-down-left">[C# / WPF Application]</li>
                <li className="key_white" data-aos="fade-down-left">
                  [Java]
                </li>
                <li data-aos="fade-down-right">
                  [SQL (MySQL / MicrosoftSQL Server)]
                </li>
                <li className="key_white" data-aos="fade-down-right">
                  [Figma]
                </li>
                <li data-aos="fade-down-right">[Postman]</li>
              </ul>
            </div>
            <img
              className="competencies_pic"
              src="./keyCompetencies.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
