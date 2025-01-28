import React from 'react'
import { Link } from 'react-router-dom';

const SocialMediaIcons = ({socialMediaIcons, telNumber, email}) => {
  return (
    <div className='social-media-wrapper'>
      <ul className='flex justify-center gap-[3px]'>
        {socialMediaIcons.map(socialMediaIcon => 
          <li key={socialMediaIcon.id}>
            <Link to={socialMediaIcon.link}>
              <i className={`${socialMediaIcon.icon} text-[1.2rem]`}></i>
            </Link>
          </li>
        )}
      </ul>
      <div className='flex flex-wrap justify-between text-[#fff]'>
        <span>
          <i className='fa-solid fa-envelope'></i> {email}
        </span>
        <span>
          <i className='fa-solid fa-phone'></i> {telNumber}
        </span>
      </div>
    </div>
  )
}

export default SocialMediaIcons;