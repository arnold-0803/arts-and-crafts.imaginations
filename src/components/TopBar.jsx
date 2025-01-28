import React from 'react';
import { reachoutInfo, socialMedia } from '../assets/data/navBarMenuItems';

const TopBar = () => {
  return (
    <div className='top-bar w-full max-[1280px]:hidden'>
      <div className='flex flex-wrap justify-between items-center bg-[#ff5757]'>
        <ul className='left-side flex gap-[10px] text-[#fff]'>
          {socialMedia.map(item => 
            <li key={item.id}>
              <a href={item.link}>
                <i className={`${item.icon} text-[1.1rem]`}></i>
              </a>
            </li>
          )}
        </ul>
        <ul className='right-side flex gap-[10px] text-[#fff]'>
          {reachoutInfo.map(item => 
            <li className='text-[0.95rem] border-r-[1px] border-[#fff]'
              key={item.id}>
              <i className={`${item.icon}`}></i>{item.info}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default TopBar;