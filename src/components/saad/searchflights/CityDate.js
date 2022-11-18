import React from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaChild } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { useForm } from "react-hook-form";
import DatePickerFunc from "./DatePicker";

const CityDate = () => {
  // handle event
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div>
      {" "}
      <div className="flex gap-5">
        {/* departure section */}
        <div>
          <div>
            <div className="relative">
              <p className="font-bold text-xl uppercase">flying from</p>
              <select
                className={`w-[197.5px] h-[81px] text-2xl pl-20 rounded-lg ${
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
                  --Select Airport--
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
              <FaPlaneDeparture className="text-4xl absolute left-5 top-10 " />
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
              <p className="font-bold text-xl uppercase">flying to</p>
              <select
                className={`w-[197.5px] h-[81px]  text-2xl pl-20 rounded-lg ${
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
                  --Select Airport--
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
              <FaPlaneArrival className="text-4xl absolute left-5 top-10 " />
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
      </div>
      {/* date section */}
      <div className="flex space-x-2">
        {/* departure section */}
        <div>
          <div>
            <div className="relative">
              <p className="font-bold text-xl uppercase">departure date</p>
              <input
                type="date"
                className={`w-full h-16 text-2xl rounded-lg ${
                  errors.departureDate &&
                  " focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                {...register("departureDate", {
                  required: {
                    value: true,
                    message: "Departure date is required",
                  },
                })}
              />
            </div>
            <div>
              {errors.departureDate && (
                <span className="text-sm text-red-500">
                  {errors.departureDate.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* return section */}
        <div>
          <div>
            <div className="relative">
              <p className="font-bold text-xl uppercase">return date</p>
              <input
                type="date"
                className={`w-full h-16 text-2xl rounded-lg ${
                  errors.returnDate &&
                  " focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                {...register("returnDate", {
                  required: {
                    value: true,
                    message: "Return date is required",
                  },
                })}
              />
            </div>
            <div>
              {errors.returnDate && (
                <span className="text-sm text-red-500">
                  {errors.returnDate.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* passenger section */}
      <div className="flex space-x-2">
        {/* adult section */}
        <div className="w-full">
          <div>
            <div className="relative">
              <p className="font-bold text-xl uppercase"> adults (18+)</p>
              <select
                className="w-full h-16 rounded-lg text-2xl pl-20"
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
              <GiPerson className="text-4xl absolute left-5 top-10 " />
            </div>
            {/* <div>Error</div> */}
          </div>
        </div>

        {/* children section */}
        <div className="w-full">
          <div>
            <div className="relative">
              <p className="font-bold text-xl uppercase"> children (0-17)</p>
              <select
                className="w-full h-16 rounded-lg text-2xl pl-20"
                {...register("children", {
                  required: {
                    value: true,
                    message: "Trip type is required",
                  },
                })}
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <FaChild className="text-4xl absolute left-5 top-10 " />
            </div>
            {/* <div>Error</div> */}
          </div>
        </div>
      </div>
      <div>
        <DatePickerFunc />
      </div>
    </div>
  );
};

export default CityDate;
