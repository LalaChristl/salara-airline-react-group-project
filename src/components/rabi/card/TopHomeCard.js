import React from "react";
import "../styles/style.css";
import firstIcon from "../images/l1.svg";
import secondIcon from "../images/l2.svg";
import thirdIcon from "../images/l3.svg";

const TopHomeCard = () => {
  return (
    <div className="main-card">
      <div className="top-container">
        <br />
        <ul className="card-ul">
          <li className="top-card top-card1">
            {/* <div className="icon icon-1"> </div> */}
            <div class=" icon icon-1 col-md-3">
              <img className="icon-img-1 " src={firstIcon} />
            </div>

            <div className="top-card-text top-card-text1">
              <h2 className="top-card-h2">Additional services</h2>
              <p className="top-card-p">
                You can benefit from our services such as hotel reservation and
                car rental that will enrich your travel.
              </p>
            </div>
          </li>
          <li className="top-card top-card2">
            <div className="icon icon-2 col-md-3">
              <img src={secondIcon} alt="" className="icon-img" />
            </div>
            <div className="top-card-text top-card-text1">
              <h2 className="top-card-h2"> Travel requirements</h2>
              <p className="top-card-p">
                Use our interactive map to access current travel requirements
                for different countries.
              </p>
            </div>
          </li>
          <li className="top-card top-card3">
            <div className="icon icon-3 col-md-3">
              <img src={thirdIcon} alt="" className="icon-img" />
            </div>
            <div className="top-card-text top-card-text1">
              <h2 className="top-card-h2">Turkish Airlines Gift Card</h2>
              <p className="top-card-p">
                With Turkish Airlines Gift Card, you can present a surprise
                travel experience to your loved ones and let them experience the
                excitement of discovering new places.
              </p>
            </div>
          </li>
        </ul>
        <br />
      </div>
      <div className="top-para">
        <div className="info ">
          <p>i</p>
        </div>
        <div className="info-paragraph">
          <p>Dear Passengers,</p>
          <p>
            You can access the announcements regarding our flights to Ukraine,
            Belarus and Russia and the rights granted to our passengers for our
            flights to these countries here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHomeCard;
