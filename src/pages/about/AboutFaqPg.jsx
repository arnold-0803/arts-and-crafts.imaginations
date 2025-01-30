import React from 'react'
import HeroBanner from '../../components/HeroBanner';
import { aboutBannerData } from '../../assets/data/heroBannerData';
import { aboutInfoData } from '../../assets/data/infoData';
import FrequentlyAskedQuestions from '../../components/FrequentlyAskedQuestions';


const AboutFaqPg = () => {
  return (
    <div className='about-faq'>
      <div>
        <HeroBanner 
          bannerData={aboutBannerData}
          navigate="About"
        />
      </div>
      <div className='info-wrapper'>
        <h3 className='text-center p-[10px_0_15px]'>
          Learn About Us
        </h3>
        <ul className='info-content'>
          {aboutInfoData.map(info => 
            <li key={info.id}>
              <h4>{info.heading} <i className={info.icon}></i></h4>
              <p>{info.body}</p>
            </li>
          )}
        </ul>
        <div className='fun-fact-wrapper'>
          <div className='fun-fact bg-[#fde0c0]'>
            <h4 className='md:text-[1.4rem] max-[767px]:text-[1.2rem] font-bold text-[#2c0202]
              text-center'>
              🔍#: Fun Fact!
            </h4>
            <p className='md:text-[1.3rem] text-[#068b50] text-center'>
              🌍 "Did you know? By choosing our crafts, you're helping save 
              trees! We prioritize sustainable materials, creating art that 
              minimizes timber use and helps combat climate change.
            </p>
          </div>
        </div>
        <div>
          <FrequentlyAskedQuestions/>
        </div>
      </div>
    </div>
  )
}

export default AboutFaqPg;