import React, { useContext } from "react";
import { Context } from "../../context/Context";
import CheckIn from "./checkin/CheckIn";
import Flight from "./flight/Flight";
import SearchTopDiv from "./SearchTopDiv";
import FlightStatus from "./status/FlightStatus";

const SearchContainer = () => {
  const { state } = useContext(Context);

  return (
    <div className="absolute top-[24rem] left-1/2 transform -translate-x-1/2  ">
      <SearchTopDiv />
      <div className="bg-white mx-auto shadow-md w-[994px] h-[220px] px-[28px] pt-[30px] pb-[20px] ">
        {state?.flightTab && <Flight />}
        {state?.checkinTab && <CheckIn />}
        {state?.statusTab && <FlightStatus />}
      </div>
    </div>
  );
};

export default SearchContainer;
