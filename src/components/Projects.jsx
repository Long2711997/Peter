import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <h1>
            let <span className="project_var">projects</span> ={" "}
            <span className="sign">&#10100;</span>
          </h1>
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="./adidas-prophere.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Shoes Shop</h5>
                  <p className="card-text">
                    A little project with basic ReactJs
                  </p>
                  <p className="languages">
                    <i class="devicon-react-original colored"></i>
                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-sass-original colored"></i>
                    <i class="devicon-bootstrap-plain colored"></i>
                  </p>
                  <a
                    href="https://bc35e-shoes-shop-khang-long.netlify.app/?fbclid=IwAR0x_ilYfJb0G9Qh-nzgpCb9HQwJo-UXv98w5U7fOq_o0OJl1Jh-DgqsMi0"
                    className="btn btn-primary"
                  >
                    Go To Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
              <h1 className="project_continue">
                <span className="sign_gold">[</span>To Be Updated...<span className="sign_gold">]</span>
              </h1>
            </div>
          </div>
          <h1 className="sign_bottom">
            <span className="sign ">&#10101;</span>
          </h1>
        </div>
      </div>
    );
  }
}
