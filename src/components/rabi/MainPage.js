import React from "react";
import TopHomeCard from "./card/TopHomeCard";
import BottomHomeCard from "./card/BottomHomeCard";
import FooterTop from "./footer/FooterTop";
import FooterNav from "./footer/FooterNav";
import FooterBottom from "./footer/FooterBottom";

const MainPage = () => {
  return (
    <div>
      <TopHomeCard />
      <hr />
      <BottomHomeCard />
      <hr />
      <FooterTop />
      <FooterNav />
      <FooterBottom />
    </div>
  );
};

export default MainPage;
