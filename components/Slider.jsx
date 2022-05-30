import React from 'react';
import { sliders } from '../lib/data';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import { Pagination, Navigation } from 'swiper';

const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <h2 className="slider__heading">Specialized Services</h2>
        <div className="slider__card-dot-wrapper"></div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          direction={'horizontal'}
          centeredSlides={true}
          loop={true}
          allowTouchMove={true}
          navigation={{
            nextEl: '.slider__card-arrow--right',
            prevEl: '.slider__card-arrow--left',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          pagination={{
            el: '.slider__card-dot-wrapper',
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="slider__card-wrapper"
        >
          {sliders.map(({ title, text, src }, i) => (
            <SwiperSlide className="slider__card" key={i}>
              <div className="slider__card-main">
                <div className="slider__card-image-wrapper">
                  <img className="slider__card-image" src={src} alt={title} />
                </div>
                <div className="slider__card-text-wrapper">
                  <h3 className="slider__card-heading">{title}</h3>
                  <p className="slider__card-text">{text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slider__card-arrow-wrapper">
          <div className="slider__card-arrow slider__card-arrow--left">
            <MdOutlineArrowBackIos size={30} />
          </div>

          <div className="slider__card-arrow slider__card-arrow--right">
            <MdArrowForwardIos size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
