import React from "react";
import cv from "../assets/images/thousand_cv.png";
import bio from "../assets/images/make-bio.png";
import "../styles/OpenAcoounts.scss";

const OpenAcoounts = () => {
  return (
    <div id="accounts">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center cv-card">
          <div>
            <img src={cv} alt="" />
          </div>
          <div className="ms-3">
            <p className="title-account">
              হাজারো চাকরির মাঝে আপনার পছন্দের চাকরি খুঁজে আবেদন করতে জয়েন করুন
              আমাদের সাইটে।
            </p>
            <a
              href="https://bdesh.bdjobs.com/registration/createaccount_bdesh.asp"
              className="acc-btn"
            >
              একাউণ্ট খুলুন
            </a>
          </div>
        </div>
        <div className="col-md-5 d-flex align-items-center biodata-card">
          <div>
            <img src={bio} alt="" className="img-fluid" />
          </div>
          <div className="ms-3">
            <p className="fs-5 text-white mb-0">বায়োডাটা তৈরি করতে চান?</p>
            <p className="title-account">
              {" "}
              সহজ কয়েকটি ধাপে এখনই স্বল্প সময়েই তৈরি করুন আপনার সিভি
            </p>
            <a
              href="https://bdesh.bdjobs.com/registration/createaccount_bdesh.asp"
              className="acc-btn"
            >
              একাউণ্ট খুলুন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenAcoounts;
