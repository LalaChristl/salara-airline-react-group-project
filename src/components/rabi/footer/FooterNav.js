import React from "react";

function FooterNav() {
  return (
    <div
      class="footer-nav"
      style={{
        height: "56.7px",
        backgroundColor: "#181c23",
        color: "#ffffff",
        fontSize: "12px",
        fontWeight: "700",
      }}
    >
      <ul className="footer-nav d-flex justify-content-center role=tab">
        <li className="px-[10px] pt-[15px] pb-[5px] text-center cursor-pointer bx-danger">
          <a>
            PLAN &amp; BOOK <br />
            <i className="fa fa-sort-desc"></i>
          </a>
        </li>
        <li className="px-[10px] pt-[15px] pb-[5px] width-[40px] text-center cursor-pointer">
          <a>
            FLY DIFFERENT <br />
            <i className="fa fa-sort-desc "></i>
          </a>
        </li>
        <li className="px-[10px] pt-[15px] pb-[5px] text-center cursor-pointer">
          <a>
            DISCOVER <br />
            <i className="fa fa-sort-desc"></i>
          </a>
        </li>
        <li className="px-[10px] pt-[15px] pb-[5px] text-center cursor-pointer">
          <a>
            FAVORITE DESTINATION <br /> <i className="fa fa-sort-desc "></i>
          </a>
        </li>
        <li className="px-[10px] pt-[15px] pb-[5px] text-center cursor-pointer">
          <a>
            ANY QUESTIONS <br />
            <i className="fa fa-sort-desc"></i>
          </a>
        </li>
        <li className="px-[10px] pt-[15px] pb-[5px] text-center cursor-pointer">
          <a>
            MILES &amp; MILES <br />
            <i className="fa fa-sort-desc"></i>
          </a>
        </li>
        <li className="px-[10px] pt-[15px] pb-[5px] text-center cursor-pointer">
          <a>
            CORPORATE CLUB <br />
            <i className="fa fa-sort-desc"></i>
          </a>
        </li>
        <li className="px-[10px] pt-[15px] pb-[5px] text-center cursor-pointer">
          <a>
            TURKISH AIRLINES <br />
            <i className="fa fa-sort-desc"></i>
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default FooterNav;
