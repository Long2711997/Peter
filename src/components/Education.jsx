import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div className="education">
        <div className="container">
          <img className="edu_gap_pic" src="Group 6.png" alt="" />
          <div className="edu_main">
            <h1 className="edu_title">
              Education<span>()</span>
            </h1>
            <div className="school_wrapper row">
                <div className="col-6 school_name">
                  <h2>Saskatchewan Polytechnic</h2>
                </div>
                <div className="col-4 school_time">
                  <h3>Sep 2023 - Jun 2025</h3>
                </div>
              <div className="row program">
                <h4>Business Information System</h4>
              </div>
            </div>
            <div className="school_wrapper row">
                <div className="col-6 school_name">
                  <h2>
                    Kobe International University (St. Michael University)
                  </h2>
                </div>
                <div className="col-4 school_time">
                  <h3>Sep 2017 - Mar 2020</h3>
                </div>
              <div className="row program">
                <h4>Economics</h4>
              </div>
            </div>
            <div className="school_wrapper row">
                <div className="col-6 school_name">
                  <h2>Ho Chi Minh University of Foreign Language and IT</h2>
                </div>
                <div className="col-4 school_time">
                  <h3>Aug 2015 - May 2017</h3>
                </div>
              <div className="row program">
                <h4>Oriental Languages and Cultures - Japanese Studies</h4>
              </div>
            </div>
          </div>
          <img
            className="edu_pic_bottom"
            src="educationalBackground.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}
