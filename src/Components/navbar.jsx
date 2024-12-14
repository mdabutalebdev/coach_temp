import React from 'react'
import { CiSearch } from "react-icons/ci";
import Image from 'next/image'
import Logo from "../assets/logo.png"
import Button from './shared/button'
import { Input } from './ui/input';


const Navbar = () => {
  return (
    <section className='bg-white'>
      <div className="container flex justify-between py-5">
        <div className="w-[25%]">
          <Image
            src={Logo}
            alt='Logo'


          />
        </div>
        <div className="w-[558px] ">
          <div className="relative">
            <Input placeholder="Search" className="py-6 pl-14" />
            <CiSearch className='h-[22px] w-[22px] absolute top-[14px] left-6 cursor-pointer text-[#BDBDBD]' />
          </div>

        </div>
        <div className="w-[25%]">
          <Button className='mr-3 text-white'>
            Browse All
          </Button>
          <Button className='!bg-transparent !text-primaryColor'>
            Login
          </Button>
        </div>
      </div>

    </section>
  )
}

export default Navbar