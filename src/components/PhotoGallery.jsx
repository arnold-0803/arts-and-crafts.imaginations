import React, { useEffect, useState } from 'react'

const PhotoGallery = ({galleryData}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectGalleryCard, setSelectGalleryCard] = useState(null);

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

  const handleEnlargeGallery = (enlarge) => {
    setIsModalOpen(true);
    setSelectGalleryCard(enlarge);
  }

  const handleCloseEnlargeGallery = () => {
    setIsModalOpen(false);
    setSelectGalleryCard(null);
  }

  return (
    <div className='gallery-wrapper'>
      <h3 className='lg:text-[2rem] text-[#068b4fc2] max-[1023px]:text-[1.5rem] font-black max-[814px]:text-[1.6rem] 
        max-[727px]:text-[1.45rem] max-[326px]:text-[1.2rem] text-center pb-[10px]'>
        Our Photo Gallery
      </h3>
      <ul className='gallery-content grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[15px]'>
        {galleryData.map(gallery => 
          <li key={gallery.id}>
            <div className='content-card'>
              <div className='overflow-hidden'>
                <img src={gallery.image} alt={gallery.title} />
              </div>
              <div className='layer'>
                <p>{gallery.title}</p>
                <i className="fa-solid fa-up-right-and-down-left-from-center"
                  onClick={() => handleEnlargeGallery(gallery)}></i>
              </div>
            </div>
          </li>
        )}
      </ul>

      <div className='gallery-content-module'>
        {isModalOpen && (
          <div className='module-wrapper fixed left-0 top-0 w-full h-[100%] z-50 bg-[#3337] backdrop-blur-md flex
            justify-center items-center overflow-y-scroll'>
            <div className='module-content relative xl:mt-[150px] max-[1279px]:mt-[100px]'>
              <div className='md:w-[500px] max-[767px]:w-[400px] max-[459px]:w-full bg-[#00000049]'>
                <img src={selectGalleryCard.image} alt=""/>
              </div>
              <span className='absolute top-0 right-0 text-[#fff] bg-[#068b4fa2] w-[40px] h-[40px] flex
                justify-center items-center hover:bg-[#068b50]'
                onClick={handleCloseEnlargeGallery}>
                <i className='fa-solid fa-xmark text-[2rem]'></i>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PhotoGallery;