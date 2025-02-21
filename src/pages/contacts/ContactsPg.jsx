import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import { contacsBannerData } from '../../assets/data/heroBannerData';
import SocialMediaIcons from '../../components/SocialMediaIcons';
import { socialMedia } from '../../assets/data/navBarMenuItems';

const contactsData = [
  {
    id: 0,
    icon: "fa-solid fa-phone",
    contactInfo: "(+254)700000000"
  },
  {
    id: 1,
    icon: "fa-solid fa-envelope",
    contactInfo: "info@imaginations.org"
  },
  {
    id: 2,
    icon: "fa-solid fa-location-dot",
    contactInfo: "Maasai-Market, Nairobi"
  }
];

const ContactsPg = () => {
  return (
    <div className='contacts'>
      <div>
        <HeroBanner 
          bannerData={contacsBannerData}
          navigate="Contacts"
        />
      </div>
      <div className="contact-content min-[628px]:flex justify-center items-start min-[1011px]:gap-[30px]
        max-[1011px]:gap-[15px] max-[628px]:flex max-[628px]:flex-col">
        <div className='min-[628px]:flex-1 max-[628px]:w-full border border-[#3333332f]  shadow-xl'>
          <h3 className='text-center text-[#068b4fc2] text-[1.5rem] font-bold'>
            Reach Out Through
          </h3>
          <div className='flex flex-wrap justify-center items-center'>
            <ul className='flex-1'>
              {contactsData.map(contact => 
                <li className='text-[#2c0202] text-[1.1rem]'
                  key={contact.id}>
                  <i className={`${contact.icon} text-[#068b50]`}></i> {contact.contactInfo}
                </li>
              )}
            </ul>
            <div className='socials flex-1'>
              <h4 className='text-center font-bold text-[#068b4fc2]'>
                Follow Us
              </h4>
              <SocialMediaIcons socialMediaIcons={socialMedia}/>
            </div>
          </div>
          <div className="location-map">
            <h4 className='text-center font-bold text-[#068b4fc2]'>
              Location Map
            </h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1994.4054317962043!2d36.82101311597749!3d-1.2876072541695869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smaasai%20market%2C%20nairobi%2C%20kenya!5e0!3m2!1sen!2ske!4v1738179761237!5m2!1sen!2ske" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className='min-[628px]:flex-1 max-[628px]:w-full border border-[#3333332f] shadow-xl'>
          <h3 className='text-center text-[#ff821cce] text-[1.5rem] font-bold'>
            Leave Us Your Feedback
          </h3>
          <form className='flex flex-col gap-[10px]'>
            <input type="text" placeholder='user name' required/>
            <input type="email" placeholder='email' required/>
            <input type="text" placeholder='subject' />
            <textarea className='h-[150px]'
             name="message" placeholder='Write message' required></textarea>
            <button>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactsPg;