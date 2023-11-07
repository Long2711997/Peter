import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <div className="carousel_banner_wrapper">
          <img className="carouselBanner" src="./longbanner-01 1.png" alt="" />
        </div>
        <div className="carousel_text">
            <p className='welcome_to'>WELCOME TO</p>
            <p className="my_page">MY PAGE</p>
            <p className='about_me'>ABOUT ME</p>
        </div>
      </div>
    );
  }
}
