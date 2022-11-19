import React from "react";

import { useForm } from "react-hook-form";
import DateDropDown from "./DateDropDown";
import arrow from "../../../images/aroow.svg";

const FlightStatus = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex items-center gap-2 h-full">
      <div>
        {" "}
        <select
          className={`w-[147.98px] h-[66px] text-[16px] font-bold text-center  rounded-lg ${
            errors.arrival &&
            " focus:border-red-500 focus:ring-red-500 border-red-500"
          }`}
          {...register("arrival", {
            required: {
              value: true,
              message: "Arrival is required",
            },
          })}
        >
          <option value="" selected disabled hidden>
            Flight no.
          </option>
          <option value="ENIA"> Arrival</option>
          <option value="INIA"> Departure</option>
          <option value="MMA"> Flight no.</option>
          <option value="KMA"> Route</option>
        </select>
      </div>

      <div className="flex gap-2 w-[464.66px] items-center border-2 h-[66px]">
        <p className="font-[700] text-[18px] pl-[12px]">TK</p>
        <input
          className="font-[700] text-[18px] "
          type="text"
          placeholder="Enter flight number"
          name=""
          id=""
        />
      </div>
      <DateDropDown />
      <div className="bg-[#E81932] rounded-[5px] w-[95.33px] flex items-center justify-center h-[66px]">
        <img style={{ width: "30px", height: "30px" }} src={arrow} alt="" />
      </div>
    </div>
  );
};

export default FlightStatus;
