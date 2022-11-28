import React from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import ImageHeader from "./ImageHeader";
// import CarouselFunction from "../carousel/Carousel";

const Header = () => {
  return (
    <div>
      <div className="sticky top-0 z-30">
        <TopNav />
        <BottomNav />
      </div>
      <ImageHeader />
      {/* <CarouselFunction /> */}
    </div>
  );
};

export default Header;
