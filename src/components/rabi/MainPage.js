import React from "react";
import TopHomeCard from "./card/TopHomeCard";
import BottomHomeCard from "./card/BottomHomeCard";
import FooterTop from "./footer/FooterTop";
import FooterNav from "./footer/FooterNav";
import FooterBottom from "./footer/FooterBottom";
import FooterHero from "./footer/FooterHero";

const MainPage = () => {
  return (
    <div className="mt-[10rem]">
      <TopHomeCard />
      <hr />
      <BottomHomeCard />
      <hr />
      <FooterHero />
      <FooterTop />
      <FooterNav />
      <FooterBottom />
    </div>
  );
};

export default MainPage;
