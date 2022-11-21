import * as React from "react";

import { data } from "../../data/Data";
import { MdKeyboardArrowDown } from "react-icons/md";
import Radio from "@mui/material/Radio";

const FlightCard = () => {
  const [selectedValue, setSelectedValue] = React.useState(false);
  const [itinerary, setItinerary] = React.useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  //   console.log(data);
  return (
    <div>
      <div className="text-[14px] flex ">
        <div className="hover:shadow-2xl flex items-center w-[498.41px] h-[105px] px-[10px] py-[20px] bg-[#FFFFFF]">
          <div className="w-[277.44px] px-[10px] flex ">
            <div className="w-[114.83px] flex flex-col justify-center">
              <p className="text-[16px] font-[700]">{data[0].departureTime}</p>
              <p className="text-[14px] font-[700] text-[#697886]">
                {data[0].departureAirportCode}
              </p>
              <p className="text-[10px] font-[700] text-[#697886]">
                {data[0].departureAirportCity}
              </p>
            </div>
            <div className="flex  flex-col justify-between items-center relative">
              <p className="text-[10px]">Direct</p>
              <div className="h-[1px] bg-[#878787] w-[150.44px] absolute top-[50%]"></div>
              <img
                src="https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_tk.png"
                alt=""
              />
            </div>
            <div className="w-[114.83px] flex flex-col items-end justify-center">
              <p className="text-[16px] font-[700]">{data[0].arrivalTime}</p>
              <p className="text-[14px] font-[700] text-[#697886]">
                {data[0].arrivalAirportCode}
              </p>
              <p className="text-[10px] font-[700] text-[#697886]">
                {data[0].arrivalAirportCity}
              </p>
            </div>
          </div>
          <div className="w-[97.48px] pr-[5px] text-center ">
            <p className="text-[10px] text-[#697886] font-[300]">
              Flight duration
            </p>
            <p className="text-[#232B38] font-[700]">
              {data[0].travelDuration}
            </p>
          </div>
          <div className="w-[103.48px]  pl-[10px] flex flex-col justify-center items-center">
            <p className="text-[12px] text-[#697886] font-[700]">
              Itinerary details
            </p>
            <MdKeyboardArrowDown className="mx-auto w-[30px] h-[23px] " />
          </div>
        </div>

        <div className="hover:shadow-2xl w-[220.8px]  h-[105px] ml-[10px]  pb-[15px] bg-white ">
          <h2 className="bg-[#DFE4ED] w-[220.8px] pl-[10px] text-[12px] h-[22px] flex items-center font-[600]">
            ECONOMY
          </h2>
          <div className="flex items-center justify-between pl-[10px] pr-[2px]">
            <Radio
              sx={{ marginTop: "1rem" }}
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            <div className="pt-[10px]">
              <p className="font-[600] text-[10px] text-[#697886]">
                Per passenger
              </p>
              <p className="text-[16px] font-[700]">{data[0].price}</p>
            </div>
            <MdKeyboardArrowDown className=" w-[30px] h-[23px] mt-[1rem]" />
          </div>
        </div>

        <div className="hover:shadow-2xl w-[220.8px] relative  h-[105px] ml-[10px]  pb-[15px] bg-white">
          <h2 className="bg-[#F7EAE4] w-[220.8px] pl-[10px] text-[12px] h-[22px] flex items-center font-[600]">
            BUSINESS
          </h2>
          <div className="flex items-center justify-between pl-[10px] pr-[2px]">
            <Radio
              sx={{ marginTop: "1rem" }}
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
            />
            <div className="pt-[10px]">
              <p className="font-[600] text-[10px] text-[#697886]">
                Per passenger
              </p>
              <p className="text-[16px] font-[700]">{data[0].price}</p>
            </div>
            <MdKeyboardArrowDown className=" w-[30px] h-[23px] mt-[1rem]" />
          </div>
          <p className="text-[#FF0000] absolute bottom-[.3rem] left-[5.3rem] font-[700] text-[12px]">
            4 left at this price
          </p>
        </div>
      </div>
      <div className="w-[960px] px-[15px] py-[10px] h-[234.53px]">
        <div>
          <table className="w-[927.78px] border-[1px]">
            <thead className="bg-[#647286] text-white font-[500] text-[12px] h-[34.22px] ">
              <tr>
                <th className="px-[25px] py-[8px] border-[1px] border-[#ddd] ">
                  FLIGHT
                </th>
                <th className="px-[25px] py-[8px] border-[1px] border-[#ddd]  ">
                  FROM
                </th>
                <th className="px-[25px] py-[8px] border-[1px] border-[#ddd]  ">
                  TO
                </th>
                <th className="px-[25px] py-[8px] border-[1px] border-[#ddd]  ">
                  DURATION
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b-[1px] border-[#ddd] ">
                <td className="px-[25px] pt-[5px] pb-[12px] border-r-[1px] border-[#ddd] ">
                  <div className="flex items-center my-[10px] gap-1 font-[700] text-[16px]">
                    <img
                      src="https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_tk.png"
                      alt=""
                    />
                    <h4>TK1334</h4>
                  </div>

                  <div className="font-[700] text-[14px] text-[#647286]">
                    <h5>Turkish Airlines</h5>

                    <small>
                      <span className="text-[#0665E4] font-[600]">
                        Boeing 737 MAX 8{" "}
                      </span>
                      <span>Narrow body</span>
                    </small>
                  </div>
                </td>
                <td className="px-[25px] pt-[5px] pb-[12px] border-r-[1px] border-[#ddd] ">
                  <h4 className="text-[16px] font-[700] mt-[10px] mb-[5px] text-[#0665E4]">
                    18:15
                  </h4>

                  <div>
                    <div className="text-[14px] font-[700] ">Bremen (BRE)</div>
                    <div className="text-[12px] font-[500] text-[#647286] ">
                      Bremen Airport
                    </div>
                  </div>
                </td>
                <td className="px-[25px] pt-[5px] pb-[12px] border-r-[1px] border-[#ddd] ">
                  <h4 className="text-[16px] font-[700] mt-[10px] mb-[5px] text-[#0665E4]">
                    20:15
                  </h4>

                  <div>
                    <div className="text-[14px] font-[700] ">
                      Istanbul (IST)
                    </div>
                    <div className="text-[12px] font-[500] text-[#647286] ">
                      Istanbul Airport
                    </div>
                  </div>
                </td>
                <td className="px-[25px] pt-[5px] pb-[12px] text-[16px] font-[900]">
                  <h4>3h 5m</h4>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pt-[20px] px-[15px]  border-b-[1px] border-l-[1px] border-r-[1px]  w-[927.78px] flex justify-end ">
            <div className="text-white mb-[15px] bg-[#E81932] rounded-[5px] font-[700] text-[14px] w-[165.5px] h-[48px] flex items-center justify-center  ">
              <p>Show prices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
