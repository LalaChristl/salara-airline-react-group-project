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

  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const seatClass =
    "w-[49px] h-[57px] flex items-center justify-center cursor-pointer  hover:scale-125  ";
  const selectedSeat =
    "w-[49px] h-[57px] flex items-center justify-center cursor-not-allowed  ";

  console.log(state?.seatNumber, state?.seatPrice, state?.seatType);

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
                        <p className="text-[12px] font-[600]">Saad Malik</p>
                        <p className="text-[11px] ">Adult</p>
                      </div>
                    </div>
                    <div className="">
                      <p className="w-[48.83px] text-[14px] font-[600] text-[#7C8799]">
                        Seat Number
                      </p>
                      <p className="text-[12px] font-[600]">05E</p>
                    </div>
                    <div>
                      <p className="text-[#7C8799] font-[600]">Price</p>
                      <p className="font-[600] text-[12px]">EUR 0,00</p>
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
                    <p className="font-[600]">Boeing 737 MAX 8</p>
                    <p className="text-right">NARROW BODY</p>
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
                            setShowSeat(!showSeat);
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
                          className={seatClass}
                        >
                          <ExtraLegroom />
                        </li>
                        <div
                          style={{
                            clipPath:
                              "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                          }}
                          className="absolute top-[-8.35rem] shadow "
                        >
                          {showSeat && <SeatInfoCard />}
                        </div>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(!showSeat);
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
                          className={seatClass}
                        >
                          <BabySeat />
                          {/* <div
                            style={{
                              clipPath:
                                "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 81%, 45% 75%, 0% 75%)",
                            }}
                            className="absolute top-[-8.3rem] shadow "
                          >
                            {showSeat && <SeatInfoCard />}
                          </div> */}
                        </li>
                        <li
                          onMouseEnter={() => {
                            setShowSeat(!showSeat);
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
                          className={seatClass}
                        >
                          <ExtraLegroom />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className={seatClass}>
                          <ExtraLegroom />
                        </li>
                        <li className={seatClass}>
                          <BabySeat />
                        </li>
                        <li className={seatClass}>
                          <ExtraLegroom />
                        </li>
                      </ul>
                    </div>

                    {/* Row 6 */}
                    <div>
                      <ul className="flex text-center ">
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
                        <li className={seatClass}>
                          <SingleSeat />
                        </li>
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
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          7
                        </li>
                        <li className={selectedSeat}>
                          <SelectedSeat />
                        </li>
                        <li className={seatClass}>
                          <SingleSeat />
                        </li>
                        <li className={seatClass}>
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className={seatClass}>
                          <SingleSeat />
                        </li>
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
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          8
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 9 */}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          9
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 10 */}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          10
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
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

                    {/* Row 11 */}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          11
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <ExitSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <ExitSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <ExitSeat />
                        </li>
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
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          12
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <ExitSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <ExitSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <ExitSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <ExitSeat />
                        </li>
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
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          13
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 14 */}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          14
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
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
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          15
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 16 */}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          16
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 17 */}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          17
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 18 */}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          18
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 19 */}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          19
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 20*/}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          20
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 21*/}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          21
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
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
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          22
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SelectedSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 23 */}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          23
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 24 */}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          24
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 25 */}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          25
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 26*/}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          26
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                      </ul>
                    </div>

                    {/* Row 27*/}
                    <div>
                      <ul className="flex text-center ">
                        <li className="w-[49px] h-[57px] flex items-center justify-center   ">
                          27
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  "></li>
                        <li className="w-[40px] h-[57px] "></li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
                        <li className="w-[49px] h-[57px] flex items-center justify-center  ">
                          <SingleSeat />
                        </li>
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
              onClick={() => navigate("/paymentpage")}
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
