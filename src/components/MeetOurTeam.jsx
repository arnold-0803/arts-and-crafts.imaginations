import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SocialMediaIcons from './SocialMediaIcons';

function MeetOurTeam({teamInfoData, teamSocialMediaData}) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectBoardCard, setSelectBoardCard] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleReadMore = (readMore) => {
    setIsModalOpen(true);
    setSelectBoardCard(readMore);
  }

  const handleCloseReadMore = () => {
    setIsModalOpen(false);
    setSelectBoardCard(null);
  }

  return (
    <div className='info-wrapper'>
      <h1 className='text-center'>
        Meet Our Team
      </h1>
      <p className='text-center font-semibold text-[#068b50]'>
        <Link className='text-[1.05rem] hover:underline' 
          to={"/"}>
          Home
        </Link>
        <i className='fa-solid fa-chevron-right'></i>
        <span className='ml-[5px] text-[1.05rem]'>About</span>
      </p>
      {/* CARDS MODULE */}
      <ul className='info-content'>
        {teamInfoData.map(teamInfo => 
          <li key={teamInfo.id}>
            <img className='rounded-[3px]'
              src={teamInfo.image} alt={teamInfo.title}
            />
            <h4 className='text-[1.5rem] font-semibold'>
              {teamInfo.name}
            </h4>
            <h5>{teamInfo.title}</h5>
            <p>{teamInfo.body.slice(0,63)}...
              <span className='hover:underline'
                onClick={() => handleReadMore(teamInfo)}
              >
                Read more
                <i className='fa-solid fa-arrow-right'></i>
              </span>
            </p>
          </li>
        )}
      </ul>

      {/* CARD-EXPAND MODULE */}
      <div className='info-content-module'>
        {isModalOpen && (
          <div className='module-wrapper fixed left-0 top-0 w-full h-[100%] z-50 bg-[#333333a8] backdrop-blur-md flex
            justify-center items-center overflow-y-scroll'>
            <div className='module-content relative'>
              <div className='md:w-[500px] max-[767px]:w-[400px] max-[459px]:w-full bg-[#00000049]'>
                <img src={selectBoardCard.image} alt=""/>
                <h4 className='text-[1.5rem] font-semibold text-[#fff] text-center'>
                  {selectBoardCard.name}
                </h4>
                <h5 className='text-[1.3rem] font-bold text-[#fff] text-center'>
                  {selectBoardCard.title}
                </h5>
                <p className='text-[#fff]'>
                  {selectBoardCard.body}
                </p>
                <div>
                  <SocialMediaIcons 
                    socialMediaIcons={teamSocialMediaData}
                    telNumber={selectBoardCard.tel}
                    email={selectBoardCard.email}
                  />
                </div>
              </div>
              <span className='absolute top-0 right-0 text-[#fff] bg-[#068b4fa2] w-[40px] h-[40px] flex
                justify-center items-center hover:bg-[#068b50]'
                onClick={handleCloseReadMore}>
                <i className='fa-solid fa-xmark text-[2rem]'></i>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MeetOurTeam;