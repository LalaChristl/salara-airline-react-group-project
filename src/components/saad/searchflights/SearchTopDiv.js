import React, { useContext } from "react";
import { Context } from "../../context/Context";
import flightRed from "../../images/book-a-flight.svg";
import checkin from "../../images/checkin.svg";
import status from "../../images/flight-status.svg";

const SearchTopDiv = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div
      style={{ lineHeight: "17px", fontWeight: 700 }}
      className=" justify-start   flex items-center gap-[6px] text-[14px]"
    >
      <div
        onClick={() => dispatch({ type: "flight" })}
        style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}
        className=" h-[42.79px] cursor-pointer  px-[18px] py-[10px] flex items-center bg-white "
      >
        <img className="mr-[10px]" src={flightRed} alt="" />
        <p className="text-[#E81932]">Flight</p>
      </div>
      <div
        onClick={() => dispatch({ type: "checkIn" })}
        style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}
        className=" px-[18px] py-[10px] cursor-pointer flex items-center bg-white h-[42.79px] "
      >
        <img className="mr-[10px]" src={checkin} alt="" />
        <p className="text-[#647280]">Check-in / Manage booking</p>
      </div>
      <div
        onClick={() => dispatch({ type: "status" })}
        style={{ borderTopRightRadius: "5px", borderTopLeftRadius: "5px" }}
        className="h-[42.79px]  px-[18px] cursor-pointer py-[10px] flex items-center bg-white "
      >
        <img className="mr-[10px]" src={status} alt="" />
        <p className="text-[#647280]">Flight status</p>
      </div>
    </div>
  );
};

export default SearchTopDiv;
