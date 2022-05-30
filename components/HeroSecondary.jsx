import React, { useState } from 'react';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const HeroSecondary = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
      alt: 'image1',
      title: 'Title 1',
      text: 'Hello, Here will be a text',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
      alt: 'image2',
      title: 'Title 2',
      text: 'Hello here will be another text',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
      alt: 'image3',
      title: 'Title 3',
      text: 'Hello, Here will be a text',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
      alt: 'image4',
      title: 'Title 4',
      text: 'Hello here will be another text',
    },
  ];
  const handleMove = (direction) => {
    let newSlideNumber;
    const length = photos.length - '1';
    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? length : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === length ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <section className="hero-secondary">
      <div className="container">
        <div className="hero-secondary__wrapper">
          <div className="hero-secondary__card-arrow hero-secondary__card-arrow--left">
            <MdOutlineArrowBackIos onClick={() => handleMove('l')} />
          </div>
          <div className="hero-secondary__card">
            <div className="hero-secondary__card-image-wrapper">
              <img
                className="hero-secondary__card-image"
                src={photos[slideNumber].src}
                alt={photos[slideNumber].alt}
              />
            </div>
            <div className="hero-secondary__card-text-wrapper">
              <h3>{photos[slideNumber].title}</h3>
              <p>{photos[slideNumber].text}</p>
            </div>
          </div>
          <div className="hero-secondary__card-arrow hero-secondary__card-arrow--right">
            <MdArrowForwardIos onClick={() => handleMove('r')} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSecondary;
