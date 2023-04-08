import React from "react";
import "../styles/Jobs.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Jobs = () => {
  return (
    <div id="jobs">
      <div className="container">
        <p className="text-white fs-4 fw-bold text-center">
          Jobs in different countries
        </p>
        <div>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <div class="card text-center border-0 ">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-success">45</h5>
                  <p class="card-text">vacancies</p>
                </div>
                <div class="card-footer bg-black text-white border-0 fw-bold">
                  United Arab Emirates
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div class="card text-center border-0">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-success">35</h5>
                  <p class="card-text">vacancies</p>
                </div>
                <div class="card-footer bg-black text-white border-0 fw-bold">
                  Saudi Arabia
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div class="card text-center border-0">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-success">25</h5>
                  <p class="card-text">vacancies</p>
                </div>
                <div class="card-footer bg-black text-white border-0 fw-bold">
                  Japan
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card text-center border-0">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-success">25</h5>
                  <p class="card-text">vacancies</p>
                </div>
                <div class="card-footer bg-black text-white border-0 fw-bold">
                  Japan
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card text-center border-0">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-success">11</h5>
                  <p class="card-text">vacancies</p>
                </div>
                <div class="card-footer bg-black text-white border-0 fw-bold">
                  South Korea
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card text-center border-0">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-success">6</h5>
                  <p class="card-text">vacancies</p>
                </div>
                <div class="card-footer bg-black text-white border-0 fw-bold">
                  Malaysia
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card text-center border-0">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-success">6</h5>
                  <p class="card-text">vacancies</p>
                </div>
                <div class="card-footer bg-black text-white border-0 fw-bold">
                  Oman
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card text-center border-0">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-success">1</h5>
                  <p class="card-text">vacancies</p>
                </div>
                <div class="card-footer bg-black text-white border-0 fw-bold">
                  Jordan
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card text-center border-0">
                <div class="card-body">
                  <h5 class="card-title fw-bold text-success">1</h5>
                  <p class="card-text">vacancies</p>
                </div>
                <div class="card-footer bg-black text-white border-0 fw-bold">
                  Denmark
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
