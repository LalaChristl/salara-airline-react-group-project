import React from "react";
import Header from "../lala/header/Header";
import MainPage from "../rabi/MainPage";
import SearchContainer from "../saad/searchflights/SearchContainer";
import CarouselFunction from "../lala/carousel/Carousel";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainPage />
      <SearchContainer />
      <CarouselFunction/>
    </div>
  );
};

export default HomePage;
