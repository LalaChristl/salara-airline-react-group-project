import React from "react";
import cardImg from "../images/Stopover.webp";
import cardImg2 from "../images/touristanbul.jpg";

function BottomHomeCard() {
  return (
    <div>
      <div className="bottom-card-wrapper py-[30px] flex justify-center">
        <div className="bottom-card px-[15px]">
          <h4 className="card-title">
            Stopover in Istanbul: The most enjoyable surprise!
          </h4>
          <hr className="m-[20px]" />
          <img src={cardImg} className="card-img-top" alt="..." /> <br />
          <div className="card-body p-0">
            <p className="card-text">
              Stopover in Istanbul, which we have prepared for our transit
              passengers traveling via Istanbul Airport, offers free
              accommodation at our contracted hotels and the opportunity to
              discover the city.
            </p>
            <br />
            <a href="#" className="btn ">
              Discover
            </a>
          </div>
        </div>
        <div className="bottom-card col-sm-6 px-[15px]">
          <h4 className="card-title ">Touristanbul: An amazing experience!</h4>
          <hr className="m-[20px]" />
          <img src={cardImg2} className="card-img-top" alt="..." /> <br />
          <div className="card-body p-0">
            <p className="card-text ">
              Touristanbul offers you to see the beautiful sights of Istanbul
              where has hosted major civilizations of the world.
            </p>
            <br />
            <a href="#" className="btn ">
              Discover
            </a>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}

export default BottomHomeCard;
