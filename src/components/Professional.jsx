import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div className="professional">
        <div className="container">
          <div className="row professional_top" data-aos="flip-left">
            <div className="col-md-4">
              {" "}
              <img
                className="professional_pic"
                src="professionalExperience.png"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="professional_title">
                <h1>
                  Professional_Experience<span>()</span>
                </h1>
              </div>
              <div className="professional_brse">
                <h2>
                  const <span>BrSE</span> = () =&#62; &#10100;
                </h2>
                <h5>
                  As a <span>BrSE (Bridge System Engineer)</span>, I am the
                  mid-point between the customers and offshore team.
                </h5>
                <div className="professional_brse_task">
                  <ul>
                    <li>
                      <i class="fa-solid fa-code-branch"></i>
                      <span>Business Analyzing</span>: Read and researched all
                      documents of projects, clarified the requirements,
                      communicated with customers to define every features
                      related to projects.
                    </li>
                    <li>
                      <i class="fa-solid fa-code-branch"></i>
                      <span>Project Coordinating</span>: Translated all
                      documents and meetings from Japanese to Vietnamese and
                      versa; managed tasks to keep deadline, discussed solutions
                      with PM if there are late tasks; created documents related
                      to projects; reported to PM and customer everyday.
                    </li>
                  </ul>
                </div>
                <h2>&#10101; ;</h2>
              </div>
            </div>
          </div>
          <div className="professional_main">
            <div className="row" data-aos="fade-down-right">
              <div class="card bg-dark">
                <div class="card-header row">
                  <div className="col-6 company_position">
                    <h3>BA / Developer</h3>
                  </div>
                  <div className="col-6 company_time float-right">
                    <h3>Feb 2023 - Jun 2023</h3>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title company_name">
                    FPT Software Ho Chi Minh
                  </h5>
                  <p class="card-text">
                    The largest software outsourcing company in South East Asia
                  </p>
                  <a
                    href="https://fptsoftware.com/"
                    class="btn btn-primary"
                    target="blank"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-right">
              <div class="card bg-dark">
                <div class="card-header row">
                  <div className="col-6 company_position">
                    <h3>BrSE / BA</h3>
                  </div>
                  <div className="col-6 company_time float-right">
                    <h3>Nov 2021 - Feb 2023</h3>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title company_name">
                    SPlus Software JSC / SKG Company JSC
                  </h5>
                  <p class="card-text">
                    A software outsourcing company, working mainly with the
                    Japanese market
                  </p>
                  <a
                    href="https://splus-software.com.vn/"
                    class="btn btn-primary"
                    target="blank"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up-right">
              <div class="card bg-dark">
                <div class="card-header row">
                  <div className="col-6 company_position">
                    <h3>Marketing Staff</h3>
                  </div>
                  <div className="col-6 company_time float-right">
                    <h3>Jun 2020 - Feb 2021</h3>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title company_name">
                    THE REPRESENTATIVE OFFICE OF HONG KONG SHINDO LIMITED IN
                    HCMC
                  </h5>
                  <p class="card-text">The largest Japanese textile company</p>
                  <a
                    href="https://www.shindo.com/en/"
                    class="btn btn-primary"
                    target="blank"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <a
                // href="../assets/file/Resume_LongLuu(Peter).pdf"
                href="https://drive.google.com/file/d/1nsafg3mGHDx7DVTc7jdVtF8s2PeK5uIo/view"
                target="blank"
                class="btn btn-primary resume"
                tabIndex="0"
                // download="../assets/file/Resume_LongLuu(Peter).pdf"
              >
                <span>Have a View on my Resume</span>
                <img
                  className="check"
                  src="./check.png"
                  width={60}
                  height={60}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
