import React from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import ImageHeader from "./ImageHeader";
import CarouselFunction from "../carousel/Carousel";

const Header = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <ImageHeader />
      <CarouselFunction />
    </div>
  );
};

export default Header;
