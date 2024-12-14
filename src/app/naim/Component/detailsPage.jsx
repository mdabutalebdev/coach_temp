import Image from 'next/image'
import React from 'react'
import group_profile from '../../../assets/group_profile.png'
import {
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Compare, Contact, Flag, Play, Save, Share, Watch } from '../icons';
import { Star } from '../icons';
import Button from '@/Components/shared/button';
import { Plus } from 'lucide-react';
import SectionTitle from './sectionTitle';
import ReviewPeer from './reviewPeer';
import { Input } from '@/Components/ui/input';
import postera from '../../../assets/poster.jpg'

const DetailsPage = () => {

    return (
        <div className='w-[1200px] mx-auto mt-[88px] flex justify-between'>

            <div className="w-[792px] p-4">

                <div className="flex justify-between gap-6 border-b pb-4 mb-5">
                    <Image className='w-[80px] h-[80px] object-cover' src={group_profile} alt={group_profile} />

                    <div className="flex flex-col space-y-3">
                        <h1 className="text-[#333] text-[32px] font-extrabold leading-[48px]">
                            Infrastructure Development Company Limited (IDCOL)
                        </h1>

                        <CardDescription className="font-medium text-[16px] text-primaryColor opacity-40 flex items-center gap-2">
                            <Flag />

                            New York,USA
                        </CardDescription>

                        <div className="flex space-x-2">
                            <div className=" space-x-[5px] flex">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>

                            <p className="text-primaryColor font-medium text-base">4.6(35 reviews)</p>
                        </div>

                        {/*  btn start */}
                        <CardContent className="flex gap-x-2 p-0">
                            <Button
                                className="!bg-[#F5F5F5] font-normal text-[12px] !text-[#333] h-[36px] !rounded-[43px]">
                                Communication
                            </Button>
                            <Button className="!bg-[#F5F5F5] font-normal text-[12px] !text-[#333] h-[36px] !rounded-[43px]">
                                Influence
                            </Button>
                            <Button className="!bg-[#F5F5F5] font-normal text-[12px] !text-[#333] !px-2 h-[36px] !rounded-[43px]">
                                Strategic Thinking
                            </Button>
                            <Button className="!bg-[#F5F5F5] font-normal text-[12px] !text-[#333] !px-2  h-[36px] !rounded-[43px]">
                                Strategic Thinking
                            </Button>

                        </CardContent>
                        {/* btn end */}

                    </div>
                </div>

                {/*  btn start */}
                <CardContent className="flex gap-x-2 p-0">
                    <Button
                        className="!bg-transparent border font-BOLD text-[16px] !text-[#333] hover:!text-[#FFF] hover:!bg-BtnColor !rounded-[8px] flex items-center gap-2 group">
                        <Star className={"fill-[#6E6E6E] group-hover:!fill-white"} />
                        Write a Review
                    </Button>
                    <Button className="!bg-transparent border font-BOLD text-[16px] !text-[#333] hover:!text-[#FFF] hover:!bg-BtnColor !rounded-[8px] flex items-center gap-2 group">
                        <Share className={"fill-[#6E6E6E] group-hover:!fill-white"} />
                        Share
                    </Button>
                    <Button className="!bg-transparent border font-BOLD text-[16px] !text-[#333] hover:!text-[#FFF] hover:!bg-BtnColor !px-2 !rounded-[8px] flex items-center gap-2 group">
                        <Plus className='text-[#6E6E6E] group-hover:!text-white' />
                        Follow
                    </Button>
                    <Button className="!bg-transparent border font-BOLD text-[16px] !text-[#333] hover:!text-[#FFF] hover:!bg-BtnColor !px-2  !rounded-[8px] flex items-center gap-2 group">
                        <Save className={"fill-none group-hover:!fill-white group-hover:!stroke-white"} />
                        Strategic Thinking
                    </Button>

                </CardContent>
                {/* btn end */}

                <div className='my-5'>
                    <SectionTitle text={`About`} />

                    <p className="text-[rgba(13,13,14,0.40)] text-xs my-5 font-medium leading-[18px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <p className="text-[rgba(13,13,14,0.40)] text-xs font-medium leading-[18px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <ReviewPeer />

                <div className="p-6 rounded-[12px] border">
                    <h3 className="text-[#333] font-lato text-2xl font-medium leading-[38.4px]">
                        Write a Review
                    </h3>

                    <div className="flex gap-6 mt-[16px]">
                        <Input placeholder="Enter your name" className="text-[14px] leading-[20px]" />
                        <Input placeholder="Enter your mail" className="text-[14px] leading-[20px]" />
                    </div>

                    <h4 className="text-[#51525B] font-lato text-base font-medium leading-[160%] mt-[16px]">
                        Rating
                    </h4>

                    <div className="flex gap-[6px] mt-2">
                        {
                            Array.from({ length: 5 }, (e, idx) => {
                                return <Star key={idx} />
                            })
                        }
                    </div>

                    <textarea placeholder='Write your comments' className=' resize-none w-full h-[300px] outline-none border rounded-[6px] text-[#51525B] text-base leading-[160%] p-[10px] mt-6'></textarea>

                    <Button className='mt-6'>
                        Submit Review
                    </Button>

                </div>

            </div>

            <div className="w-[384px] p-6 border rounded-[8px] h-full">
                <div className="border w-full h-[209px] overflow-hidden rounded-[8px] relative">
                    <video autoPlay poster={postera.src} src='https://www.facebook.com/share/v/15TFBgdsWT/' className='h-full w-full'>
                    </video>
                    <Play className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'} />
                    <h3 className="text-white text-lg font-semibold leading-6 absolute bottom-[10px] left-1/2 -translate-x-1/2">
                        Review Peer Group
                    </h3>
                </div>

                <div className="flex flex-col space-y-3 mt-6 py-3">
                    <h3 className="text-primary font-lato text-2xl font-bold leading-7">
                        Meeting Format
                    </h3>

                    <div className="flex gap-6">
                        <h5 className='text-xs text-black/50 flex items-center gap-1 capitalize font-medium'><Contact /> In Parsonal</h5>
                        <h5 className='text-xs text-black/50 flex items-center gap-1 capitalize font-medium'><Watch /> 1 Hour</h5>
                    </div>

                    <h1 className="text-primary font-lato text-4xl font-extrabold leading-[44.8px]">
                        $250
                        <span className='text-black/50 text-[20px] font-normal'>/Hour</span>
                    </h1>

                    <Button className='py-3'>
                        Apply Now
                    </Button>

                    <Button className='py-3 !w-full !text-[#6E6E6E] flex items-center gap-2 justify-center !font-medium !bg-transparent !border-2 !border-[#6E6E6E]'>
                        <Compare />  Add To Compare
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default DetailsPage