import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
          <div className="carousel_text">
            <div class="content">
              <div class="content__container">
                <p class="content__container__text">Hello</p>
                <ul class="content__container__list">
                  <li class="content__container__list__item">World !</li>
                  <li class="content__container__list__item">Everybody !</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
