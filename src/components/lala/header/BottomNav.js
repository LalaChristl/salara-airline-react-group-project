import React from "react";
import logo from "../../images/logo.png";
import { AiOutlineMore } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#232B38] h-[60.14px] flex items-center justify-between">
      <div className="ml-4 flex items-center gap-1">
        <div
          onClick={() => navigate("/")}
          className="search-nav-logo cursor-pointer"
          style={{ padding: "13px 5px 12px 14px" }}
        >
          <img
            className="search-nav-img w-[35px] h-[35px]"
            src="https://www.turkishairlines.com/theme/img/logo-top-white-small-current.png"
            alt=""
          />
        </div>
        <h4 className="text-[#FFFFFF] text-[22px] font-[700]">
          SALARA AIRLINES
        </h4>
      </div>
      <div className="flex items-center">
        <ul className="flex flex-row gap-3 items-center text-[#FFFFFF] text-[15px] mr-5">
          <li className="text-[14px] h-[60px] w-[118.92px] hover:bg-black flex items-center justify-center hover:border-b-4 border-orange-700">
            PLAN & BOOK
          </li>
          <AiOutlineMore />
          <li className="text-[14px] h-[60px] w-[118.92px] hover:bg-black flex items-center justify-center hover:border-b-4 border-orange-700">
            FLY DIFFERENT
          </li>
          <AiOutlineMore />
          <li className="text-[14px] h-[60px] w-[118.92px] hover:bg-black flex items-center justify-center hover:border-b-4 border-orange-700">
            DISCOVER
          </li>
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
