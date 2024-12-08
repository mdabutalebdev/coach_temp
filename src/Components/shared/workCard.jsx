import React from 'react';
import Image from 'next/image';

const WorkCard = ({ src, num, peragraph, h4text, showLine }) => {
  return (
    <div className="grid grid-cols-2 pt-16">
      <Image src={src} alt="alt" />
      <div className="">
        <div className="flex mt-24 gap-5 relative">
          <div className="h-8 w-8 rounded-full bg-BtnColor">
            <span className="flex justify-center pt-1 text-white font-bold text-base">{num}</span>
          </div>

          <h4 className="font-bold text-[24px] text-h4Color">{h4text}</h4>

          {/* Conditionally render the line */}
          {showLine && (
            <div className="h-[242px] w-[2px] bg-[#BFBFBF] absolute top-14 left-4"></div>
          )}
        </div>
        <p className="pl-12 pt-4">{peragraph}</p>
      </div>
    </div>
  );
};

export default WorkCard;
