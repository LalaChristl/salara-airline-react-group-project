import * as React from "react";

import { data } from "../../data/Data";
import { MdKeyboardArrowDown } from "react-icons/md";
import Radio from "@mui/material/Radio";

const FlightCard = () => {
  const [selectedValue, setSelectedValue] = React.useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  console.log(data);
  return (
    <div className="text-[14px] flex items-center">
      <div className=" flex items-center w-[498.41px] h-[105px] px-[10px] py-[20px] bg-[#FFFFFF]">
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
            <p>Direct</p>
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
          <p className="text-[#232B38] font-[700]">{data[0].travelDuration}</p>
        </div>

        <div className="w-[103.48px]  pl-[10px] flex flex-col justify-center items-center">
          <p className="text-[12px] text-[#697886] font-[700] ">
            Iternary details
          </p>
          <MdKeyboardArrowDown className="mx-auto w-[30px] h-[23px]" />
        </div>
      </div>

      <div className="w-[220.8px]  h-[105px] ml-[10px]  pb-[15px] border-2 ">
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
          <div className="pt-[16px]">
            <p className="font-[600] text-[10px] text-[#697886]">
              Per pessenger
            </p>
            <p className="text-[16px] font-[700]">{data[0].price}</p>
          </div>
          <MdKeyboardArrowDown className=" w-[30px] h-[23px] mt-[1rem]" />
        </div>
      </div>

      <div className="w-[220.8px]  h-[105px] ml-[10px]  pb-[15px] border-2 ">
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
          <div className="pt-[16px]">
            <p className="font-[600] text-[10px] text-[#697886]">
              Per pessenger
            </p>
            <p className="text-[16px] font-[700]">{data[0].price}</p>
            <p className="text-[#FF0000] font-[700] text-[12px]">
              4 left at this price
            </p>
          </div>
          <MdKeyboardArrowDown className=" w-[30px] h-[23px] mt-[1rem]" />
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
