"use client";

import React from "react";
import Button from "./shared/button";
import { SlArrowRight } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import H_s_one from "../assets/h_s_one.png";
import H_s_two from "../assets/h_s_two.png";
import H_s_three from "../assets/h_s_three.png";
import H_s_four from "../assets/h_s_four.png";
import H_s_five from "../assets/h_s_five.png";

import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <section className="bg-BgColor bg-headerBg bg-no-repeat bg-cover bg-center py-32">
      <div className="h-[44px] w-[433px] bg-white rounded-[70px] mx-auto">
        <div className="flex">
          <Button className="bg-[#222B60] !rounded-[60px] drop-shadow h-[44px]">
            Just Join!
          </Button>
          <p className="text-center pt-3 pl-3 text-[#0D0D0E] opacity-60">
            30 new Groups in this Month
          </p>
          <SlArrowRight className="ml-7 mt-4" />
        </div>
      </div>
      <div className="container">
        <h1 className="font-extrabold text-[71px]  text-primaryColor text-center">
          Discover The <span className="text-BtnColor">Perfect Peer Group</span>{" "}
          for your Professional Growth
        </h1>
        <p className="w-[777px] mx-auto text-center leading-[150%] font-medium text-base text-primaryColor">
          Ambitious professionals around the world utilize coaching to reach the
          next level of their Business skills. Tired of figuring out Business on
          your own?
        </p>
        <div className="flex gap-x-5 justify-center mt-10">
          <div className="relative">
            <Button className="!px-14 !py-3 text-left">Find Your Group</Button>
            <GoArrowRight className="absolute top-3 right-5 text-white h-7 w-6" />
          </div>
          <Button className="bg-transparent !text-primaryColor">
            Browse All
          </Button>
        </div>
      </div>

      <div className="mt-16 container">
        <Marquee className="">
          <Image src={H_s_one} alt="H_s_one" className="h-8" />
          <Image src={H_s_two} alt="H_s_two" className="h-10 ml-10" />
          <Image src={H_s_three} alt="H_s_three" className="h-10 ml-10" />
          <Image src={H_s_four} alt="H_s_four" className="h-10 ml-10" />
          <Image src={H_s_five} alt="H_s_five" className="h-10 ml-10" />
        </Marquee>
      </div>
    </section>
  );
};

export default Header;
