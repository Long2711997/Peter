import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div class="education">
        <div class="container">
          <img class="edu_gap_pic" src="Group 6.png" alt="" />
          <div class="edu_main">
            <h1 data-aos="flip-down">
              Education<span>()</span>
            </h1>
            <div class="school_wrapper row" data-aos="fadeRight">
              <div class="col-6 school_name">
                <h2>Saskatchewan Polytechnic</h2>
              </div>
              <div class="col-4 school_time">
                <h3>In Progress</h3>
              </div>
              <div class="row program">
                <h4>Business Information System</h4>
              </div>
            </div>
            <div class="school_wrapper row" data-aos="fadeLeft">
              <div class="col-6 school_name">
                <h2>Kobe International University (St. Michael University)</h2>
              </div>
              <div class="col-4 school_time">
                <h3>Mar 2020</h3>
              </div>
              <div class="row program">
                <h4>Economics</h4>
              </div>
            </div>
            <div class="school_wrapper row" data-aos="fadeRight">
              <div class="col-6 school_name">
                <h2>Ho Chi Minh University of Foreign Language and IT</h2>
              </div>
              <div class="col-4 school_time">
                <h3>May 2017</h3>
              </div>
              <div class="row program">
                <h4>Oriental Languages and Cultures - Japanese Studies</h4>
              </div>
            </div>
          </div>
          {/* <img class="edu_pic_bottom" src="educationalBackground.png" alt="" /> */}
        </div>
      </div>
    );
  }
}
