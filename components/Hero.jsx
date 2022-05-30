import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__first-row">
            <h1 className="hero__heading">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="hero__subheading">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Booking.com account
            </p>
          </div>
          <div className="hero__second-row">
            <img
              className="hero__artwork"
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
              alt="Artwork for title 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
