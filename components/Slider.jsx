import React from 'react';
import { sliders } from '../lib/data';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper';

const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <h2 className="slider__heading">Specialized Services</h2>
        <div className="slider__card-dot-wrapper swiper-pagination1"></div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          direction={'horizontal'}
          speed={500}
          loop={true}
          allowTouchMove={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination1',
            type: 'bullets',
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
          className="slider__card-wrapper"
        >
          <div>
            {sliders.map(({ title, text, src }, i) => (
              <SwiperSlide className="slider__card" key={i}>
                <div className="slider__card-main">
                  <div className="slider__card-image-wrapper">
                    <img className="slider__card-image" src={src} alt={title} />
                  </div>
                  <div className="slider__card-text-wrapper">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="slider__card-arrow-wrapper">
          <div className="slider__card-arrow slider__card-arrow--left swiper-button-prev">
            <MdOutlineArrowBackIos size={30} />
          </div>

          <div className="slider__card-arrow slider__card-arrow--right swiper-button-next">
            <MdArrowForwardIos size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
