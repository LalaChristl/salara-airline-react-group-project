import * as React from "react";

import { data } from "../../data/Data";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Radio from "@mui/material/Radio";
import { Context } from "../../context/Context";
import EconomyCardContainer from "./EconomyCardContainer";
import BusinessCardContainer from "./BusinessCardContainer";

const FlightCard = () => {
  const [selectedValue, setSelectedValue] = React.useState(false);

  const { state, dispatch } = React.useContext(Context);

  const [showCard, setShowCard] = React.useState({ id: "" });
  const [showEconomy, setEconomy] = React.useState({ id: "" });
  const [showBusiness, setShowBusiness] = React.useState({ id: "" });

  console.log("Show Card", showCard);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const legSearch =
    state?.departure.slice(0, 3).toUpperCase() +
    "-" +
    state?.arrival.slice(0, 3).toUpperCase();

  const filteredArr = data.filter((item) => item.legId.includes(legSearch));

  console.log(filteredArr);

  console.log(state?.itineraryCard);
  return (
    <div>
      {filteredArr.map((item, i) => (
        <div key={i}>
          <div
            className={`text-[14px] flex ${
              (state?.itinerary?.id1 && showCard.id === i) ||
              (state?.economy?.id1 && showEconomy.id === i) ||
              (state?.business?.id1 && showBusiness.id === i)
                ? "pb-[0rem]"
                : "pb-[1rem]"
            }  `}
          >
            <div
              className={` flex items-center w-[498.41px] ${
                state?.itinerary?.id1 && showCard.id === i
                  ? "h-[120px]"
                  : "h-[105px] hover:shadow-2xl"
              }  px-[10px] py-[20px] bg-[#FFFFFF]  ${
                state?.itinerary?.id1 && showCard.id === i ? "" : "shadow-md"
              } `}
            >
              <div className="w-[277.44px] px-[10px] flex ">
                <div className="w-[114.83px] flex flex-col justify-center">
                  <p className="text-[16px] font-[700]">{item.departureTime}</p>
                  <p className="text-[14px] font-[700] text-[#697886]">
                    {item.departureAirportCode}
                  </p>
                  <p className="text-[10px] font-[700] text-[#697886]">
                    {item.departureAirportCity}
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
                  <p className="text-[16px] font-[700]">{item.arrivalTime}</p>
                  <p className="text-[14px] font-[700] text-[#697886]">
                    {item.arrivalAirportCode}
                  </p>
                  <p className="text-[10px] font-[700] text-[#697886]">
                    {item.arrivalAirportCity}
                  </p>
                </div>
              </div>
              <div className="w-[97.48px] pr-[5px] text-center ">
                <p className="text-[10px] text-[#697886] font-[300]">
                  Flight duration
                </p>
                <p className="text-[#232B38] font-[700]">
                  {item.travelDuration}
                </p>
              </div>
              <div
                onClick={() => {
                  setShowCard({ id: i });
                  // console.log(showCard.id, i);
                  dispatch({
                    type: "itinerary",
                    payload: item,
                  });
                }}
                className="w-[103.48px]  pl-[10px] flex flex-col justify-center items-center"
              >
                <p className="text-[12px] text-[#697886] font-[700]">
                  Itinerary details
                </p>
                {showCard.id === i && state?.itinerary?.id1 ? (
                  <MdKeyboardArrowUp className="mx-auto w-[30px] h-[23px] " />
                ) : (
                  <MdKeyboardArrowDown className="mx-auto w-[30px] h-[23px] " />
                )}
              </div>
            </div>
            <div
              onClick={() => {
                setEconomy({ id: i });
                // console.log(showCard.id, i);
                dispatch({
                  type: "economy",
                  payload: item,
                });
              }}
              className={`w-[220.8px] ml-[10px] pb-[15px] bg-white ${
                state?.economy?.id1 && showEconomy.id === i
                  ? "h-[120px]"
                  : "h-[105px] hover:shadow-2xl"
              } ${
                state?.economy?.id1 && showEconomy.id === i ? "" : "shadow-md"
              }  `}
            >
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
                  <p className="text-[16px] font-[700]">EUR {item.ecoFly}</p>
                </div>
                {showEconomy.id === i && state?.economy?.id1 ? (
                  <MdKeyboardArrowUp className="mx-auto w-[30px] h-[23px] " />
                ) : (
                  <MdKeyboardArrowDown className="mx-auto w-[30px] h-[23px] " />
                )}
              </div>
            </div>
            <div
              onClick={() => {
                setShowBusiness({ id: i });
                // console.log(showCard.id, i);
                dispatch({
                  type: "business",
                  payload: item,
                });
              }}
              className={`  w-[220.8px] relative  ml-[10px]  pb-[15px] bg-white ${
                state?.business?.id1 && showBusiness.id === i
                  ? "h-[120px]"
                  : "h-[105px] hover:shadow-2xl"
              } ${
                state?.business?.id1 && showBusiness.id === i ? "" : "shadow-md"
              }  `}
            >
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
                  <p className="text-[16px] font-[700]">EUR {item.business}</p>
                </div>
                <MdKeyboardArrowDown className=" w-[30px] h-[23px] mt-[1rem]" />
              </div>
              <p className="text-[#FF0000] absolute bottom-[.3rem] left-[5.3rem] font-[700] text-[12px]">
                4 left at this price
              </p>
            </div>
          </div>
          {showCard.id === i && state?.itinerary?.id1 && (
            <div className="bg-white z-30 pt-[1rem] shadow-md">
              <div className="w-[960px] px-[15px] mb-[10px] h-[234.53px]">
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
                    <tr className="border-b-[1px] border-[#ddd] hover:bg-[#f1f1f1] ">
                      <td className="px-[25px] pt-[5px] pb-[12px] border-r-[1px] border-[#ddd] ">
                        <div className="flex items-center my-[10px] gap-1 font-[700] text-[16px]">
                          <img
                            src="https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_tk.png"
                            alt=""
                          />
                          <h4>
                            {state?.itineraryCard.airlineCode}
                            {state?.itineraryCard.flightNumber}
                          </h4>
                        </div>

                        <div className="font-[700] text-[14px] text-[#647286]">
                          <h5>{state?.itineraryCard.airlineName}</h5>

                          <small>
                            <span className="text-[#0665E4] font-[600]">
                              {state?.itineraryCard.plane}
                            </span>{" "}
                            <span>{state?.itineraryCard.type}</span>
                          </small>
                        </div>
                      </td>

                      <td className="px-[25px] pt-[5px] pb-[12px] border-r-[1px] border-[#ddd] ">
                        <h4 className="text-[16px] font-[700] mt-[10px] mb-[5px] text-[#0665E4]">
                          {state?.itineraryCard.departureTime}
                        </h4>

                        <div>
                          <div className="text-[14px] font-[700] ">
                            {state?.itineraryCard.departureAirportCity}{" "}
                            {state?.itineraryCard.departureAirportCode}
                          </div>
                          <div className="text-[12px] font-[500] text-[#647286] ">
                            {state?.itineraryCard.departureAirportLocation}
                          </div>
                        </div>
                      </td>
                      <td className="px-[25px] pt-[5px] pb-[12px] border-r-[1px] border-[#ddd] ">
                        <h4 className="text-[16px] font-[700] mt-[10px] mb-[5px] text-[#0665E4]">
                          {state?.itineraryCard.arrivalTime}
                        </h4>

                        <div>
                          <div className="text-[14px] font-[700] ">
                            {state?.itineraryCard.arrivalAirportCity}{" "}
                            {state?.itineraryCard.arrivalAirportCode}
                          </div>
                          <div className="text-[12px] font-[500] text-[#647286] ">
                            {state?.itineraryCard.arrivalAirportLocation}
                          </div>
                        </div>
                      </td>
                      <td className="px-[25px] pt-[5px] pb-[12px] text-[16px] font-[900]">
                        <h4>{state?.itineraryCard.travelDuration}</h4>
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
          )}
          {showEconomy.id === i && state?.economy?.id1 && (
            <div className="p-[16px] bg-white">
              <EconomyCardContainer />
            </div>
          )}
          {showBusiness.id === i && state?.business?.id1 && (
            <div className="p-[16px] bg-white">
              <BusinessCardContainer />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlightCard;
