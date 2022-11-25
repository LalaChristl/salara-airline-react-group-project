import { padding } from "@mui/system";
import React from "react";
import plIcon from "../../images/pl-icon.ico";
import user from "../../images/user.png";
import ccard from "../../images/cc.jpg";
import "../../rabi/styles/style.css";

const SearchNav = () => {
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
          className="search-nav-logo"
          style={{ padding: "13px 25px 12px 14px" }}
        >
          <img
            className="search-nav-img w-[35px] h-[35px]"
            src="https://www.turkishairlines.com/theme/img/logo-top-white-small-current.png"
          />
        </div>
        <div className="searchNav-bar flex justify-content-center w-full max-w-[860px] h-full mx-auto  ">
          <a className=" align-items-center flex px-[20px]">
            <img className="plane-icon px-[10px]" src={plIcon} />
            <span>Select Flight</span>
          </a>
          <a className=" align-items-center flex px-[20px]">
            <img
              className="plane-icon px-[10px] h-[30px] w-[40px]"
              src={user}
            />
            <span>Passenger Details</span>
          </a>
          <a className=" align-items-center flex px-[10px]">
            <img
              className="plane-icon px-[10px] "
              src="https://www.turkishairlines.com/theme/img/header-additional-icon.png"
            />
            <span>Additional Services</span>
          </a>
          <a className=" align-items-center flex px-[10px]">
            <img className="plane-icon px-[10px] w-[50px]" src={ccard} />
            <span>Payment</span>
          </a>
        </div>
        <span className="euro-icon  ">&#8364;</span>
        <span className="euro p-[10px]"> EUR </span>
        <i className="fa fa-angle-down fs-18 text-danger "></i>
      </div>
    </>
  );
};

export default SearchNav;
