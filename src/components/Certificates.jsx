import React, { Component } from "react";

export default class Certificates extends Component {
  render() {
    return (
      <div className="certificates">
        <div className="container">
          <h1>
            Certificates<span>()</span>
          </h1>
          <div
            className="row"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="card" style={{ width: "18rem" }}>
              <img src="./kiu.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bachelor in Economics</h5>
                <p className="card-text">
                  <a href="https://www.kobe-kiu.ac.jp/en" target="_blank">
                    Kobe International University
                  </a>
                </p>
                <a
                  href="https://drive.google.com/file/d/1AAnjN4JAjVxjUkIDO805Ta1MmCpXCkDN/view"
                  target="_blank"
                  className="btn btn-primary"
                >
                  See Certificate
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="./cybersoft.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Front-End Developer </h5>
                <p className="card-text">
                  <a href="https://cybersoft.edu.vn/" target="_blank">
                    CyberSoft Academic
                  </a>
                </p>
                <a
                  href="https://drive.google.com/file/d/1AAnjN4JAjVxjUkIDO805Ta1MmCpXCkDN/view"
                  target="_blank"
                  className="btn btn-primary"
                >
                  See Certificate
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="./jlpt.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  Japanese Language Proficiency Test N2
                </h5>
                <p className="card-text">
                  <a href="https://www.jlpt.jp/e/" target="_blank">
                    Japan Foundation
                  </a>
                </p>
                <a
                  href="https://drive.google.com/file/d/1AAnjN4JAjVxjUkIDO805Ta1MmCpXCkDN/view"
                  target="_blank"
                  className="btn btn-primary"
                >
                  See Certificate
                </a>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img src="./ielts.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  International English Language Test System 6.5
                </h5>
                <p className="card-text">
                  <a href="https://ielts.org/" target="_blank">
                    IELTS
                  </a>
                </p>
                <a
                  href="https://drive.google.com/file/d/1AAnjN4JAjVxjUkIDO805Ta1MmCpXCkDN/view"
                  target="_blank"
                  className="btn btn-primary"
                >
                  See Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
