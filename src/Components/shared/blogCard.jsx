import React from 'react'
import Image from 'next/image'
const BlogCard = ({srcmain, title, description, h4text, h3text,  date, time, src3, srcProfile }) => {
  return (
    <div className='border border-[#00000014]  h-[550px] w-[356px] rounded-[8px] shadow-sm bg-white mb-14'>
       <div className="p-4">
       <div className="">
         <Image 
         src={srcmain}
         alt='alt'
         className='rounded-[8px]'
         />
        <span className='text-base font-semibold text-[#0D0D0E] opacity-40 pt-2'>{title}</span>
        <h3 className='text-[18px] font-normal text-primaryColor pt-3'>{h3text}</h3>
        <p className='text-[14px] font-normal text-primaryColor pt-3'>{description}</p>
          
       </div>
       <div className="border-t border-[#00000014] mt-5"></div>
       <div className="flex gap-5 pt-2">
          <Image 
          src={srcProfile}
          alt='alt'
          className='h-10 w-10'
          />
          <div className="">
            <h4 className='font-semibold text-primaryColor text-[14px]'>{h4text}</h4>
             <div className="flex gap-4">
              <span className='font-medium text-[12px] text-[#0D0D0E] opacity-40 pt-1'>{date}</span>
              <Image 
              src={src3}
              alt='alt'
              className='h-[27px] w-[11px]'
              />
              <span className='font-medium text-[12px] text-[#0D0D0E] opacity-40 pt-1'>{time}</span>
             </div>
          </div>
       </div>
       </div>
    </div>
  )
}

export default BlogCard