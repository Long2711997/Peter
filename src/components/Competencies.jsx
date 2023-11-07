import React, { Component } from 'react'

export default class Competencies extends Component {
  render() {
    return (
      <div className="competencies">
        <div className="container">
          <div className="row conpetencies_title">
            <img className="competencies_gap_line" src="./Group 5.png" alt="" />
            <h1>
              Key_Competencies
              <span>
                (<span className="string">string</span> BA,{" "}
                <span className="string">string</span> FE)
              </span>
            </h1>
          </div>
          <div className="row">
            <div className="col-3">
              <ul>
                <li>[Business Analysis] </li>
                <li className="key_white">[Project Management]</li>
                <li>[Test Case Creation]</li>
                <li className="key_white">[Test Execution]</li>
                <li>[Customer Service]</li>
                <li className="key_white">[Research And Report]</li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li className="key_white">[Response Method Consultation] </li>
                <li>[Project Coordination]</li>
                <li className="key_white">[Design Document]</li>
                <li>[Negotiation]</li>
                <li className="key_white">[Japanese]</li>
                <li>[English]</li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li className="key_white">
                  [HTML / CSS / JS / SCSS / SASS / ReactJs]{" "}
                </li>
                <li>[C# / WPF Application]</li>
                <li className="key_white">[Java]</li>
                <li>[SQL (MySQL / MicrosoftSQL Server)]</li>
                <li className="key_white">[Figma]</li>
                <li>[Postman]</li>
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
