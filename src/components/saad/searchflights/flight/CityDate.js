import React, { useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaChild } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { useForm } from "react-hook-form";
import DatePickerFunc from "./DatePicker";
import { AiOutlineArrowRight } from "react-icons/ai";
import dates from "../../../images/booking.svg";

const CityDate = () => {
  // handle event

  const [showDate, setShowDate] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div>
      {" "}
      <div className="flex gap-3 items-end mt-4 my-3">
        {/* departure section */}
        <div>
          <div>
            <div className="relative">
              <p className="font-bold text-[#647280] text-[11px] uppercase">
                flying from
              </p>
              <select
                className={`w-[187.49px] h-[66px] text-[16px] font-bold pl-[3.2rem] rounded-lg ${
                  errors.departure &&
                  " focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                {...register("departure", {
                  required: {
                    value: true,
                    message: "Departure is required",
                  },
                })}
              >
                <option value="" selected disabled hidden>
                  Select Airport
                </option>
                <option value="ENIA">
                  {" "}
                  England Newcastle International Airport
                </option>
                <option value="INIA">
                  {" "}
                  Italy Naples International Airport
                </option>
                <option value="MMA"> Malaysia Mulu Airport</option>
                <option value="KMA"> Kenya Malindi Airport</option>
              </select>
              <FaPlaneDeparture className="text-2xl absolute left-5 top-10 " />
            </div>
            <div>
              {errors.departure && (
                <span className="text-sm text-red-500">
                  {errors.departure.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* arrival section */}
        <div>
          <div>
            <div className="relative">
              <p className="font-bold text-[11px] text-[#647280] uppercase">
                flying to
              </p>
              <select
                className={`w-[187.49px] h-[66px] text-[16px] font-bold pl-[3.2rem]  rounded-lg ${
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
                  Select Airport
                </option>
                <option value="ENIA">
                  {" "}
                  England Newcastle International Airport
                </option>
                <option value="INIA">
                  {" "}
                  Italy Naples International Airport
                </option>
                <option value="MMA"> Malaysia Mulu Airport</option>
                <option value="KMA"> Kenya Malindi Airport</option>
              </select>
              <FaPlaneArrival className="text-2xl absolute left-5 top-10 " />
            </div>
            <div>
              {errors.arrival && (
                <span className="text-sm text-red-500">
                  {errors.arrival.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* date section */}
        <div className="flex space-x-2  ">
          {/* departure section */}
          <div onClick={() => setShowDate((prev) => !prev)}>
            <div>
              <div className="relative">
                <p className="font-bold text-[#647280] text-[11px] uppercase">
                  departure date
                </p>
              </div>
              <div className="flex gap-3 items-center pl-5 rounded-[8px] w-[187px] h-[66px] bg-[#EFEFEF]">
                <img className="w-[24px]" src={dates} alt={dates} />
                <p className="text-[20px] font-bold">Dates</p>
                {errors.departureDate && (
                  <span className="text-sm text-red-500">
                    {errors.departureDate.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div
            style={{ zIndex: 5 }}
            className="absolute top-[14rem] left-[17rem] "
          >
            {showDate && <DatePickerFunc />}
          </div>
        </div>

        {/* passenger section */}
        <div className="flex space-x-2">
          {/* adult section */}
          <div className="w-[187px] ">
            <div>
              <div className="relative">
                <p className="font-bold text-[#647280] text-[11px] uppercase">
                  {" "}
                  Passengers
                </p>
                <select
                  className="w-full h-[66px] rounded-lg text-2xl pl-20"
                  {...register("adult", {
                    required: {
                      value: true,
                      message: "Trip type is required",
                    },
                  })}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <GiPerson className="text-2xl absolute left-5 top-10 " />
              </div>
              {/* <div>Error</div> */}
            </div>
          </div>
        </div>
        <div className="flex bg-[#E81932] rounded-[5px] px-[10px] w-[147.98px] h-[66px] items-center gap-2">
          <p className="text-[14px]  text-white font-bold">Search flight</p>
          <AiOutlineArrowRight
            className="text-[1.4rem] font-bold"
            style={{ fill: "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CityDate;
