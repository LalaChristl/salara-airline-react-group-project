import React from "react";

import { Context } from "../../context/Context";

const Itinerary = ({ item, showPrices, setSelectedValue }) => {
  const { state, dispatch } = React.useContext(Context);

  return (
    <div className={` z-30 ${showPrices && "bg-white  pt-[1rem] shadow-md"}`}>
      <div
        className={` mb-[15px] px-[15px] ${
          showPrices && " w-[960px]  h-[234.53px]"
        }  `}
      >
        <table
          className={` ${
            showPrices ? "w-[927.78px]" : "w-[994px]"
          }  border-[1px]`}
        >
          <thead className="bg-[#647286] text-white font-[500] text-[12px] h-[34.22px] ">
            <tr>
              <th className="px-[25px] w-[350.18px] py-[8px] border-[1px] border-[#ddd] ">
                FLIGHT
              </th>
              <th className="px-[25px]  w-[231.84px]  py-[8px] border-[1px] border-[#ddd]  ">
                FROM
              </th>
              <th className="px-[25px] py-[8px]  w-[225.65px]  border-[1px] border-[#ddd]  ">
                TO
              </th>
              <th className="px-[25px] py-[8px] w-[185.08px] border-[1px] border-[#ddd]  ">
                DURATION
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b-[1px] border-[#ddd] hover:bg-[#f1f1f1] ">
              <td className="px-[25px] pt-[5px] pb-[12px] border-r-[1px] border-[#ddd] ">
                <div className="flex items-center my-[10px] gap-1 font-[700] text-[16px]">
                  <img
                    src="https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_tk.png"
                    alt=""
                  />
                  <h4>
                    {item.airlineCode}
                    {item.flightNumber}
                  </h4>
                </div>

                <div className="font-[700] text-[14px] text-[#647286]">
                  <h5>{item.airlineName}</h5>

                  <small>
                    <span className="text-[#0665E4] font-[600]">
                      {item.plane}
                    </span>{" "}
                    <span>{item.type}</span>
                  </small>
                </div>
              </td>

              <td className="px-[25px] pt-[5px] pb-[12px] border-r-[1px] border-[#ddd] ">
                <h4 className="text-[16px] font-[700] mt-[10px] mb-[5px] text-[#0665E4]">
                  {item.departureTime}
                </h4>

                <div>
                  <div className="text-[14px] font-[700] ">
                    {item.departureAirportCity} {item.departureAirportCode}
                  </div>
                  <div className="text-[12px] font-[500] text-[#647286] ">
                    {item.departureAirportLocation}
                  </div>
                </div>
              </td>
              <td className="px-[25px] pt-[5px] pb-[12px] border-r-[1px] border-[#ddd] ">
                <h4 className="text-[16px] font-[700] mt-[10px] mb-[5px] text-[#0665E4]">
                  {item.arrivalTime}
                </h4>

                <div>
                  <div className="text-[14px] font-[700] ">
                    {item.arrivalAirportCity} {item.arrivalAirportCode}
                  </div>
                  <div className="text-[12px] font-[500] text-[#647286] ">
                    {item.arrivalAirportLocation}
                  </div>
                </div>
              </td>
              <td className="px-[25px] pt-[5px] pb-[12px] text-[16px] font-[900]">
                <h4>{item.travelDuration}</h4>
              </td>
            </tr>
          </tbody>
        </table>
        {showPrices && (
          <div
            onClick={() => {
              setSelectedValue("a");
              dispatch({ type: "economy", payload: item });
            }}
            className="pt-[20px] px-[15px] cursor-pointer  border-b-[1px] border-l-[1px] border-r-[1px]  w-[927.78px] flex justify-end "
          >
            <div className="text-white mb-[15px] bg-[#E81932] rounded-[5px] font-[700] text-[14px] w-[165.5px] h-[48px] flex items-center justify-center  ">
              <p>Show prices</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Itinerary;
