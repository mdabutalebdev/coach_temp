import React from 'react'
import Image from 'next/image'
import Button from './button'
const ReviewCard = ({src1, src2, name, description, h4text, ptext}) => {
  return (
     <div className="">
        <div className="flex justify-center gap-2 mt-16 mb-12">
             <Image
             src={src1}
             alt='alt'
             />
            <h4 className='font-semibold text-[24px] '>{name}</h4>
        </div>
         <p className='w-[1116px] mx-auto font-medium text-[28px] text-center leading-10'> {description}</p>
         <div className="flex justify-center mt-6 mb-4">
         <Image
             src={src2}
             alt='alt'
             />
            
         </div>
         <div className="text-center">
         <h4 className='font-medium text-[18px]'>{h4text}</h4>
             <p className='font-medium text-[18px] pt-1 pb-12 text-[#071019] opacity-50'>{ptext}</p>
             <Button>
             Read Cutomer Story
             </Button>
         </div>
     </div>
  )
}

export default ReviewCard