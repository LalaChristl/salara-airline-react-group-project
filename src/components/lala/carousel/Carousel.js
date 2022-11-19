import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgGirl from "../../images/logo.png";
import img1 from "../../images/carousel-1.jpeg";
import img2 from "../../images/carousel-2.jpeg";
import img3 from "../../images/carousel-3.jpeg";
import img4 from "../../images/carousel-4.jpeg";

const dataset = [
  {
    image: img1,
    title: "A journey through the history of the UEFA Champions League",
    details:
      "We take a closer look at Europe's largest sporting event, which is held this year under the official sponsorship of Turkish Airlines.",
  },
  {
    image: img2,
    title: "Offset the carbon emissions of your flight!",
    details:
      "Contribute to our effort to improve our world by offsetting the carbon emissions associated with your flight.",
  },
  {
    image: img3,
    title: "Discover Istanbul with Touristanbul!",
    details:
      "Our international transit passengers can discover the historical and cultural values of Istanbul with a complimentary guided tour.",
  },
  {
    image: img4,
    title:
      "You can buy tickets on the app, create a mobile boarding pass and check-in in the fastest way. We'll also send useful notifications on campaigns and important announcements.",
  },
];

const CarouselFunction = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <div className="App">
      <Slider {...settings}>

          {dataset.map((item) => (
            <div  className=" card border-2">
              <div className="card-top" style={{maxWidth: '150px'}}>
                <img
                style={{marginRight: 0}}
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.image
                  }
                  alt={item.title}
                  onError={handleErrorImage}
                />
                <h1 style={{maxWidth: '150px'}}>{item.title}</h1>
              </div>
              <div className="card-bottom" style={{ width: "150px" }}>
                <h3>{item.details}</h3>
              </div>
            </div>
          ))}
       
      </Slider>
    </div>
  );
};

export default CarouselFunction;
