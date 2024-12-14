import React from 'react'
import { Input } from "@/components/ui/input"
import Button from './shared/button'
import { IoMail } from "react-icons/io5";

const Subscribe = () => {
  return (
     <section className='py-36'>
               <div className="container mb-14">
                   <h3 className='font-extrabold text-[48px] text-primaryColor text-center'>Subscribe to our newsletter</h3>
                   <p className='font-normal text-base text-[#080316] opacity-40 text-center pt-4'>Get notification about tips, new product and exclusive promo news just for you.</p>
               </div>
               <div className="flex justify-between w-[482px] mx-auto bg-white shadow-lg rounded-xl py-3 relative px-3">
               <IoMail className='text-[#194C80] w-5 h-[17px] absolute top-7 left-8'/>
                 <Input type="email" id="email" placeholder="Enter your email address" className="py-4 w-[215px] ml-10 mt-[5px] outline-none bg-transparent shadow-none  border-none focus-visible:ring-0"/>
                 <Button className='!bg-black !py-3'>
                 Subscribe
                 </Button>
               </div>
     </section>
  )
}

export default Subscribe