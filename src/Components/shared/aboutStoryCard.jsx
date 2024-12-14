import React from 'react'
import Image  from 'next/image'
const AboutStoryCard = ({text, perageaph, src}) => {
  return (
    <div className='h-[229px] w-[288px] bg-white shadow-md rounded-[11px] px-6'> 
        <Image 
        src={src}
        alt='alt'
        className='pt-6 pb-4'
        />
        <h3 className='font-normal text-primaryColor text-[24px]'>{text}</h3>
        <p className='text-[#656D70] font-normal text-[14px]'>{perageaph}</p>
    </div>
  )
}

export default AboutStoryCard