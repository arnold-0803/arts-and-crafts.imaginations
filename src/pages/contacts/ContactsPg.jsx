import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import { contacsBannerData } from '../../assets/data/heroBannerData';


const ContactsPg = () => {
  return (
    <div className='contacts'>
      <div>
        <HeroBanner 
          bannerData={contacsBannerData}
          navigate="Contact"
        />
      </div>
    </div>
  )
}

export default ContactsPg;