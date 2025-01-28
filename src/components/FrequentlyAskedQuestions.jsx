import React, { useState } from 'react';

const faqData = [
  {
    id: 0,
    question: "Why choose Imaginations?",
    answer: "At Imaginations, we offer a unique online marketplace where you can effortlessly purchase exquisite arts and crafts masterpieces. Our commitment goes beyond creativity—we transform waste materials into stunning masterpieces and consciously minimize timber use to combat climate change. By choosing us, you’re not only supporting talented artisans but also contributing to a sustainable future."
  },
  {
    id: 1,
    question: "Why should I choose to buy arts and crafts masterpieces online?",
    answer: "Buying arts and crafts online offers unmatched convenience, a wider selection of unique pieces, and the ability to support artisans from anywhere. At Imaginations, we make it easy to discover and purchase sustainable, handcrafted masterpieces from the comfort of your home, ensuring quality and creativity in every piece."
  }
];

const FrequentlyAskedQuestions = () => {

  const [isFaqOpen, setIsFaqOpen] = useState(null);

  const handleOpenAndClose = (id) => {
    setIsFaqOpen(isFaqOpen === id ? null : id);
  }

  return (
    <div className='faq-wrapper'>
      <h1 className='text-center tracking-wider'>
        Frequently Asked Questions
      </h1>
      <ul className='flex flex-col items-center'>
        {faqData.map(faqPlusAnswer => 
          <li className='relative md:w-[57%] max-[767px]:w-full'
            key={faqPlusAnswer.id}>
            <span className='block flex justify-between items-center md:text-[1.3rem] font-semibold text-[#000000d7]
              max-[639px]:text-[1.1rem] cursor-pointer'
              onClick={() => handleOpenAndClose(faqPlusAnswer.id)}>
              {faqPlusAnswer.question}
              <i className='fa-solid fa-arrow-down text-[0.88rem] text-[#ff811c] border-[1px] border-[#ff811c] rounded-[50px]'>
              </i>
            </span>
            {isFaqOpen === faqPlusAnswer.id && 
            <p className='md:text-[1.2rem] text-[#000000a9] border-b-[2px] border-[#0000008a]
              pb-[10px]'>
                {faqPlusAnswer.answer}
              </p>
            }
          </li>
        )}
      </ul>
    </div>
  )
}

export default FrequentlyAskedQuestions;