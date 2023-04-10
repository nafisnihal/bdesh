import React from "react";
import FindJob from "./FindJob";
import Carousel from "./Carousel";
import CountryCategory from "./CountryCategory";
import "../styles/Hero.scss";
import Summary from "./Summary";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3 d-none d-md-block">
            <FindJob />
          </div>
          <div className="col-sm-12 col-md-6 p-0">
            <Carousel />
          </div>
          <div className="col-sm-12 col-md-3 d-block d-md-none  bg-white">
            <Summary />
          </div>
          <div className="col-sm-12 col-md-3">
            <CountryCategory />
          </div>
          <div className="col-sm-12 d-block d-md-none">
            <FindJob />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
