import React from "react";
import arrow from "../../../images/aroow.svg";

const CheckIn = () => {
  return (
    <div>
      <div className="flex mt-[2.5rem] gap-3 text-[17px] font-[700]  h-[66px] items-center">
        <div className="w-[362.5px] rounded-[5px] flex items-center h-[66px] py-[6px] px-[20px] bg-[#F4F6F8]">
          <input
            type="text"
            placeholder="Ticket number or reservation code (PNR)"
            className="w-full "
            style={{
              letterSpacing: "-.5px",
              backgroundColor: "#F4F6F8",
              outline: "none",
            }}
          />
        </div>
        <div className="w-[362.5px] py-[6px] flex rounded-[5px] items-center  h-[66px] px-[20px] bg-[#F4F6F8]">
          <input
            type="text"
            placeholder="Passenger surname"
            style={{
              letterSpacing: "-.5px",
              backgroundColor: "#F4F6F8",
              outline: "none",
            }}
          />
        </div>
        <div className="bg-[#E81932] rounded-[5px] w-[138.98px] flex items-center justify-center h-[66px]">
          <img style={{ width: "30px", height: "30px" }} src={arrow} alt="" />
        </div>
      </div>
      <div className="flex justify-between text-[14px] font-[700] text-[#E81932] mt-[2.5rem]">
        <p className="hover:border-b-2 border-dotted hover:border-black cursor-pointer">
          What are reservation codes and ticket numbers?
        </p>
        <p className="hover:border-b-2 border-dotted hover:border-black cursor-pointer">
          Online/mobile check-in facilities at the airports
        </p>
      </div>
    </div>
  );
};

export default CheckIn;
