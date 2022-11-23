import React from "react";
import logo from "../../images/logo.png";
import { AiOutlineMore } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="bg-[#232B38] h-[60.14px] flex items-center justify-between">
      <div className="ml-4 flex items-center gap-5">
        <div>
          <img className="h-[35px]" src={logo} alt="" />
        </div>
        <h4 className="text-[#FFFFFF] text-[25px]">SALARA AIRLINES</h4>
      </div>
      <div className="flex items-center">
        <ul className="flex flex-row gap-3 items-center text-[#FFFFFF] text-[15px] mr-5">
          <li className="text-[14px] h-[60px] w-[118.92px] hover:bg-black flex items-center justify-center hover:border-b-4 border-orange-700">
            PLAN & BOOK
          </li>
          <AiOutlineMore />
          <li className="text-[14px]">FLY DIFFERENT</li>
          <AiOutlineMore />
          <li className="text-[14px]">DISCOVER</li>
          <AiOutlineMore />
          <li className="text-[14px]">Sign up</li>
        </ul>
        <button className="text-[#FFFFFF] text-[12px] hover:bg-[#444B56] border-solid border-[1px] border-white rounded-[20px] mr-5 py-2 px-3 flex items-center gap-2">
          <p>SIGN IN</p>
          <FaUserAlt />
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
