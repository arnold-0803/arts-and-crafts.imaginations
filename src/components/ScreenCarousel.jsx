import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const ScreenCarousel = ({
  heroCarouselData, 
  customClass,
  slidesPerView=1,
  spaceBetween=20,
  navigation,
  pagination
  }) => {
  return (
    <Swiper className={customClass}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      navigation={navigation}
      pagination={pagination ? {clickable:true} : false}
      modules={[Navigation, Pagination, Autoplay]}
    >
      {heroCarouselData.map(data =>
        <SwiperSlide className='swiper-slide'
          key={data.id}
        >
          <img src={data.image} alt="" />
          <div className='content-wrapper flex'>
            <div className='content'>
              <h1>
                {data.heading}
              </h1>
              <p>
                {data.body}
              </p>
              <span className='btn-container'>
                <Link to={data.url}>
                  {data.btnName}
                </Link>
              </span>
            </div>
            <div className="blank"></div>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
}
 
export default ScreenCarousel;