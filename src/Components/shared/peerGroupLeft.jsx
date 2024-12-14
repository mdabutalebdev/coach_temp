import React from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "../ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "../ui/label";
import Button from "./button";
import Image from "next/image";
import Personal from "../../assets/personal.svg";
import Virtual from "../../assets/virtual.svg";
import Hybrid from "../../assets/hybrid.svg";
import  Membership from "../../assets/membership.svg";


const PeerGroupLeft = () => {
  const area = ["HNW", "Ecommerce", "Startups", "Ecommerce", "Leadership"];
  const loceation = [
    "United States",
    "United Kingdom",
    "Canada",
    "Germany",
    "Netherlands",
  ];
  return (
    <div className="">
      {/* 1st checkbox */}
      <div className="relative">
        <h3 className="font-medium text-base text-primaryColor">Focus Area</h3>
        <Input
          placeholder="Search for Skills"
          className="py-3 focus-visible:ring-0 bg-BgColor"
        />
        <CiSearch className="h-[22px] w-[22px] absolute top-8 right-6 cursor-pointer text-primaryColor" />

        <div className="">
          {area.map((el, idx) => {
            return (
              <div className="my-4" key={idx} value={el}>
                <Checkbox className="!h-5 !w-5 data-[state=checked]:bg-[#3789FF] border-[#9DA6BA]" />
                <Label
                  htmlFor="terms"
                  className="text-base font-medium  text-[#637381] pl-4"
                >
                  {el}
                </Label>
              </div>
            );
          })}
        </div>

        <h3 className="text-base font-medium  text-[#637381]">See more</h3>
      </div>
      {/* 1st checkbox end */}
      <div className="relative mt-3">
        <h3 className="font-medium text-base text-primaryColor">Location</h3>
        <Input
          placeholder="Search for Skills"
          className="py-3 focus-visible:ring-0 bg-BgColor"
        />
        <CiSearch className="h-[22px] w-[22px] absolute top-8 right-6 cursor-pointer text-primaryColor" />

        <div className="">
          {loceation.map((el, idx) => {
            return (
              <div className="my-4" key={idx} value={el}>
                <Checkbox className="h-5 w-5 data-[state=checked]:bg-[#3789FF] border-[#9DA6BA]" />
                <Label
                  htmlFor="terms"
                  className="text-base font-medium  text-[#637381] pl-4"
                >
                  {el}
                </Label>
              </div>
            );
          })}
        </div>
        <h3 className="text-base font-medium  text-[#637381]">See more</h3>
      </div>

      {/* ======================== */}
      <div className="flex flex-wrap gap-x-2 mt-4">
        <div className="relative">
          <Button className="!text-primaryColor border !border-[#E8E8E8] !bg-transparent !px-7 !rounded-[26px]">
            In Personal
          </Button>
          <Image
            src={Personal}
            alt="Personal"
            className="absolute top-[13px] left-2"
          />
        </div>
        {/* -------------- */}
        <div className="relative">
          <Button className="!text-primaryColor border !border-[#E8E8E8] !bg-transparent !px-7 !rounded-[26px]">
            Virtual
          </Button>
          <Image
            src={Virtual}
            alt="Virtual"
            className="absolute top-[13px] left-1"
          />
        </div>
        {/* --------------- */}

        <div className="relative">
          <Button className="!text-primaryColor border !border-[#E8E8E8] !bg-transparent mt-2 !px-10 !rounded-[26px]">
            Hybrid
          </Button>
          <Image
            src={Hybrid}
            alt="Hybrid"
            className="absolute top-5 left-4"
          />
        </div>
      </div>
      {/* ===========================? */}
      {/* price rance */}
      <div className="mt-6">
          <h3 className="font-medium text-base text-primaryColor">Price Range</h3>
          <div className="relative mt-4">
          <Button className="!bg-HighlightColor !text-BtnColor !px-16">
          Membership fees
          </Button>
          <Image 
          
          src={Membership}
          alt="Membership"
          className="absolute top-3 right-5"
          />
          </div>
      </div>
      {/* price rance end */}
      
    </div>
  );
};

export default PeerGroupLeft;
