import React from "react";
import RadioButtons from "./RadioButton";
import Checkbox from "@mui/material/Checkbox";
import CityDate from "./CityDate";

const Flight = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <div className="flex justify-between h-[40px]">
        <div>
          <RadioButtons />
        </div>
        <div className="flex items-center hover:border-b-2 hover:border-red-500 hover:cursor-pointer">
          <Checkbox {...label} />
          <p>Award ticket - Buy a ticket with Miles</p>
        </div>
      </div>
      <CityDate />
      <div className="font-[700] text-[#232B38]">Recent searches</div>
    </div>
  );
};

export default Flight;
