import React from "react";
import slide1 from "../assets/images/slide-00.jpg"
import slide2 from "../assets/images/slide-01.jpg"
import slide3 from "../assets/images/slide-03.jpg"
import slide4 from "../assets/images/slide-04.jpg"
import slide5 from "../assets/images/slide-05.jpg"

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide5} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="bg-white p-4"></div>
    </div>
  );
};

export default Carousel;
