import React from "react";
import Hero from '../../images/Hero.jpeg'

const ImageHeader = () => {
  return <div className="relative">
    <img className="h-[420px] w-full" src={Hero} alt="" />
    <div>
      <p className="absolute top-[5.5rem] left-[25rem] text-[24px] text-[#FFFFFF]">HELLO</p>
      <p className="absolute top-[7.5rem] left-[25rem] text-[38px] text-[#FFFFFF]">Where do you want to explore?</p>
    </div>
  </div>;
};

export default ImageHeader;
