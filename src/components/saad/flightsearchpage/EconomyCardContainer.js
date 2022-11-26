import React, { useContext } from "react";
import { RiShoppingBagFill } from "react-icons/ri";
import { MdLuggage } from "react-icons/md";
import { MdRoomService } from "react-icons/md";

import { IoMdCloseCircle } from "react-icons/io";

import { GoStar } from "react-icons/go";
import { IoMdInformationCircle } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const EconomyCardContainer = ({ item }) => {
  const { state, dispatch } = useContext(Context);

  const navigate = useNavigate();
  return (
    <div className="business-class-card flex justify-center gap-2">
      {/* EcoFly */}
      <div className=" hover: border-[#2173E2] hover:border-2 hover:cursor-pointer  h-[453px] ">
        <div className="card-header bg-[#F4F5F8] border-l-[5px] h-[65px] px-[10px] border-[#5199DB] flex justify-between items-center w-[303.33px]">
          <div>
            <p className="text-[#232B38] mb-[8px] font-[700]">EcoFly</p>
            <div className="class-detail text-[11px] font-[700]">T class</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="price font-[700]">
              <sup className="pr-[6px] text-[13.2px]">EUR</sup>
              <span className="text-[24px]">199</span>
              <sup className="text-[13.2px]">,48</sup>
            </div>
          </div>
        </div>
        <div className="card-content h-[345px] border border-gray-300 w-[303.33px]">
          <ul className="flex flex-col w-full font-[500]">
            <li className="flex gap-2 items-center  w-full px-[12px] border-gray-300 h-[37px] text-[12px]">
              <RiShoppingBagFill />
              <p>1 piece X 8 kg cabin baggage</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <MdRoomService />
              <p>Meal service</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <IoMdCloseCircle className="text-gray-400" />
              <p className="text-gray-400">Baggage allowance</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px] ">
              <IoMdCloseCircle className="text-gray-400" />
              <p className="text-gray-400">Standard seat selection</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <IoMdCloseCircle className="text-gray-400" />
              <p className="text-gray-400">Change right</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <IoMdCloseCircle className="text-gray-400" />
              <p className="text-gray-400">Refund right</p>
            </li>

            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]"></li>
          </ul>
        </div>
        <div
          onClick={() => {
            dispatch({ type: "selectedflightobject", payload: item });
            navigate("/selectflight");
          }}
          className="card-footer w-[303.33px]  bg-[#E81932] flex  justify-center  hover:text-white  hover:bg-[#93272c] text-white cursor-pointer "
        >
          <p className="h-[39px]  text-[14px] font-[500]  flex items-center">
            Select this flight
          </p>
        </div>
      </div>

      {/* ExtraFly */}

      <div className="  border-[#2173E2] border-[2px]  hover:cursor-pointer  h-[453px] ">
        <div className="card-header bg-[#F4F5F8] border-l-[5px] h-[65px] px-[10px] border-[#245E94] flex justify-between  w-[303.33px]">
          <div className="flex flex-col justify-center">
            <p className="text-[#232B38] mb-[8px] font-[700]">ExtraFly</p>
            <div className="class-detail text-[11px] font-[700]">T class</div>
          </div>
          <div className="flex flex-col  justify-start mt-[3px] items-end">
            <div className="bg-[#F7C556] text-[9px] px-[10px] py-[1px] font-[600] rounded-full">
              <p>Recommended</p>
            </div>
            <div className="price font-[700]">
              <sup className="pr-[6px] text-[13.2px]">EUR</sup>
              <span className="text-[24px]">214</span>
              <sup className="text-[13.2px]">,48</sup>
            </div>
          </div>
        </div>
        <div className="card-content h-[345px] border border-gray-300 w-[303.33px]">
          <ul className="flex flex-col w-full font-[500]">
            <li className="flex gap-2 items-center  w-full px-[12px] border-gray-300 h-[37px] text-[12px]">
              <RiShoppingBagFill />
              <p>1 piece X 8 kg cabin baggage</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <MdRoomService />
              <p>Meal service</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <MdLuggage />
              <p>23 kg baggage allowance</p>
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
              <IoMdCloseCircle className="text-gray-400" />
              <p className="text-gray-400">Refund right</p>
            </li>

            <li className="flex gap-2 items-center border-t border-b px-[12px] border-gray-300 h-[37px] text-[12px]">
              <img
                className="pl-[2px]"
                src="https://www.turkishairlines.com/theme/img/icons/brand_right_bonus_mile.svg"
                alt=""
              />

              <p>%25 Extra Miles</p>
            </li>

            {/* <li className="h-[17px] border border-gray-300"></li> */}
          </ul>
        </div>
        <div
          onClick={() => {
            dispatch({ type: "selectedflightobject", payload: item });
            navigate("/selectflight");
          }}
          className="card-footer w-[303.33px]  bg-[#E81932] flex  justify-center  hover:text-white  hover:bg-[#93272c] text-white cursor-pointer "
        >
          <p className="h-[39px]  text-[14px] font-[500]  flex items-center">
            Select this flight
          </p>
        </div>
      </div>

      {/* PrimeFly */}

      <div className=" hover: border-[#2173E2] hover:border-2 hover:cursor-pointer  h-[453px] ">
        <div className="card-header bg-[#F4F5F8] border-l-[5px] h-[65px] px-[10px] border-[#245E94] flex justify-between items-center w-[303.33px]">
          <div>
            <p className="text-[#232B38] mb-[8px] font-[700]">PrimeFly</p>
            <div className="class-detail text-[11px] font-[700]">T class</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="price font-[700]">
              <sup className="pr-[6px] text-[13.2px]">EUR</sup>
              <span className="text-[24px]">244</span>
              <sup className="text-[13.2px]">,48</sup>
            </div>
          </div>
        </div>
        <div className="card-content h-[345px] border border-gray-300 w-[303.33px]">
          <ul className="flex flex-col w-full font-[500]">
            <li className="flex gap-2 items-center  w-full px-[12px] border-gray-300 h-[37px] text-[12px]">
              <RiShoppingBagFill />
              <p>1 piece X 8 kg cabin baggage</p>
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
              <p>Change without penalty</p>
            </li>
            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <img
                className="pl-[2px]"
                src="https://www.turkishairlines.com/theme/img/icons/brand_right_refund.svg"
                alt=""
              />

              <p>Refund with deduction</p>
            </li>

            <li className="flex gap-2 items-center border-t px-[12px] border-gray-300 h-[37px] text-[12px]">
              <GoStar />
              <p>Fast Track (If available)</p>
              <IoMdInformationCircle />
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
          onClick={() => {
            dispatch({ type: "selectedflightobject", payload: item });
            navigate("/selectflight");
          }}
          className="card-footer w-[303.33px]  bg-[#E81932] flex  justify-center  hover:text-white  hover:bg-[#93272c] text-white cursor-pointer "
        >
          <p className="h-[39px]  text-[14px] font-[500]  flex items-center">
            Select this flight
          </p>
        </div>
      </div>
    </div>
  );
};

export default EconomyCardContainer;
