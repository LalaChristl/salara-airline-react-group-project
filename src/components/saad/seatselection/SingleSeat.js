import React from "react";

export const ExtraLegroom = () => {
  return (
    <div className="w-[37px] h-[37px]">
      <img
        className="w-full"
        src="https://www.turkishairlines.com/theme/img/additional-services-card/extra-legroom-seat.svg"
        alt=""
      />
    </div>
  );
};
export const ExitSeat = () => {
  return (
    <div className="w-[37px] h-[37px]">
      <img
        className="w-full"
        src="https://www.turkishairlines.com/theme/img/additional-services-card/exit-seat.svg"
        alt=""
      />
    </div>
  );
};
export const SelectedSeat = () => {
  return (
    <div className="w-[37px] h-[37px]">
      <img
        className="w-full"
        src="https://www.turkishairlines.com/theme/img/additional-services-card/full-seat.svg"
        alt=""
      />
    </div>
  );
};
export const BabySeat = () => {
  return (
    <div className="w-[37px] h-[37px]">
      <img
        className="w-full"
        src="https://www.turkishairlines.com/theme/img/additional-services-card/baby-bassinet-seat.svg"
        alt=""
      />
    </div>
  );
};

const SingleSeat = () => {
  return (
    <div className="relative w-[37px] h-[37px]">
      <img
        className="w-full"
        src="https://www.turkishairlines.com/theme/img/additional-services-card/standart-seat.svg"
        alt=""
      />
    </div>
  );
};

export default SingleSeat;
