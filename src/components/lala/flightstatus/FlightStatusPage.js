import React from "react";
import Header from "../header/Header";
import Line from "../../images/flightline.png";
import GreenLine from "../../images/flightlinegreen2.png";

const FlightStatusPage = () => {
  return (
    <div>
      <Header />
      <div className="flight-status-container w-[1024px]">
        <div className="fs-top  h-[178px] p-2">
          <div className="flex justify-between">
            <p className="text-[16px] font-bold">Flight number and route</p>
            <p className="text-[16px] text-[#647286] font-bold">
              Flight status
            </p>
          </div>
          <div className=" flex justify-between mt-[1.5rem]">
            <p className=" w-[768px] text-[36px] font-thin ">
              TK1661 | Istanbul to Hamburg Monday, November 21
            </p>
            <p className="text-[20px] text-[#53C172] font-bold">Landed</p>
          </div>
        </div>

        <div className="fs-middle w-[1024px] h-[42px] flex items-center bg-[#F5F5F5] border border-[#E6E6E6]">
          <div className="ml-[85px]">
            <p className="text-[14px] font-normal text-[#808080]">
              Scheduled for 09:10
            </p>
          </div>
          <div>
            <img src={Line} alt="" />
          </div>
          <div>
            <p className="text-[14px] font-normal  text-[#808080]">
              Scheduled for 10:35
            </p>
          </div>
        </div>
        <div className="fs-bottom h-[109px] border border-[#E6E6E6] flex items-center gap-3 ">
          <div className="mt-4">
            <p className="text-[14px] font-normal ml-[130px] leading-3">
              Actual: 09:19
            </p>
            <p className="text-[12px] text-[#C8C8C8] flex justify-end">
              Istanbul (IST)
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img className="z-5" src={GreenLine} alt="" />
            <div className="h-[44px] w-[157px] bg-[#CCFFCC] flex justify-center">
              <p className="text-[14px] font-normal">3h 22m</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-[14px] font-normal leading-3">Actual: 10:41</p>
            <p className="text-[12px] text-[#C8C8C8]">Hamburg (HAM)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightStatusPage;
