import React from "react";
import {SlBubbles} from 'react-icons/sl'
import {BiSearch} from 'react-icons/bi'
import {GiEarthAmerica} from 'react-icons/gi'

const TopNav = () => {
  return <div className="bg-[#2B3947] h-[30px] flex justify-end">
    <ul className="flex items-center flex-row gap-3 text-[#C3CBD7] text-[11px] self-center p-3">
      <li className="border-r-2 border-dotted">Corporate Club</li>
      <li className="border-r-2 border-dotted">Miles & Smiles</li>
      <li className="border-r-2 border-dotted flex items-center">
        <SlBubbles/>
        <p>Feedback</p></li>
      <li className="border-r-2 border-dotted flex items-center gap-2">
        <BiSearch style={{color:'white'}}/>
        <p>Search</p></li>
      <li className="flex items-center gap-2"><GiEarthAmerica/><p>Language</p></li>
    </ul>
  </div>;
};

export default TopNav;
