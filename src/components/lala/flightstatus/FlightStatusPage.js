import React from "react";
import Header from "../header/Header";
import Line from "../../images/flightline.png";
import GreenLine from "../../images/flightlinegreen2.png";
import { AiFillWarning } from "react-icons/ai";
import { useEffect, useState } from "react";

const FlightStatusPage = () => {
  // useState

//   useEffect(() => {
//     async function getData() {
//       const response = await fetch("https://app.goflightlabs.com/flights?access_key=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNThlMDYwNTU5OTFkMjYyOTA2M2E3ZjAyMGM2NGUzYjhmNDYxODljZGE2MDE1MjExMmI4N2YwYTRiZjFlNGJmYmRkZDYzMTNjODUwYjFiNzAiLCJpYXQiOjE2NjkyMzMyNTAsIm5iZiI6MTY2OTIzMzI1MCwiZXhwIjoxNzAwNzY5MjUwLCJzdWIiOiIxODk4MCIsInNjb3BlcyI6W119.ReGP4WRXR66ttGgOKXdubfpQmv5JivpuIEqEZ0Xzv2w3nfVkyAQY8UEIQFhRK6gtXP9I-vZ0-pbrFxxAUGITrw&flight_status=active");

//       console.log(response)

//       const data = await response.json();

//       console.log(data);
//     }
//     getData();
//   }, []);

  return (
    <div>
      <Header />
      <div className="mx-auto w-[994px]">
        <div className="flex justify-center">
          <div className="flex justify-end  w-[1010px] px-[15px] gap-5 pt-[30px]">
            <button>Refresh</button>
            <div>
              <p>Last updated</p>
              <p>11:00</p>
            </div>
          </div>
        </div>
        <hr className="my-[20px]" />
        <div className="flex justify-center pb-[30px]">
          <div className="flight-status-container w-[994px] ">
            <div className="fs-top  h-[178px]">
              <div className="flex justify-between">
                <p className="text-[16px] font-bold">Flight number and route</p>
                <p className="text-[16px] text-[#647286] font-bold">
                  Flight status
                </p>
              </div>
              <div className=" flex justify-between mt-[.5rem]">
                <p className=" w-[768px] text-[36px] font-[100] ">
                  TK1661 | Istanbul to Hamburg Monday, November 21
                </p>
                <p className="text-[20px] text-[#53C172] font-bold">Landed</p>
              </div>
            </div>

            <div className="fs-middle w-[994px] p-[8px] h-[42px] flex items-center bg-[#F5F5F5] border border-[#E6E6E6]">
              <div className="ml-[85px]">
                <p className="text-[14px] font-normal text-[#808080]">
                  Scheduled for 09:10
                </p>
              </div>
              <div>
                <img src={Line} alt="" />
              </div>
              <div>
                <p className="text-[14px] font-normal  text-[#808080]">
                  Scheduled for 10:35
                </p>
              </div>
            </div>
            <div className="fs-bottom h-[109px] border border-[#E6E6E6] flex items-center gap-3 ">
              <div className="mt-4">
                <p className="text-[14px] font-normal ml-[130px] leading-3">
                  Actual: 09:19
                </p>
                <p className="text-[12px] text-[#C8C8C8] flex justify-end">
                  Istanbul (IST)
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img className="z-5" src={GreenLine} alt="" />
                <div className="h-[44px] w-[157px] bg-[#CCFFCC] flex justify-center">
                  <p className="text-[14px] font-normal">3h 22m</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[14px] font-normal leading-3">
                  Actual: 10:41
                </p>
                <p className="text-[12px] text-[#C8C8C8]">Hamburg (HAM)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center">
        <div className="w-[994px]  pb-[10px] h-[234.53px] ">
          <table className="w-[994px] border-[1px]">
            <thead className="bg-[#647286] text-white font-[500] text-[12px] h-[34.22px] ">
              <tr>
                <th className="px-[25px] py-[8px] border-[1px] border-[#ddd] w-[228.1px] ">
                  FLIGHT
                </th>
                <th className="px-[25px] py-[8px] border-[1px] border-[#ddd] w-[405.25px]  ">
                  FROM
                </th>
                <th className="px-[25px] py-[8px] border-[1px] border-[#ddd] w-[240.42px] ">
                  TO
                </th>
                <th className="px-[25px] py-[8px] border-[1px] border-[#ddd] w-[118.9px]  ">
                  DURATION
                </th>
              </tr>
            </thead>

            <tbody className="h-[165.17px]">
              <tr className="border-b-[1px] border-[#ddd] ">
                <td className="px-[15px] pt-[5px] pb-[12px] border-r-[1px] border-[#ddd] ">
                  <div className="flex items-center my-[10px] gap-1 font-[700] text-[16px]">
                    <h4>TK1334</h4>
                  </div>

                  <div className="font-[700] text-[14px] text-[#647286]">
                    <h5>
                      Operated by <span> Turkish Airlines</span>
                    </h5>

                    <div className="text-[11.9px] font-[500]">
                      <span className="text-[#0665E4] font-[500]">
                        Boeing 737 MAX 8{" "}
                      </span>
                      <span>Narrow body</span>
                    </div>
                  </div>

                  <div className="mt-[5px]">
                    {" "}
                    <img
                      src="https://www.turkishairlines.com/theme/img/tmp/tkAirplane.png"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-[15px] pt-[5px] pb-[12px] border-r-[1px] border-[#ddd] ">
                  <h4 className="text-[16px] font-[700] mt-[10px] mb-[5px] text-[#0665E4]">
                    18:15
                  </h4>
                  <h5 className="text-[12px] font-[500]  mb-[15px]">
                    Scheduled for: 09:10
                  </h5>

                  <div>
                    <div className="text-[14px] font-[700] ">
                      Istanbul, Türkiye
                    </div>
                    <div className="text-[12px] font-[500] text-[#647286] ">
                      Istanbul Airport (IST)
                    </div>
                    <div className="text-[11px] font-[700]">
                      TERMINAL International / Dış Hatlar
                    </div>
                    <div className="text-[11px] font-[700]">Gate no: A6</div>
                    <div className="text-[11px] font-[700] flex items-center gap-1">
                      <AiFillWarning className=" text-red-500" />
                      <p>
                        You can find your current gate number on the screens in
                        terminal.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-[15px] pt-[5px] pb-[12px] border-r-[1px] border-[#ddd] ">
                  <h4 className="text-[16px] font-[700] mt-[10px] mb-[5px] text-[#0665E4]">
                    18:15
                  </h4>
                  <h5 className="text-[12px] font-[500]  mb-[15px]">
                    Scheduled for: 09:10
                  </h5>

                  <div>
                    <div className="text-[14px] font-[700] ">
                      Istanbul, Türkiye
                    </div>
                    <div className="text-[12px] font-[500] text-[#647286] ">
                      Istanbul Airport (IST)
                    </div>
                    <div className="text-[11px] font-[700]">
                      TERMINAL International / Dış Hatlar
                    </div>
                  </div>
                </td>

                <td className=" pt-[5px] pb-[12px] text-[16px] font-[900]">
                  <h4>3h 5m</h4>

                  <tr className="bg-[#647286] text-white font-[500] w-full text-[12px] h-[34.22px] ">
                    <th className="px-[25px] py-[8px] border-[1px] border-[#ddd]  w-[118.9px] ">
                      DISTANCE
                    </th>
                  </tr>
                  <h4>1960 km</h4>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pt-[20px] pl-[15px]  border-b-[1px] border-l-[1px] border-r-[1px]  w-[994px] flex justify-end gap-3">
            <div className="text-[#232B38]  bg-[#EDEFF2] rounded-[5px] font-[700] text-[14px] w-[311.33px]   h-[48px] flex items-center cursor-not-allowed">
              <p className="h-[20px] overflow-hidden px-[15px]">
                https://www.turkishairlines.com/en-de/flig{" "}
              </p>
            </div>
            <div className="text-white mb-[15px] bg-[#E81932] rounded-[5px] font-[700] text-[14px] w-[226px] h-[48px] flex items-center justify-center  ">
              <p>Copy Link</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightStatusPage;
