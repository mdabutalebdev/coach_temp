import Image from 'next/image'
import React from 'react'
import notFound from "../../../assets/notFound.jpg"

const RvwCard = ({ comment, star }) => {

    return (
        <div className='flex gap-4 border-b pb-3'>
            <Image src={notFound} alt='blog_one' className='w-[56px] h-[56px] rounded-full' />

            <div className="flex flex-col gap-3">

                <h3 className="text-gray-800 font-lato text-base font-bold leading-[25.6px]">
                    Gertude Culbertson
                </h3>


                {
                    star ?
                        <div className="flex space-x-1">
                            {
                                Array.from({ length: 5 }, (e, idx) => {
                                    return <p key={idx}>{star}</p>
                                })
                            }
                        </div>

                        : false
                }

                <h3 className="text-[#333] text-base font-normal leading-normal">
                    {comment}
                </h3>

            </div>
        </div>
    )
}

export default RvwCard