import React from 'react';
import { galleryData, teamInfoData, teamSocialMediaData } from '../../assets/data/infoData';
import MeetOurTeam from '../../components/MeetOurTeam';
import PhotoGallery from '../../components/PhotoGallery';

const AboutTeamPg = () => {
  return (
    <div className='about-team'>
      <div>
        <MeetOurTeam 
          teamInfoData={teamInfoData}
          teamSocialMediaData={teamSocialMediaData}
        />
      </div>
      <div>
        <PhotoGallery galleryData={galleryData}/>
      </div>
      <div className='fun-fact-wrapper'>
        <div className='fun-fact bg-[#fde0c0]'>
          <h4 className='md:text-[1.4rem] max-[767px]:text-[1.2rem] font-bold text-[#2c0202]
            text-center'>
            🔍#: Fun Fact!
          </h4>
          <p className='md:text-[1.3rem] text-[#068b50] text-center'>
            💡 "Did you know? Over 40% of the art and craft masterpieces on our marketplace are 
            created from upcycled waste! By turning trash into treasure, we're not just making art—we're 
            reducing waste, one masterpiece at a time!"
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutTeamPg;