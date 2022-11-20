import React from "react";

const FlightCard = () => {
  return (
    <div className="text-[14px] flex items-center">
      <div className=" flex items-center w-[498.41px] h-[105px] px-[10px] py-[20px]">
        <div className="w-[277.44px] px-[10px]">Dates</div>
        <div className="w-[97.48px] pr-[5px]">Duration</div>
        <div className="w-[103.48px] pt-[12px] pl-[10px]">Iternary details</div>
      </div>
      <div className="w-[220.8px] h-[105px] ml-[10px] px-[10px] py-[15px] flex items-center justify-between">
        <div>Economy Price</div>
        <div>Icon</div>
      </div>
      <div className="w-[220.8px] h-[105px] ml-[10px] px-[10px] py-[15px] flex items-center justify-between">
        <div>Business Price</div>
        <div>Icon</div>
      </div>
    </div>
  );
};

export default FlightCard;
