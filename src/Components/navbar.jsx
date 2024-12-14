import React from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Button from "./shared/button";
import { Input } from "./ui/input";
import CompareIcon from "./compareIcon";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="bg-white">
      <div className="container flex justify-between py-5 ">
        <div className="w-[72%] flex items-center justify-between">
         <Link href='/'> <Image src={Logo} alt="Logo" /></Link>

          <div className="relative w-[65%] ">
            <Input placeholder="Search" className="py-6 pl-14 w-full" />
            <CiSearch className="h-[22px] w-[22px] absolute top-[14px] left-6 cursor-pointer text-[#BDBDBD]" />
          </div>
        </div>
        <div className="w-[27%] flex items-center justify-betwee">
         <Link href='peer-group'>
         <Button className="mr-3 text-white">Browse All</Button>
         
         </Link>
          <Link href='compare'>
            <div className="h-12 w-12 bg-HighlightColor rounded-[12px] flex justify-center items-center">
              <CompareIcon />
            </div>
          </Link>
          <Button className="!bg-transparent !text-primaryColor">Login</Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
