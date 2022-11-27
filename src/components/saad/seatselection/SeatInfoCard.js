import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

const SeatInfoCard = () => {
  const { state } = useContext(Context);

  return (
    <div className="w-[170px]    rounded-bl-md rounded-br-md  z-10 clip">
      <div className="bg-blue-500 h-[40px] w-full rounded-tl-md rounded-tr-md flex items-center gap-1 px-[10px] text-white">
        <MdAirlineSeatReclineExtra />
        <p className="text-[16px]">{state?.seatNumber}</p>
      </div>
      <div className="bg-gray-200 h-[140px] rounded-bl-md rounded-br-md text-left px-[10px] pt-[2px]">
        <p>1. Passenger</p>
        <p className="text-gray-500 hover:underline">{state?.passengerName}</p>
        <p>{state?.seatType}</p>
        <p>EUR {state?.seatPrice} </p>
      </div>
    </div>
  );
};

export default SeatInfoCard;
