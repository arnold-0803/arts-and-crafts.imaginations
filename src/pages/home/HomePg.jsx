import React from 'react';
import ScreenCarousel from '../../components/ScreenCarousel';
import { bannerCarouselData } from '../../assets/data/heroBannerData';

const HomePage = () => {
  return (
    <div className='home'>
      <div className='pt-1'>
        <ScreenCarousel
          heroCarouselData={bannerCarouselData}
          customClass="hero-carousel"
          slidesPerView={1}
          navigation={true}
          pagination={true}
        />
      </div>
    </div>
  )
}

export default HomePage;