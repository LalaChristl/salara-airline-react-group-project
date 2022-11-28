import React, { useContext, useState } from "react";
import additional from "../../images/additional.png";
import SearchNav from "../../lala/header/SearchNav";
import { FaInfoCircle } from "react-icons/fa";
import { ExtraLegroom } from "./SingleSeat";
import { ExitSeat } from "./SingleSeat";
import { SelectedSeat } from "./SingleSeat";
import { BabySeat } from "./SingleSeat";
import { MdArrowForwardIos } from "react-icons/md";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { TbMinusVertical } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";

import Radio from "@mui/material/Radio";
import SingleSeat from "./SingleSeat";
import { Context } from "../../context/Context";
import SeatInfoCard from "./SeatInfoCard";

const SeatAllocationComponent = () => {
  const { state, dispatch } = useContext(Context);

  const [showSeat, setShowSeat] = useState(true);
  const [showName, setShowName] = useState(true);

  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const seatClass =
    "w-[49px] h-[57px] flex items-center justify-center cursor-pointer  hover:scale-125 relative ";
  const selectedSeat =
    "w-[49px] h-[57px] flex items-center justify-center cursor-not-allowed  ";

  // console.log(state?.seatNumber, state?.seatPrice, state?.seatType);

  return (
    <div>
      <SearchNav selected={false} passenger={false} additional={true} />
      <div className="w-[1024px] mx-auto">
        <div className="pt-[30px]">
          <img src={additional} alt="" />
        </div>
        <div className="pt-[30px] pb-[70px]">
          <div className="p-[25px]">
            <div className="flex items-center pb-[20px] gap-4">
              <p className="text-[18px] font-[600]">Seat selection</p>
              <div className="flex items-center gap-1">
                <p className="text-[12px] text-[#2073E3]">
                  Terms and Conditions
                </p>
                <FaInfoCircle className="text-[#2073E3] w-[24px] h-[24px]" />
              </div>
            </div>

            <div className="flex">
              <div className="w-[487px] px-[15px] bg-[#F4F5F8] border-2 h-[305.44px] pb-[15px] mb-[15px]">
                <div className="text-center mt-[20px] font-[600] mb-[30px]">
                  {state?.selectedflightobject?.departureAirportCity} -{" "}
                  {state?.selectedflightobject?.arrivalAirportCity} Flight
                </div>
                <div className="bg-white mt-[5px] py-[15px] px-[20px] ">
                  <p className="font-[600] text-[#232B38]">1. Flight</p>
                  <div className="flex items-center gap-2 text-[11px] font-[600] mt-[5px]">
                    <p>
                      {state?.selectedflightobject?.departureAirportCity}{" "}
                      {state?.selectedflightobject?.departureAirportCode}
                    </p>
                    <div className="mx-[10px]">
                      <img
                        src="https://www.turkishairlines.com/theme/img/additional-services-card/plane-icon.svg"
                        alt=""
                      />
                    </div>
                    <p>
                      {state?.selectedflightobject?.arrivalAirportCity}{" "}
                      {state?.selectedflightobject?.arrivalAirportCode}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-[600] text-[14px] mt-[5px]">
                    <p>
                      {state?.firstDate.slice(3)} {state?.firstDate.slice(0, 3)}{" "}
                      {state?.firstDateDay.slice(0, 3)}
                    </p>
                    <TbMinusVertical />
                    <p>{state?.selectedflightobject?.departureTime}</p>
                    <TbMinusVertical />
                    <p>1 Passenger</p>
                  </div>
                  <hr className="my-[15px]" />
                  <div className="flex items-start justify-between">
                    <div className="flex items-center ">
                      <Radio
                        checked={selectedValue === "a"}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "A" }}
                      />
                      <div className="pr-[15px]">
                        <p className="text-[13px]">1 Passenger</p>
                        <p className="text-[12px] font-[600]">
                          {state?.passengerFirstName} {state?.passengerLastName}
                        </p>
                        <p className="text-[11px] ">Adult</p>
                      </div>
                    </div>
                    <div className="">
                      <p className="w-[48.83px] text-[14px] font-[600] text-[#7C8799]">
                        Seat Number
                      </p>
                      <p className="text-[12px] font-[600]">
                        {state?.seatNumberDisplay}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#7C8799] font-[600]">Price</p>
                      <p className="font-[600] text-[12px]">
                        EUR {state?.seatPriceDisplay},00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[487px] h-[1748.83px] mt-[15px] px-[15px] flex flex-col items-center">
                {/* Top Seat Types */}
                <div className="flex items-start justify-between gap-[30px]">
                  <div className="flex items-center gap-2 flex-wrap text-[11px] font-[600] w-[330px] ">
                    <div className="flex  gap-2 w-[110.57px]">
                      <SingleSeat />
                      <p>Standard Seat</p>
                    </div>
                    <div className="flex  gap-2 w-[118.57px]">
                      <ExtraLegroom />
                      <p>Extra legroom seat</p>
                    </div>
                    <div className="flex  gap-2 w-[75px]">
                      <ExitSeat />
                      <p>Exit seat</p>
                    </div>
                    <div className="flex  gap-2 w-[110.57px]">
                      <SelectedSeat />
                      <p>Selected seat</p>
                    </div>
                    <div className="flex  gap-2 w-[125.57px]">
                      <BabySeat />
                      <p>Baby Bassinet seat</p>
                    </div>
                  </div>
                  <div className="text-[11px]">
                    <p className="font-[600] text-right">
                      {state?.selectedflightobject?.plane.toUpperCase()}
                    </p>
                    <p className="text-right">
                      {state?.selectedflightobject?.type.toUpperCase()}
                    </p>
                  </div>
                </div>

                {/* Seat Map */}
                <div className="my-[50px] w-[434px] h-[1576px] shadow-lg flex justify-center rounded-br-[12rem] rounded-bl-[12rem]">
                  <div className="pt-[20px] w-[404px] shadow-sm h-[1435px] text-[14px] font-[600]">
                    {/* A B C D E F */}
                    <div>
                      <ul className="flex text-center">
                        <li className="w-[49px] h-[20px] "></li>
                        <li className="w-[49px] h-[20px] ">A</li>
                        <li className="w-[49px] h-[20px] ">B</li>
                        <li className="w-[49px] h-[20px] ">C</li>
                        <li className="w-[40px] h-[20px] "></li>
                        <li className="w-[49px] h-[20px] ">D</li>
                        <li className="w-[49px] h-[20px] ">E</li>
                        <li className="w-[49px] h-[20px] ">F</li>
                      </ul>
                    </div>

                    {/* Row 5 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          5
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "05A",
                              seatType: "Extra legroom seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "05A",

                              seatPrice: 38,
                            });
                          }}
                          className={seatClass}
                        >
                          <ExtraLegroom />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow hover:scale-100 "
                        >
                          {showSeat && state?.seatNumber === "05A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        {showName && state?.seatNumberDisplay === "05A" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[3.4rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "05B",
                              seatType: "Baby Bassinet seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "05B",

                              seatPrice: 38,
                            });
                          }}
                          className={seatClass}
                        >
                          <BabySeat />
                        </li>

                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow hover:scale-100 "
                        >
                          {showSeat && state?.seatNumber === "05B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        {showName && state?.seatNumberDisplay === "05B" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[6.4rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "05C",
                              seatType: "Extra legroom seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "05C",

                              seatPrice: 38,
                            });
                          }}
                          className={seatClass}
                        >
                          <ExtraLegroom />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow hover:scale-100 "
                        >
                          {showSeat && state?.seatNumber === "05C" && (
                            <SeatInfoCard />
                          )}
                        </div>

                        {showName && state?.seatNumberDisplay === "05C" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[9.5rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}

                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "05D",
                              seatType: "Extra legroom seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "05D",

                              seatPrice: 38,
                            });
                          }}
                          className={seatClass}
                        >
                          <ExtraLegroom />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "05D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        {showName && state?.seatNumberDisplay === "05D" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[15.1rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}

                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "05E",
                              seatType: "Baby Bassinet seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "05E",

                              seatPrice: 38,
                            });
                          }}
                          className={seatClass}
                        >
                          <BabySeat />
                        </li>

                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "05E" && (
                            <SeatInfoCard />
                          )}
                        </div>

                        {showName && state?.seatNumberDisplay === "05E" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[18.1rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "05F",
                              seatType: "Extra legroom seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "05F",

                              seatPrice: 38,
                            });
                          }}
                          className={seatClass}
                        >
                          <ExtraLegroom />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow "
                        >
                          {showSeat && state?.seatNumber === "05F" && (
                            <SeatInfoCard />
                          )}
                        </div>

                        {showName && state?.seatNumberDisplay === "05F" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[21.2rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                      </ul>
                    </div>

                    {/* Row 6 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          6
                        </li>
                        <li className={selectedSeat}>
                          <SelectedSeat />
                        </li>
                        <li className={selectedSeat}>
                          <SelectedSeat />
                        </li>
                        <li className={selectedSeat}>
                          <SelectedSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "06D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "06D",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "06D" && (
                            <SeatInfoCard />
                          )}
                        </div>

                        {showName && state?.seatNumberDisplay === "06D" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[15.1rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <li className={selectedSeat}>
                          <SelectedSeat />
                        </li>
                        <li className={selectedSeat}>
                          <SelectedSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 7 */}
                    <div>
                      <ul className="flex text-center relative">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          7
                        </li>
                        <li className={selectedSeat}>
                          <SelectedSeat />
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "07B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "07B",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "07B" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[6.4rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}

                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "07B" && (
                            <SeatInfoCard />
                          )}
                        </div>

                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "07C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "07C",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "07C" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[9.5rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "07C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "07D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "07D",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "07D" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[15.1rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "07D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className={selectedSeat}>
                          <SelectedSeat />
                        </li>
                        <li className={selectedSeat}>
                          <SelectedSeat />
                        </li>
                      </ul>
                    </div>
                    {/* Row 8 */}
                    <div>
                      <ul className="flex text-center relative">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          8
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "08C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "08C",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "08C" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[9.5rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "08C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "08D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "08D",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "08D" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[15.1rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "08D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "08E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "08E",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "08E" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[18.1rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "08E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 9 */}
                    <div>
                      <ul className="flex text-center relative">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          9
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "09B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "09B",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "09B" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[6.4rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "09B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "09C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "09C",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "09C" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[9.5rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "09C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "09D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "09D",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "09D" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[15.1rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "09D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "09E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "09E",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "09E" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[18.1rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "09E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "09F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "09F",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "09F" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[21.2rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "09F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row 10 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          10
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "10A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "10A",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "10A" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[3.4rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "10A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "10B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "10B",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "10B" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[6.4rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "10B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "10C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "10C",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "10C" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[9.5rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "10C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "10D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "10D",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "10D" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[15.1rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "10D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "10E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "10E",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "10E" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[18.1rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "10E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "10F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          onClick={() => {
                            setShowName(true);
                            dispatch({
                              type: "seatNumberDisplay",
                              seatNumber: "10F",

                              seatPrice: 0,
                            });
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>

                        {showName && state?.seatNumberDisplay === "10F" && (
                          <div
                            onClick={() => {
                              setShowName(false);
                              dispatch({
                                type: "seatNumberDisplay",
                                seatNumber: "",

                                seatPrice: 0,
                              });
                            }}
                            className=" cursor-pointer w-[40px] h-[40px] bg-blue-600 text-white rounded-full flex items-center justify-center absolute left-[21.2rem] top-2"
                          >
                            <p>
                              {state?.passengerFirstName.slice(0, 1)}
                              {state?.passengerLastName.slice(0, 1)}
                            </p>
                          </div>
                        )}
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "10F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Emergency Exit */}
                    <div className="flex justify-between h-[42px]">
                      <div className="w-[135.51px] text-[12px] font-[400] flex items-center ">
                        <div className="bg-[#7C8799] w-[8px] h-[42px] rounded-tr-[10px] rounded-br-[10px]"></div>
                        <p className="ml-[20px] ">EMERGENCY EXIT</p>
                      </div>
                      <div className="w-[135.51px] text-[12px] font-[400] flex items-center ">
                        <p className="mr-[20px] ">EMERGENCY EXIT</p>
                        <div className="bg-[#7C8799] w-[8px] h-[42px] rounded-tl-[10px] rounded-bl-[10px]"></div>
                      </div>
                    </div>

                    {/* Row 11 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          11
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "11B",
                              seatType: "Exit seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <ExitSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "11B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "11C",
                              seatType: "Exit seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <ExitSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "11C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "11D",
                              seatType: "Exit seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <ExitSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "11D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Emergency Exit */}
                    <div className="flex justify-between h-[42px]">
                      <div className="w-[135.51px] text-[12px] font-[400] flex items-center ">
                        <div className="bg-[#7C8799] w-[8px] h-[42px] rounded-tr-[10px] rounded-br-[10px]"></div>
                        <p className="ml-[20px] ">EMERGENCY EXIT</p>
                      </div>
                      <div className="w-[135.51px] text-[12px] font-[400] flex items-center ">
                        <p className="mr-[20px] ">EMERGENCY EXIT</p>
                        <div className="bg-[#7C8799] w-[8px] h-[42px] rounded-tl-[10px] rounded-bl-[10px]"></div>
                      </div>
                    </div>

                    {/* Row 12 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          12
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "12A",
                              seatType: "Exit seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <ExitSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "12A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "12B",
                              seatType: "Exit seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <ExitSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "12B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "12C",
                              seatType: "Exit seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <ExitSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "12C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "12D",
                              seatType: "Exit seat",
                              seatPrice: 38,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <ExitSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "12D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 13 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          13
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "13A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "13A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "13B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "13B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className={selectedSeat}>
                          <SelectedSeat />
                        </li>

                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "13D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "13D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "13E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "13E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "13F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "13F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row 14 */}
                    <div>
                      <ul className="flex text-center relative">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          14
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "14A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "14A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "14B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "14B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "14C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "14C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 15 */}
                    <div>
                      <ul className="flex text-center relative">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          15
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "15C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "15C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "15D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "15D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "15E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "15E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "15F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "15F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row 16 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          16
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "16A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "16A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "16B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "16B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "16C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "16C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "16D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "16D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "16E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "16E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "16F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "16F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row 17 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          17
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "17A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "17A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "17B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "17B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "17C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "17C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "17D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "17D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "17E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "17E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "17F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "17F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row 18 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          18
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "18A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "18A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "18B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "18B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "18C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "18C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "18D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "18D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "18E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "18E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "18F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "18F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row 19 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          19
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "19A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "19A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "19B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "19B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "19C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "19C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "19D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "19D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "19E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "19E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "19F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "19F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row 20*/}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          20
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "20A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "20A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "20B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "20B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "20C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "20C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "20D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "20D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "20E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "20E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "20F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "20F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row 21*/}
                    <div>
                      <ul className="flex text-center relative">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          21
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "21A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "21A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "21B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "21B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "21C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "21C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "21D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "21D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 22*/}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          22
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "22A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "22A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "22B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "22B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "22C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "22C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "22D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "22D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "22E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "22E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 23 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          23
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "23A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "23A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "23B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "23B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "23C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "23C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "23D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "23D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "23E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "23E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "23F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "23F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row 24 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          24
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "24A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "24A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "24B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "24B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "24C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "24C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "24D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "24D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "24E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "24E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "24F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "24F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row 25 */}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          25
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "25A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "25A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "25B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "25B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "25C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "25C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "25D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "25D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "25E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "25E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "25F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "25F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row 26*/}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          26
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "26A",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[-0.7rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "26A" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "26B",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[2.3rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "26B" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "26C",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[5.4rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "26C" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "26D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "26D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "26E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "26E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "26F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "26F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row 27*/}
                    <div>
                      <ul className="flex text-center relative ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          27
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  "></li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "27D",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[10.9rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "27D" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "27E",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[14rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "27E" && (
                            <SeatInfoCard />
                          )}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(true);
                            dispatch({
                              type: "seatNumber",
                              seatNumber: "27F",
                              seatType: "Standard seat",
                              seatPrice: 0,
                            });
                          }}
                          onMouseLeave={() => {
                            setShowSeat(false);
                          }}
                          className={seatClass}
                        >
                          <SingleSeat />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.7rem] left-[17rem] shadow  "
                        >
                          {showSeat && state?.seatNumber === "27F" && (
                            <SeatInfoCard />
                          )}
                        </div>
                      </ul>
                    </div>

                    {/* Row End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}

      <div className="fixed bottom-0 w-screen">
        <div className="h-[88px] bg-[#232B38] w-full text-white flex items-center justify-center  ">
          <div className="flex items-center ">
            <div className="w-[426.66px] px-[15px]">
              <p className="text-[14.67px] font-[700] mb-[10px]">Departure</p>
              <div className="flex items-center gap-2 text-[12px] font-[500] ">
                <p>
                  {state?.selectedflightobject?.departureAirportCity.slice(
                    0,
                    3
                  )}
                  -{" "}
                  {state?.selectedflightobject?.arrivalAirportCity.slice(0, 3)}
                </p>
                <BsFillCircleFill className="w-[5.16px] h-[6px]" />
                <p>
                  {state?.firstDateDay.slice(0, 3)}, {state?.firstDate}
                </p>
              </div>
              <div className="flex items-center text-[12px] gap-1 font-[500]">
                <div className="flex items-center gap-1">
                  <p>Departure</p>
                  <p>{state?.selectedflightobject?.departureTime}</p>
                </div>
                <TbMinusVertical />
                <div className="flex items-center gap-1">
                  <p>Arrival</p>
                  <p>{state?.selectedflightobject?.arrivalTime}</p>
                </div>
              </div>
            </div>
            <div className="w-[170.66px] flex"></div>
            <div className="w-[256.68px] float-right ">
              <p className="text-[12px] font-[500] text-right">
                Total price for 1 passenger
              </p>
              <div className="flex items-center gap-2 justify-end">
                <div className="text-[12px] font-[500]">
                  <p className="h-[12px]">EUR</p>
                  <p>Euro</p>
                </div>
                <p className="text-[22px] font-[700]">
                  {state?.selectedPrice}.42
                </p>
              </div>
            </div>
            <div
              onClick={() => navigate("/payment")}
              className="px-[15px] cursor-pointer"
            >
              <div className="bg-[#E81932] px-[12px] py-[6px] rounded-[4px] w-[140.66px] h-[68px] flex items-center justify-between text-white ">
                <p className="font-[700] text-[14px]">Continue</p>
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatAllocationComponent;
