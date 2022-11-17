import React from "react";
import logo from '../../images/logo.png'

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
        <ul className="flex flex-row gap-3 text-[#FFFFFF] text-[15px] mr-5">
          <li>PLAN & BOOK</li>
          <li>FLY DIFFERENT</li>
          <li>DISCOVER</li>
          <li>Sign up</li>
        </ul>
        <button className="text-[#FFFFFF] border-solid border-2 border-white rounded-[20px] mr-5 p-2">SIGN IN</button>
      </div>
    </div>
  );
};

export default BottomNav;
