import React from "react";
import CheckIn from "./checkin/CheckIn";
import Flight from "./flight/Flight";
import SearchTopDiv from "./SearchTopDiv";
import FlightStatus from "./status/FlightStatus";

const SearchContainer = () => {
  return (
    <div className="absolute top-[24rem] left-[23rem]">
      <SearchTopDiv />
      <div className="bg-white mx-auto  border-2 w-[994px] h-[220px] px-[28px] pt-[30px] pb-[20px] ">
        <Flight />
        <CheckIn />
        <FlightStatus />
      </div>
    </div>
  );
};

export default SearchContainer;
