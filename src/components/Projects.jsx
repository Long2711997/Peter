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
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="./adidas-prophere.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Shoes Shop</h5>
                  <p className="card-text">
                    A ReactJs project focusing on CRUD
                  </p>
                  <p className="languages">
                    <i class="devicon-react-original colored"></i>
                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-sass-original colored"></i>
                    <i class="devicon-bootstrap-plain colored"></i>
                  </p>
                  <a
                    href="https://shoes-shop-react-three.vercel.app/"
                    className="btn btn-primary"
                  >
                    Go To Project
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-md-3" data-aos="zoom-in">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/62291b5f923ec472a68d77ea_Blog%20-%201%20(2).png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Fiverr Cloned</h5>
                  <p className="card-text">
                    A project replicated from Fiverr, centered on data mapping from database and TypeScript
                  </p>
                  <p className="languages">
                    <i class="devicon-react-original colored"></i>
                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-sass-original colored"></i>
                    <i class="devicon-bootstrap-plain colored"></i>
                    <i class="devicon-typescript-plain colored"></i>
                  </p>
                  <a
                    href="https://fiverr-clone-xi.vercel.app/"
                    className="btn btn-primary"
                  >
                    Go To Project
                  </a>
                </div>
              </div>
            </div> */}
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://pbs.twimg.com/profile_images/1509802359383367691/R0psIpR4_400x400.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Food App</h5>
                  <p className="card-text">
                    In-training foundational project focusing on API development
                  </p>
                  <p className="languages">
                    <i class="devicon-sequelize-plain colored"></i>
                    <i class="devicon-nodejs-plain-wordmark colored"></i>
                    <i class="devicon-postman-plain colored"></i>
                    <i class="devicon-docker-plain colored"></i>
                  </p>
                  <a
                    href="https://github.com/PeterLuu2701/FoodApp-Sequelize"
                    className="btn btn-primary"
                  >
                    Go To Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="./adidas-prophere.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">HomePage (Figma Design)</h5>
                  <p className="card-text">
                    Self-training, emphasizing components, color schemes, Figma's features
                  </p>
                  <p className="languages">
                    <i class="devicon-figma-plain colored"></i>
                  </p>
                  <a
                    href="https://www.figma.com/file/Sykj4b1BuDovytieFPhYw0/Demo-Homepage?type=design&node-id=0-1&mode=design"
                    className="btn btn-primary"
                  >
                    Go To Project
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6" data-aos="zoom-in">
              <h1 className="project_continue">
                <span className="sign_gold">[</span>To Be Updated...<span className="sign_gold">]</span>
              </h1>
            </div> */}
          </div>
          <h1 className="sign_bottom">
            <span className="sign ">&#10101;</span>
          </h1>
        </div>
      </div>
    );
  }
}
