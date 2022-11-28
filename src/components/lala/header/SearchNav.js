import { padding } from "@mui/system";
import React, { useContext } from "react";
import plIcon from "../../images/pl-icon.ico";
import user from "../../images/user.png";
import ccard from "../../images/cc.jpg";
import "../../rabi/styles/style.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const SearchNav = ({ selected, additional, passenger, payment }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <div
        className="searchNav flex text-white fw-bold px-[10px]"
        style={{
          backgroundColor: "#232b38",
          fontSize: "14px",
          height: "61px",
          alignItems: "center",
        }}
      >
        <div
          onClick={() => {
            dispatch({
              type: "RESET-AIRPORT",
              showPlaneArrival: true,
              showPlaneDeparture: true,
            });
            navigate("/");
          }}
          className="search-nav-logo cursor-pointer"
          style={{ padding: "13px 25px 12px 14px" }}
        >
          <img
            className="search-nav-img w-[35px] h-[35px]"
            src="https://www.turkishairlines.com/theme/img/logo-top-white-small-current.png"
            alt=""
          />
        </div>
        <div className="searchNav-bar flex justify-content-center w-full max-w-[860px] h-full mx-auto  ">
          <div
            style={{
              padding: "0 4rem 0 1rem ",
              clipPath:
                "polygon(75% 0%, 85% 50%, 75% 100%, 0% 100%, 8% 50%, 0% 0%)",
            }}
            className={` align-items-center flex ${
              selected && "bg-red-600"
            }  clip`}
          >
            <img
              className="plane-icon px-[10px] w-[61px] h-[61px]"
              src={plIcon}
              alt=""
            />
            <span className="w-full">Select Flight</span>
          </div>

          <div
            style={{
              padding: "0 4rem 0 1rem ",
              clipPath:
                "polygon(75% 0%, 85% 50%, 75% 100%, 0% 100%, 8% 50%, 0% 0%)",
            }}
            className={` align-items-center flex ${
              passenger && "bg-red-600"
            }  clip`}
          >
            <img
              className="plane-icon px-[10px] h-[30px] w-[40px]"
              src={user}
              alt=""
            />
            <span>Passenger Details</span>
          </div>

          <div
            style={{
              padding: "0 4rem 0 1rem ",
              clipPath:
                "polygon(75% 0%, 85% 50%, 75% 100%, 0% 100%, 8% 50%, 0% 0%)",
            }}
            className={` align-items-center flex ${
              additional && "bg-red-600"
            }  clip`}
          >
            <img
              className="plane-icon px-[10px] "
              src="https://www.turkishairlines.com/theme/img/header-additional-icon.png"
              alt=""
            />
            <span>Additional Services</span>
          </div>
          <div
            style={{
              padding: "0 4rem 0 1rem ",
              clipPath:
                "polygon(75% 0%, 85% 50%, 75% 100%, 0% 100%, 8% 50%, 0% 0%)",
            }}
            className={` align-items-center flex ${
              payment && "bg-red-600"
            }  clip`}
          >
            <img className="plane-icon px-[10px] w-[50px]" src={ccard} alt="" />
            <span>Payment</span>
          </div>
        </div>
        <span className="euro-icon  ">&#8364;</span>
        <span className="euro p-[10px]"> EUR </span>
        <i className="fa fa-angle-down fs-18 text-danger pr-2 "></i>
      </div>
    </>
  );
};

export default SearchNav;
