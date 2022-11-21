import React from "react";
import { RiShoppingBagFill } from "react-icons/ri";
import { MdLuggage } from "react-icons/md";
import { MdRoomService } from "react-icons/md";
import { GiAirplaneDeparture } from "react-icons/gi";
import { TbCurrencyEuro } from "react-icons/tb";
import { HiStar } from "react-icons/hi";
import { GoStar } from "react-icons/go";
import { IoMdInformationCircle } from "react-icons/io";

const SelectFlightCard = () => {
  return (
    <div className="business-class-card flex justify-center">
      <div className="card-container w-[303.33px] h-[453.39px]">
        <div className="card-header bg-[#F3E5E0] border-l-4 border-[#BE745B] flex">
          <p className="text-[#BE745B]">Business Semi-Flexible</p>
          <div className="class-detail">K-K class</div>
          <div className="price">
            <span>EUR</span>
            <span>1.908</span>
            <span>,44</span>
          </div>
        </div>
        <div className="card-content">
          <ul className="flex flex-col">
            <li className="flex gap-2 items-center border border-gray-300 h-[37px] text-[12px]">
              <RiShoppingBagFill />
              <p>2 pieces X 8 kg cabin baggage</p>
            </li>
            <li className="flex gap-2 items-center border border-gray-300 h-[37px] text-[12px]">
              <MdRoomService />
              <p>Meal service</p>
            </li>
            <li className="flex gap-2 items-center border border-gray-300 h-[37px] text-[12px]">
              <MdLuggage />
              <p>2 pieces x 32 kg baggage allowance</p>
            </li>
            <li className="flex gap-2 items-center border border-gray-300 h-[37px] text-[12px]">
              <GiAirplaneDeparture />
              <p>Change with fee</p>
            </li>
            <li className="flex gap-2 items-center border border-gray-300 h-[37px] text-[12px]">
              <TbCurrencyEuro />
              <p>Refund with deduction</p>
            </li>
            <li className="flex gap-2 items-center border border-gray-300 h-[37px] text-[12px]">
              <HiStar />
              <p>Lounge use (If available)</p>
            </li>
            <li className="flex gap-2 items-center border border-gray-300 h-[37px] text-[12px]">
              <GoStar />
              Priority check-in
            </li>
            <li className="flex gap-2 items-center border border-gray-300 h-[37px] text-[12px]">
              <GoStar />
              <p>Priority boarding</p>
            </li>
            <li className="flex gap-2 items-center border border-gray-300 h-[37px] text-[12px]">
              <GoStar />
              <p>Fast Track (If available)</p>
              <IoMdInformationCircle />
            </li>
            <li className="h-[17px] border border-gray-300"></li>
          </ul>
        </div>
        <div className="card-footer bg-[#F3E5E0] flex  justify-center">
          <button className="h-[39px] text-[#BE745B] flex items-center">
            Select this flight
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectFlightCard;
