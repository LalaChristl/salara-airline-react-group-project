import React from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav"
import ImageHeader from "./ImageHeader";

const Header = () => {
  return (
    <div>
      <TopNav />
      <BottomNav/>
      <ImageHeader/>
    </div>
  );
};

export default Header;
