import React from "react";
import { RiShoppingBagFill } from "react-icons/ri";
import { MdLuggage } from "react-icons/md";
import { MdRoomService } from "react-icons/md";
import { BiCircle } from "react-icons/bi";
import { HiStar } from "react-icons/hi";
import { GoStar } from "react-icons/go";
import { IoMdInformationCircle } from "react-icons/io";
import business from "../../images/business.png";
import { useNavigate } from "react-router-dom";

const BusinessCardContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="business-class-card flex justify-center gap-3">
      {/* BusinessFly */}
      <div className=" hover: border-[#2173E2] hover:border-2 hover:cursor-pointer  h-[564px] ">
        <div className="card-header bg-[#F3E5E0] border-l-4 h-[65px] px-[10px] border-[#BE745B] flex justify-between items-center w-[303.33px]">
          <div>
            <p className="text-[#BE745B] mb-[8px] font-[700]">BusinessPrime</p>
            <div className="class-detail text-[11px] font-[700]">Z class</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="price font-[700]">
              <sup className="pr-[6px] text-[13.2px]">EUR</sup>
              <span className="text-[24px]">585</span>
              <sup className="text-[13.2px]">,48</sup>
            </div>
          </div>
        </div>
        <div className="card-content h-[456px] border border-gray-300 w-[303.33px]">
          <ul className="flex flex-col w-full font-[500]">
            <li className="flex gap-2 items-center  w-full px-[12px] border-gray-300 h-[37px] text-[12px]">
              <RiShoppingBagFill />
              <p>2 pieces X 8 kg cabin baggage</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <MdRoomService />
              <p>Meal service</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <MdLuggage />
              <p>30 kg baggage allowance</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <img
                className="pl-[2px]"
                src="https://www.turkishairlines.com/theme/img/icons/brand_right_seat_selection.svg"
                alt=""
              />
              <p>Standard seat selection</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <img
                className="pl-[2px]"
                src="https://www.turkishairlines.com/theme/img/icons/brand_right_reissue.svg"
                alt=""
              />
              <p>Change with fee</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <BiCircle />
              <p className="text-gray-400">Refund right</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <HiStar />
              <p>Lounge use (If available)</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <GoStar />
              <p>Fast Track (If available)</p>
              <IoMdInformationCircle />
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <GoStar />
              Priority check-in
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <GoStar />
              <p>Priority boarding</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]"></li>
          </ul>
        </div>
        <div
          onClick={() => navigate("/selectflight")}
          className="card-footer w-[303.33px]  bg-[#F3E5E0] flex  justify-center  hover:text-white  hover:bg-[#C5724E] text-[#BE745B] cursor-pointer "
        >
          <p className="h-[39px]  text-[14px]font-[500]  flex items-center">
            Select this flight
          </p>
        </div>
      </div>

      {/* BusinessPrime */}

      <div className=" hover: border-[#2173E2] hover:border-2 hover:cursor-pointer  h-[564px] ">
        <div className="card-header bg-[#F3E5E0] border-l-4 h-[65px] px-[10px] border-[#BE745B] flex justify-between items-center w-[303.33px]">
          <div>
            <p className="text-[#BE745B] mb-[8px] font-[700]">BusinessPrime</p>
            <div className="class-detail text-[11px] font-[700]">Z class</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="price font-[700]">
              <sup className="pr-[6px] text-[13.2px]">EUR</sup>
              <span className="text-[24px]">635</span>
              <sup className="text-[13.2px]">,48</sup>
            </div>
          </div>
        </div>
        <div className="card-content h-[456px] border border-gray-300 w-[303.33px]">
          <ul className="flex flex-col w-full font-[500]">
            <li className="flex gap-2 items-center  w-full px-[12px] border-gray-300 h-[37px] text-[12px]">
              <RiShoppingBagFill />
              <p>2 pieces X 8 kg cabin baggage</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <MdRoomService />
              <p>Meal service</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <MdLuggage />
              <p>40 kg baggage allowance</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <img
                className="pl-[2px]"
                src="https://www.turkishairlines.com/theme/img/icons/brand_right_seat_selection.svg"
                alt=""
              />
              <p>Standard seat selection</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <img
                className="pl-[2px]"
                src="https://www.turkishairlines.com/theme/img/icons/brand_right_reissue.svg"
                alt=""
              />
              <p>Change without penalty</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <img
                className="pl-[2px]"
                src="https://www.turkishairlines.com/theme/img/icons/brand_right_refund.svg"
                alt=""
              />

              <p>Full refund(Up to 12 hours)</p>
              <BiCircle />
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <HiStar />
              <p>Lounge use (If available)</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <GoStar />
              <p>Fast Track (If available)</p>
              <IoMdInformationCircle />
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <GoStar />
              Priority check-in
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <GoStar />
              <p>Priority boarding</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px]  border-gray-300 h-[37px] text-[12px]">
              <GoStar />
              <p>Change to an earlier flight on the same day</p>
              <IoMdInformationCircle />
            </li>
            <li className="flex gap-2 items-center border-t border-b px-[12px] border-gray-300 h-[37px] text-[12px]">
              <img
                className="pl-[2px]"
                src="https://www.turkishairlines.com/theme/img/icons/brand_right_bonus_mile.svg"
                alt=""
              />

              <p>%50 Extra Miles</p>
            </li>

            {/* <li className="h-[17px] border border-gray-300"></li> */}
          </ul>
        </div>
        <div
          onClick={() => navigate("/selectflight")}
          className="card-footer w-[303.33px]   flex  justify-center text-white  bg-[#C5724E] text-[#BE745B] cursor-pointer "
        >
          <p className="h-[39px]  text-[14px]font-[500]  flex items-center">
            Select this flight
          </p>
        </div>
      </div>

      {/* Image Container */}

      <div>
        <img
          style={{ width: "303.33px" }}
          className=" h-[560px]"
          src={business}
          alt=""
        />
      </div>
    </div>
  );
};

export default BusinessCardContainer;
