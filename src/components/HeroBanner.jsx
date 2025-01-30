import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = ({bannerData, navigate}) => {
  return (
    <div className={bannerData.customClass}>
      <div className='image'>
        <img className='w-full h-full'
          src={bannerData.image} alt="A vibrant and detailed image showcasing African tribal beadwork and arts and crafts. The scene includes colorful bead necklaces, bracelets, and tradit"
        />
        <div className="bg-gradient"></div>
      </div>
      <div className='content'>
        <h1>{bannerData.heading}</h1>
        <h3>{bannerData.subHeading}</h3>
        <p>{bannerData.body}</p>
        <p className='text-center font-semibold text-[#068b50] py-[20px] flex justify-center
          items-center'>
          <Link className='mr-[5px] text-[1.05rem] hover:underline'
            to={"/"}>
            Home
          </Link>
          <i className='fa-solid fa-chevron-right text-[1rem]'></i>
          <span className='ml-[5px] text-[1.05rem]'>{navigate}</span>
        </p>
      </div>
    </div>
  )
}

export default HeroBanner;