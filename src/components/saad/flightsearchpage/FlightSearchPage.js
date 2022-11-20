import React, { useContext } from "react";
import { Context } from "../../context/Context";
import SearchNav from "../../lala/header/SearchNav";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

const FlightSearchPage = () => {
  const { state } = useContext(Context);

  return (
    <div>
      <SearchNav />

      <div className="px-[15px] pt-[30px] pb-[5px] w-[1024px] mx-auto">
        <p className="bg-[#E81932] text-[#FFFFFF] text-[14px] mb-[10px] pt-[7px] px-[44px] pb-[5px] w-[222.23px] font-[700] leading-[15px] ">
          OUTBOUND FLIGHT
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[28px] font-[300]">
            {state?.departure} to {state?.arrival} on {state?.firstDateDay},{" "}
            {state?.startDate?.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className="flex items-center ">
            <div className="w-[34px] h-[34px] border-2 flex items-center justify-center">
              <FaLessThan className=" w-[10px] h-[14px]" />
            </div>
            <div className="w-[34px] h-[34px] flex items-center justify-center border-2">
              <FaGreaterThan className=" w-[10px] h-[14px]" />
            </div>
          </div>
        </div>
      </div>

      <p>{state?.firstDate}</p>
      <p>{state?.firstDateDay}</p>
      <p>{state?.secondDate}</p>
      <p>{state?.secondDateDay}</p>
      <p>{state?.departure}</p>
      <p>{state?.arrival}</p>
    </div>
  );
};

export default FlightSearchPage;
