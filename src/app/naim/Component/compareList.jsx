import React from 'react'
import SectionTitle from './sectionTitle'
import Button from '@/Components/shared/button'
import Image from 'next/image'
import group_profile from '../../../assets/group_profile.png'
import test from '../../../assets/test.jpg'
import { Contact, Flag, Star } from '../icons'
import { CardContent, CardDescription } from '@/Components/ui/card'

const CompareList = () => {
    return (
        <div className="flex flex-col gap-[20px]">

            <div className='flex gap-6'>
                <div className='border rounded-[8px] w-[384px] py-4 px-4 flex flex-col items-center justify-center'>
                    <SectionTitle text={"Product Comparison"} />
                    <SectionTitle text={"(2 Products selected)"} className={"font-medium text-[#506A80]"} />
                    <Button className='!border !border-BtnColor !bg-transparent !text-BtnColor !text-base font-semibold mt-[12px]'>
                        Clear All
                    </Button>
                </div>

                <div className='border rounded-[8px] w-[384px] py-4 px-4 flex items-center gap-6'>
                    <Image src={group_profile} alt='group_profile' className='object-cover w-[80px] h-[80px]' />
                    <h2 className="text-[#333] text-base font-extrabold leading-[24px]">
                        Infrastructure Development Company Limited (IDCOL)
                    </h2>
                </div>

                <div className='border rounded-[8px] w-[384px] py-4 px-4 flex items-center gap-6'>
                    <Image src={test} alt='test' className='object-cover w-[80px] h-[80px]' />
                    <h2 className="text-[#333] text-base font-extrabold leading-[24px]">
                        Infrastructure Development Company Limited (IDCOL)
                    </h2>
                </div>
            </div>
            {/* 1--- About start  */}
            <div className="flex gap-6">
                <div className="border-b w-[384px] h-[83px] flex items-center p-4">
                    <h5 className='text-[#333] text-base font-bold leading-[150%]'>
                        About
                    </h5>
                </div>

                <div className="border-b w-[384px] h-[83px] flex items-center p-4">
                    <p className='text-sm text-[#333] font-medium'>Lorem ipsum dolor sit amet consectetur. Urna ultrices leo amet lobortis nisl vel eu dapibus a. Sit mauris scelerisque maecenas at sit at arcu imperdiet....</p>
                </div>

                <div className="border-b w-[384px] h-[83px] flex items-center p-4">
                    <p className='text-sm text-[#333] font-medium'>Lorem ipsum dolor sit amet consectetur. Urna ultrices leo amet lobortis nisl vel eu dapibus a. Sit mauris scelerisque maecenas at sit at arcu imperdiet....</p>
                </div>
            </div>
            {/* About end  */}
            <div className="flex gap-6">
                <div className="border-b w-[384px] h-[83px] flex items-center p-4">
                    <h5 className='text-[#333] text-base font-bold leading-[150%]'>
                        Price
                    </h5>
                </div>

                <div className="border-b w-[384px] h-[83px] flex items-center p-4">
                    <h1 className="text-primary font-lato text-[20px] font-extrabold leading-[44.8px]">
                        $250
                        <span className='text-black/50 text-[12px] font-normal'>/Hour</span>
                    </h1>
                </div>

                <div className="border-b w-[384px] h-[83px] flex items-center p-4">
                    <h1 className="text-primary font-lato text-[20px] font-extrabold leading-[44.8px]">
                        $250
                        <span className='text-black/50 text-[12px] font-normal'>/Hour</span>
                    </h1>
                </div>
            </div>

            {/* 2--- Rating & Review start */}
            <div className="flex gap-6">
                <div className="border-b w-[384px] h-[83px] flex items-center p-4">
                    <h5 className='text-[#333] text-base font-bold leading-[150%]'>
                        Rating & Review
                    </h5>
                </div>

                <div className="border-b w-[384px] h-[83px] p-4 flex justify-center flex-col">
                    {
                        <div className="flex space-x-1">
                            {
                                Array.from({ length: 5 }, (e, idx) => {
                                    return <Star key={idx} />
                                })
                            }
                        </div>
                    }
                    <p className="text-primaryColor font-medium text-base mt-2">4.6(35 reviews)</p>
                </div>

                <div className="border-b w-[384px] h-[83px] p-4 flex justify-center flex-col">
                    {
                        <div className="flex space-x-1">
                            {
                                Array.from({ length: 5 }, (e, idx) => {
                                    return <Star key={idx} />
                                })
                            }
                        </div>
                    }
                    <p className="text-primaryColor font-medium text-base mt-2">4.6(35 reviews)</p>
                </div>
            </div>
            {/* Rating & Review end */}

            {/* 3--- Location start */}
            <div className="flex gap-6">
                <div className="border-b w-[384px] h-[83px] flex items-center p-4">
                    <h5 className='text-[#333] text-base font-bold leading-[150%]'>
                        Location
                    </h5>
                </div>

                <div className="border-b w-[384px] h-[83px] p-4 flex items-center">
                    <CardDescription className="font-medium text-[16px] text-primaryColor opacity-40 flex items-center gap-2">
                        <Flag />

                        New York,USA
                    </CardDescription>
                </div>

                <div className="border-b w-[384px] h-[83px] p-4 flex items-center">
                    <CardDescription className="font-medium text-[16px] text-primaryColor opacity-40 flex items-center gap-2">
                        <Flag />

                        New York,USA
                    </CardDescription>
                </div>
            </div>
            {/* Location end */}

            {/* 4--- Meeting Format start  */}
            <div className="flex gap-6">
                <div className="border-b w-[384px] h-[83px] flex items-center p-4 ">
                    <h5 className='text-[#333] text-base font-bold leading-[150%]'>
                        Meeting Format
                    </h5>
                </div>

                <div className="border-b w-[384px] h-[83px] p-4 flex items-center">
                    <h5 className='text-xs text-black/50 flex items-center gap-1 capitalize font-medium'><Contact /> In Parsonal</h5>
                </div>

                <div className="border-b w-[384px] h-[83px] p-4 flex items-center">
                    <h5 className='text-xs text-black/50 flex items-center gap-1 capitalize font-medium'><Contact /> In Parsonal</h5>
                </div>
            </div>
            {/* Meeting Format end  */}


            {/* 5--- Tag start  */}
            <div className="flex gap-6">
                <div className="border-b w-[384px] h-[108px] flex items-center p-4 ">
                    <h5 className='text-[#333] text-base font-bold leading-[150%]'>
                        Tag
                    </h5>
                </div>

                <div className="border-b w-[384px] h-[108px] p-4 flex items-center">
                    <CardContent className="grid grid-cols-3 gap-x-2 gap-y-1 p-0 w-full">
                        <Button
                            className="!bg-[#F5F5F5] font-normal text-[12px] !text-[#333] !px-0 !rounded-[43px]">
                            Communication
                        </Button>
                        <Button className="!bg-[#F5F5F5] font-normal text-[12px] !text-[#333] !px-0 !rounded-[43px]">
                            Influence
                        </Button>
                        <Button className="!bg-[#F5F5F5] font-normal text-[12px] !text-[#333] !px-0 !rounded-[43px]">
                            Strategic Thinking
                        </Button>
                        <Button className="!bg-[#F5F5F5] font-normal text-[12px] !text-[#333] !px-0  !rounded-[43px]">
                            Strategic Thinking
                        </Button>

                    </CardContent>
                </div>

                <div className="border-b w-[384px] h-[108px] p-4 flex items-center">
                    <CardContent className="grid grid-cols-3 gap-x-2 gap-y-1 p-0 w-full">
                        <Button
                            className="!bg-[#F5F5F5] font-normal text-[12px] !text-[#333] !px-0 !rounded-[43px]">
                            Communication
                        </Button>
                        <Button className="!bg-[#F5F5F5] font-normal text-[12px] !text-[#333] !px-0 !rounded-[43px]">
                            Influence
                        </Button>
                        <Button className="!bg-[#F5F5F5] font-normal text-[12px] !text-[#333] !px-0 !rounded-[43px]">
                            Strategic Thinking
                        </Button>
                        <Button className="!bg-[#F5F5F5] font-normal text-[12px] !text-[#333] !px-0  !rounded-[43px]">
                            Strategic Thinking
                        </Button>

                    </CardContent>
                </div>
            </div>
            {/* Tag end  */}

        </div>
    )
}

export default CompareList