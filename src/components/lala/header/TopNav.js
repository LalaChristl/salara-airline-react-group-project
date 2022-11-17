import React from "react";
import {SlBubbles} from 'react-icons/sl'
import {BiSearch} from 'react-icons/bi'
import {GiEarthAmerica} from 'react-icons/gi'
import {AiOutlineMore} from 'react-icons/ai'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

const TopNav = () => {
  return <div className="bg-[#2B3947] h-[30px] flex justify-end">
    <ul className="flex items-center flex-row gap-3 text-[#C3CBD7] text-[11px] self-center p-3">
      <li className="hover:text-[#6FB2A4]">Corporate Club</li>
      <AiOutlineMore/>
      <li className="hover:text-[#6FB2A4]">Miles & Smiles</li>
      <AiOutlineMore/>
      <li className="flex items-center gap-2">
        <SlBubbles/>
        <p className="hover:text-[#6FB2A4]">Feedback</p></li>
        <AiOutlineMore/>
      <li className="flex items-center gap-2">
        <BiSearch style={{color:'white'}}/>
        <p className="hover:text-[#6FB2A4]">Search</p></li>
        <AiOutlineMore/>
      <li className="flex items-center gap-2"><GiEarthAmerica/><p className="hover:text-[#6FB2A4]">EN - DE</p>
      <MdOutlineKeyboardArrowDown/></li>
    </ul>
  </div>;
};

export default TopNav;
