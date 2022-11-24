import React, { useContext } from "react";
import { Context } from "../../context/Context";
import SearchNav from "../../lala/header/SearchNav";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import FlightCard from "./FlightCard";
import SelectFlightCard from "./SelectFlightCard";

const FlightSearchPage = () => {
  const { state } = useContext(Context);

  return (
    <div>
      <SearchNav />

      <div className="px-[15px] pt-[30px] pb-[5px] w-[1024px] mx-auto mb-[20px] ">
        <p className="bg-[#E81932] text-[#FFFFFF] text-[14px] mb-[10px] pt-[7px] text-center pb-[5px] w-[222.23px] font-[700] leading-[15px] ">
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

      <div className="w-[994px] mx-auto ">
        <div className="bg-[#232B38] rounded-t-[5px] text-white text-[14px] h-[49.13px] px-[15px] flex items-center justify-end">
          <p className="text-[12px] font-[300] mr-[15px] pr-[8px]">Sort by</p>
          <p className="text-[12px] font-[700] border-2 bg-white text-[#232B38] py-[5px] px-[15px] mr-[8px] rounded-[5px] border-white  h-[29.63px] flex items-center">
            Departure time
          </p>
          <p className="text-[12px] font-[700] border-2  py-[5px] px-[15px] rounded-[5px] border-white mr-[8px] h-[29.63px] flex items-center">
            Arrival time
          </p>
          <p className="text-[12px] font-[700] border-2  py-[5px] px-[15px] rounded-[5px] border-white mr-[8px] h-[29.63px] flex items-center">
            Fare
          </p>
          <p className="text-[12px] font-[700] border-2  py-[5px] px-[15px] rounded-[5px] border-white  h-[29.63px] flex items-center">
            Duration
          </p>
        </div>
        <div
          className={`pt-[15px] h-auto 
           px-[15px] border-2 rounded-b-[5px] bg-[#F9F9F9]`}
        >
          <FlightCard />
        </div>
      </div>
      <p className="text-[20px] mt-[15px] mb-[10px] text-center font-[300] text-[#232B38]">
        The fares shown in this page are valid for single Adult. The total fare
        can be seen on the payment page after completing your flight selection.
      </p>
      {/* <SelectFlightCard /> */}
    </div>
  );
};

export default FlightSearchPage;
